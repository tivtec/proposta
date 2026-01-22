'use server';

import PropostaPage from "../components/PropostaPage";

interface WebhookResponse {
  nome_pessoa: string;
  telefone_pessoa: string;
  id_proposta_valor_db: number;
  id_proposta_valor: string;
  id_equipamento: number;
  nome_equipamento: string;
  codigo_equipamento: number;
  valor_equipamento: number;
  valor: number;
  valor_equipamento_texto: string;
}

async function getCoteData(cod: string): Promise<WebhookResponse | null> {
  try {
    const response = await fetch('https://webh.verdetec.dev.br/webhook/fc99342f-4b56-4859-a362-e98196aee9e5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cod }),
      cache: 'no-store',
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}

function formatPhoneNumber(phone: string): string {
  if (!phone) return "(00) 00000-0000";
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
  return phone;
}

export default async function Cote({ searchParams }: { searchParams: Promise<{ cod?: string }> }) {
  const params = await searchParams;
  const cod = params.cod;

  if (!cod) {
    return (
      <main style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 600, textAlign: 'center', fontFamily: 'var(--font-poppins), sans-serif' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Código ausente</h2>
          <p style={{ fontSize: 16, color: '#555' }}>Adicione ?cod=SEU_CODIGO à URL para carregar a proposta.</p>
        </div>
      </main>
    );
  }

  const data = await getCoteData(cod);
  if (!data) {
    return (
      <main style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 600, textAlign: 'center', fontFamily: 'var(--font-poppins), sans-serif' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Não foi possível carregar a proposta</h2>
          <p style={{ fontSize: 16, color: '#555' }}>Verifique o código informado e tente novamente.</p>
        </div>
      </main>
    );
  }

  const dados = {
    nome: data.nome_pessoa || "Cliente",
    valor: data.valor_equipamento_texto ? `R$ ${data.valor_equipamento_texto}` : "",
    idProposta: data.id_proposta_valor?.toString() || "",
    telefone: formatPhoneNumber(data.telefone_pessoa),
    equipamento: data.codigo_equipamento || 0,
    nomeEquipamento: data.nome_equipamento || "",
  };

  return (
    <PropostaPage
      nome={dados.nome}
      valor={dados.valor}
      idProposta={dados.idProposta}
      telefone={dados.telefone}
      equipamento={dados.equipamento}
      nomeEquipamento={dados.nomeEquipamento}
    />
  );
}

