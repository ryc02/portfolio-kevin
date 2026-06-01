import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container about-grid">
        
        {/* Name and Basic Info */}
        <div className="about-header">
          <h4 className="subtitle" style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>nome</h4>
          <h3 id="about-heading" className="title-section" style={{ marginBottom: '0.5rem' }}>Kevin Nery Rodrigues</h3>
          <p className="text-body" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>22 anos (17.11.2003) | São Paulo - SP</p>
        </div>

        {/* Column 1 */}
        <div className="about-column">
          <div>
            <h4 className="title-section" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--accent-color)' }}>interesses</h4>
            <p className="text-body">
              Possuo um grande interesse por representação gráfica e imagens 3D, tendo um desejo em poder desenvolver mais minhas habilidades e conhecimentos nessa área para poder assim agregar não só a mim como também em meu local de trabalho.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h4 className="title-section" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--accent-color)' }}>formação acadêmica</h4>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2022 - Atualmente (Matutino)</p>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Universidade Cidade de São Paulo</p>
            <p className="text-body">Arquitetura e Urbanismo (9° Semestre)</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="about-column">
          <div>
            <h4 className="title-section" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--accent-color)' }}>trajetória</h4>
            
            <article style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Vista Concept</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2024 - Atualmente</p>
              <p className="text-body">Estagiário na Vista Concept, escritório focado em arquitetura de varejo onde realizo projetos para marcas como BlueFit, Espaço Laser, Swarovski e Burguer King. Possuo demandas como projetos executivos, modelagem 3d e renderizações.</p>
            </article>

            <article style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{"McDonald's"}</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2023</p>
              <p className="text-body">Atendente de restaurante onde realizava funções como limpeza, atendimento ao público, cozinha e preparação de sorvetes.</p>
            </article>

            <article>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Hering</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2023</p>
              <p className="text-body">Auxiliar de loja contratado como extra onde realizava funções como estoque, organização de loja e provador.</p>
            </article>
          </div>
        </div>

      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        .about-header {
          grid-column: 1 / -1;
          margin-bottom: 2rem;
        }
        
        .about-column {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-column {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
