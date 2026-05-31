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
    <section id="project-index" style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1400px', padding: '0 2rem' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          
          {indexData.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              
              {/* Image Container with Border */}
              <div style={{
                border: '2px solid var(--text-primary)',
                padding: '0.2rem', // Small gap between border and image if desired, or 0
                flexGrow: 1,
                display: 'flex',
                position: 'relative'
              }}>
                {/* ID Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '-1px',
                  backgroundColor: 'var(--text-primary)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  padding: '0.5rem 1rem',
                  zIndex: 2
                }}>
                  {item.id}
                </div>

                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Title Block below image */}
              <div style={{
                backgroundColor: 'var(--text-primary)',
                color: '#ffffff',
                textAlign: 'center',
                padding: '1.2rem 0.5rem',
                marginTop: '1rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '1px',
                fontSize: '0.9rem',
                fontWeight: 500
              }}>
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectIndex;
