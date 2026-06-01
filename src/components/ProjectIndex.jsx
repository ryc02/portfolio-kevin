import React from 'react';

const indexData = [
  {
    id: "01",
    title: "VITTA STUDIO",
    image: "/assets/capa-vitta-studio.jpeg"
  },
  {
    id: "02",
    title: "APARTAMENTO BAHIRA",
    image: "/assets/capa-bahira.png"
  },
  {
    id: "03",
    title: "ESCRITÓRIO AMBEV",
    image: "/assets/capa-ambev.png"
  },
  {
    id: "04",
    title: "WOODORA",
    image: "/assets/capa-woodora.png"
  },
  {
    id: "05",
    title: "EDIFÍCIO L.A.N.S",
    image: "/assets/capa-lans.jpeg"
  }
];

const ProjectIndex = () => {
  return (
    <section 
      id="project-index" 
      aria-labelledby="projects-heading"
      style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}
    >
      <div className="container" style={{ maxWidth: '1400px', padding: '0 2rem' }}>
        
        <h2 id="projects-heading" className="sr-only">Índice de Projetos</h2>
        
        <div className="project-index-grid">
          {indexData.map((item) => (
            <article 
              key={item.id} 
              className="project-index-item"
            >
              {/* Image Container with Border */}
              <div className="project-image-container">
                {/* ID Badge */}
                <div 
                  className="project-id-badge"
                  aria-hidden="true"
                >
                  {item.id}
                </div>

                <img 
                  src={item.image} 
                  alt={`Capa do projeto ${item.title} - Render 3D`} 
                  loading="lazy"
                  className="project-image"
                />
              </div>

              {/* Title Block below image */}
              <h3 className="project-title">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

      </div>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        .project-index-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        
        .project-index-item {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .project-image-container {
          border: 2px solid var(--text-primary);
          padding: 0.2rem;
          flex-grow: 1;
          display: flex;
          position: relative;
        }
        
        .project-id-badge {
          position: absolute;
          top: -1px;
          left: -1px;
          background-color: var(--text-primary);
          color: #ffffff;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          z-index: 2;
        }
        
        .project-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        
        .project-title {
          background-color: var(--text-primary);
          color: #ffffff;
          text-align: center;
          padding: 1.2rem 0.5rem;
          margin-top: 1rem;
          font-family: var(--font-sans);
          letter-spacing: 1px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @media (max-width: 1200px) {
          .project-index-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .project-image {
            height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .project-index-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .project-image {
            height: 280px;
          }
          
          .project-id-badge {
            font-size: 1rem;
            padding: 0.4rem 0.8rem;
          }
          
          .project-title {
            padding: 1rem 0.5rem;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .project-index-grid {
            grid-template-columns: 1fr;
          }
          
          .project-image {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectIndex;
