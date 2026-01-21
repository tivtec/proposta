'use client';

import React, { useState, useEffect } from 'react';

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

  // Logic for dynamic image
  // Replace hyphens with spaces for file matching
  const formattedName = nomeEquipamento ? nomeEquipamento.replace(/-/g, ' ') : '';
  
  // State for image source and error handling
  // We start with .webp as it seems most common in the folder
  const [imgSrc, setImgSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (formattedName) {
      setImgSrc(`/imagens/equipamentos/${formattedName}.webp`);
      setHasError(false);
    } else if (equipamento > 0) {
        // Fallback to numeric ID if name is missing (legacy behavior)
        setImgSrc(`/imagens/equipamentos/${equipamento}.png`);
        setHasError(false);
    }
  }, [formattedName, equipamento]);

  const handleImageError = () => {
    // If webp fails, try png
    if (imgSrc.endsWith('.webp')) {
      setImgSrc(imgSrc.replace('.webp', '.png'));
    } else {
      // If png also fails (or it wasn't webp), mark as error
      setHasError(true);
    }
  };

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

      {/* Sessão 7 - Dinâmica */}
      <section 
        id="sessao-7"
        style={{
          ...sectionStyle,
          padding: '40px 0',
          backgroundColor: '#f5f5f5',
          flexDirection: 'column'
        }}
      >
        <div style={{...containerStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {formattedName && (
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '20px',
              textAlign: 'center',
              fontFamily: 'var(--font-poppins), sans-serif'
            }}>
              {formattedName}
            </h3>
          )}
          
          {!hasError && imgSrc ? (
            <img 
              src={imgSrc} 
              alt={formattedName || `Equipamento ${equipamento}`} 
              style={{
                width: '100%',
                maxWidth: '1000px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
              onError={handleImageError}
            />
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
               {/* Optional placeholder or empty */}
               {equipamento > 0 && <p>Imagem do equipamento não encontrada.</p>}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PropostaPage;
