import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        
        {/* Name and Basic Info */}
        <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
          <h4 className="subtitle" style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>nome</h4>
          <h3 className="title-section" style={{ marginBottom: '0.5rem' }}>Kevin Nery Rodrigues</h3>
          <p className="text-body" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>22 anos (17.11.2003) | São Paulo - SP</p>
        </div>

        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div>
            <h4 className="title-section" style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>interesses</h4>
            <p className="text-body">
              Possuo um grande interesse por representação gráfica e imagens 3D, tendo um desejo em poder desenvolver mais minhas habilidades e conhecimentos nessa área para poder assim agregar não só a mim como também em meu local de trabalho.
            </p>
          </div>

          <div>
            <h4 className="title-section" style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>formação acadêmica</h4>
            <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2022 - Atualmente (Matutino)</p>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Universidade Cidade de São Paulo</p>
            <p className="text-body">Arquitetura e Urbanismo (9° Semestre)</p>
          </div>
        </div>

        {/* Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div>
            <h4 className="title-section" style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>trajetória</h4>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Vista Concept</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2024 - Atualmente</p>
              <p className="text-body">Estagiário na Vista Concept, escritório focado em arquitetura de varejo onde realizo projetos para marcas como BlueFit, Espaço Laser, Swarovski e Burguer King. Possuo demandas como projetos executivos, modelagem 3d e renderizações.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>McDonald's</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2023</p>
              <p className="text-body">Atendente de restaurante onde realizava funções como limpeza, atendimento ao público, cozinha e preparação de sorvetes.</p>
            </div>

            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Hering</p>
              <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>2023</p>
              <p className="text-body">Auxiliar de loja contratado como extra onde realizava funções como estoque, organização de loja e provador.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
