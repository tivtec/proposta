'use client';

import React from 'react';

interface PropostaPageProps {
  nome?: string;
  valor?: string;
  idProposta?: string;
  telefone?: string;
  equipamento?: number;
  nomeEquipamento?: string;
}

const PropostaPage: React.FC<PropostaPageProps> = ({ 
  nome = "Visitante", 
  valor = "R$ 0,00",
  idProposta = "000000",
  telefone = "(00) 00000-0000",
  equipamento = 0,
  nomeEquipamento = ""
}) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    backgroundColor: '#ffffff'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '960px',
    height: 'auto',
    objectFit: 'contain',
    display: 'block'
  };

  const renderImageSection = (id: string, imageName: string) => (
    <section id={id} style={sectionStyle}>
      <img 
        src={`/imagens/${imageName}`} 
        alt={`Sessão ${id}`} 
        style={imageStyle}
      />
    </section>
  );

  // Sessão 7 dinâmica removida conforme solicitado; lógica de imagem dinâmica não é utilizada

  return (
    <main style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {renderImageSection('sessao-1', 'image_01.webp')}
      
      {/* Sessão 2 - Textos */}
      <section 
        id="sessao-2"
        style={{
          ...sectionStyle,
          padding: '40px 0',
        }}
      >
        <div style={{
          ...containerStyle,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          fontFamily: 'var(--font-poppins), sans-serif',
          fontStyle: 'italic',
          color: '#333'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#009688', // Teal/Green similar to image
            marginBottom: '20px',
            textTransform: 'capitalize',
            fontStyle: 'italic'
          }}>
            Olá, {nome}!
          </h2>
          
          <p style={{
            fontSize: '18px',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Parabéns! Você avançou mais uma etapa importante para a realização do seu mais novo negócio. 
            Vamos te ajudar em todas as fases necessárias para que o seu sonho de empreender se torne realidade muito em breve.
          </p>
          
          <p style={{
            fontSize: '18px',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Você está a um passo de fazer parte do maior <strong>ECOSSISTEMA DE HIDROSSEMEADURA DO HEMISFÉRIO SUL, a VERDETEC!</strong>
          </p>
        </div>
      </section>

      {/* Sessão 3 */}
      <section 
        id="sessao-3"
        style={{
          ...sectionStyle,
          padding: '40px 0',
        }}
      >
        <img 
          src="/imagens/image_02.webp" 
          alt="Sessão 3" 
          style={imageStyle}
        />
      </section>
      {/* Sessão 4 */}
      <section 
        id="sessao-4"
        style={{
          ...sectionStyle,
          padding: '40px 0',
        }}
      >
        <img 
          src="/imagens/image_03.webp" 
          alt="Sessão 4" 
          style={imageStyle}
        />
      </section>
      {/* Sessão 5 */}
      <section 
        id="sessao-5"
        style={{
          ...sectionStyle,
          padding: '30px 0',
        }}
      >
        <img 
          src="/imagens/image_04.webp" 
          alt="Sessão 5" 
          style={imageStyle}
        />
      </section>
      {/* Sessão 6 */}
      <section 
        id="sessao-6"
        style={{
          ...sectionStyle,
          padding: '40px 0',
        }}
      >
        <img 
          src="/imagens/image_05.webp" 
          alt="Sessão 6" 
          style={imageStyle}
        />
      </section>

      
      
      <section 
        id="sessao-8"
        style={{
          ...sectionStyle,
          padding: '30px 0',
        }}
      >
        <div style={{
          ...containerStyle,
          textAlign: 'center',
          fontFamily: 'var(--font-poppins), sans-serif',
          fontStyle: 'italic',
          color: '#333'
        }}>
          <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', textTransform: 'capitalize' }}>
            {nome},
          </p>
          <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
            Investimento inicial para o seu novo negócio:
          </p>
          {valor && (
            <p style={{ fontSize: '20px', fontWeight: 700 }}>
              {valor}
            </p>
          )}
        </div>
      </section>
      
      <section 
        id="sessao-9"
        style={{
          ...sectionStyle,
          padding: '30px 0',
        }}
      >
        <img 
          src="/imagens/image_06_assi.webp" 
          alt="Sessão 9" 
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </section>
      
      <section 
        id="sessao-10"
        style={{
          ...sectionStyle,
          padding: '30px 0',
        }}
      >
        <div style={{
          ...containerStyle,
          fontFamily: 'var(--font-poppins), sans-serif',
          color: '#333'
        }}>
          <ul style={{ fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
            <li>Clientes que não contribuem com o ICMS devem informar à vendedora para inserção dos impostos interestaduais</li>
            <li>Orçamento válido por 30 dias</li>
            <li>*O investimento apresentado não contempla os acessórios opcionais</li>
            <li> Número de identificação: <strong>{idProposta}</strong></li>
            <li> Número de Telefone do Orçamento: <strong>{telefone}</strong></li>
          </ul>
        </div>
      </section>
      
      <section 
        id="sessao-11"
        style={{
          ...sectionStyle,
          padding: '30px 0',
        }}
      >
        <img 
          src="/imagens/image_07.webp" 
          alt="Sessão 11" 
          style={imageStyle}
        />
      </section>
    </main>

  );
};


export default PropostaPage;
