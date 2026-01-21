import PropostaPage from "./components/PropostaPage";

interface WebhookResponse {
  nome_pessoa: string;
  telefone_pessoa: string;
  id_proposta_valor: number;
  valor_equipamento_texto: string;
  codigo_equipamento: number;
  nome_equipamento: string;
}

async function getPropostaData(cod: string): Promise<WebhookResponse | null> {
  try {
    const response = await fetch('https://webh.verdetec.dev.br/webhook/fc99342f-4b56-4859-a362-e98196aee9e5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url_proposta: cod }),
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Webhook returned error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching proposal data:', error);
    return null;
  }
}

function formatPhoneNumber(phone: string): string {
  if (!phone) return "(00) 00000-0000";
  // Remove non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Format as (XX) XXXXX-XXXX
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export default async function Home({ searchParams }: { searchParams: Promise<{ cod?: string }> }) {
  const params = await searchParams;
  const cod = params.cod;
  let dadosProposta = {
    nome: "Cliente",
    valor: "R$ 0,00",
    idProposta: "000000",
    telefone: "(00) 00000-0000",
    equipamento: 0,
    nomeEquipamento: ""
  };

  if (cod) {
    const data = await getPropostaData(cod);
    if (data) {
      dadosProposta = {
        nome: data.nome_pessoa || "Cliente",
        valor: data.valor_equipamento_texto ? `R$ ${data.valor_equipamento_texto}` : "R$ 0,00",
        idProposta: data.id_proposta_valor ? data.id_proposta_valor.toString() : "000000",
        telefone: formatPhoneNumber(data.telefone_pessoa),
        equipamento: data.codigo_equipamento || 0,
        nomeEquipamento: data.nome_equipamento || ""
      };
    }
  }

  return (
    <PropostaPage 
      nome={dadosProposta.nome}
      valor={dadosProposta.valor}
      idProposta={dadosProposta.idProposta}
      telefone={dadosProposta.telefone}
      equipamento={dadosProposta.equipamento}
      nomeEquipamento={dadosProposta.nomeEquipamento}
    />
  );
}
