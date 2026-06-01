import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ title, date, subtitle, desc, isLast }) => (
  <div style={{ display: 'flex', gap: '2rem', marginBottom: isLast ? '0' : '3rem', position: 'relative' }}>
    {/* Line */}
    {!isLast && (
      <div style={{
        position: 'absolute',
        left: '5px',
        top: '24px',
        bottom: '-3rem',
        width: '1px',
        backgroundColor: 'var(--accent-color)',
        opacity: 0.3
      }} />
    )}
    
    {/* Dot */}
    <div style={{ 
      width: '11px', 
      height: '11px', 
      borderRadius: '50%', 
      backgroundColor: 'var(--accent-color)',
      marginTop: '6px',
      flexShrink: 0,
      zIndex: 1
    }} />

    {/* Content */}
    <div>
      <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
        {title}
      </h4>
      <p style={{ 
        fontFamily: 'var(--font-sans)', 
        fontSize: '0.85rem', 
        letterSpacing: '1px', 
        textTransform: 'uppercase', 
        color: 'var(--accent-color)',
        marginBottom: '0.5rem',
        fontWeight: 500
      }}>
        {date}
      </p>
      {subtitle && (
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {subtitle}
        </p>
      )}
      <p className="text-body" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
        {desc}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '10rem 0' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '6rem',
        alignItems: 'start'
      }}>
        
        {/* Left Column (Sticky) */}
        <div style={{ position: 'sticky', top: '10rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1,
              marginBottom: '2rem'
            }}>
              Sobre<br/>Mim
            </h2>
            
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kevin Nery Rodrigues</h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                São Paulo - SP
              </p>
            </div>

            <p className="text-body" style={{ fontSize: '1.1rem', maxWidth: '400px' }}>
              Possuo um grande interesse por representação gráfica e imagens 3D, tendo um desejo em poder desenvolver mais minhas habilidades e conhecimentos nessa área para poder assim agregar não só a mim como também em meu local de trabalho.
            </p>
          </motion.div>
        </div>

        {/* Right Column (Timeline) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: true, margin: '-100px' }}
        >
          
          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '1rem', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              fontWeight: 600
            }}>
              Trajetória Profissional
            </h3>
            
            <TimelineItem 
              title="Vista Concept"
              date="2024 - Atualmente"
              subtitle="Estagiário"
              desc="Escritório focado em arquitetura de varejo onde realizo projetos para marcas como BlueFit, Espaço Laser, Swarovski e Burguer King. Possuo demandas como projetos executivos, modelagem 3D e renderizações."
            />
            
            <TimelineItem 
              title="McDonald's"
              date="2023"
              subtitle="Atendente de Restaurante"
              desc="Realizava funções como limpeza, atendimento ao público, cozinha e preparação de alimentos."
            />
            
            <TimelineItem 
              title="Hering"
              date="2023"
              subtitle="Auxiliar de Loja"
              desc="Contratado como extra onde realizava funções como estoque, organização de loja e provador."
              isLast={true}
            />
          </div>

          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '1rem', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              fontWeight: 600
            }}>
              Formação Acadêmica
            </h3>

            <TimelineItem 
              title="Universidade Cidade de São Paulo"
              date="2022 - Atualmente"
              subtitle="Arquitetura e Urbanismo (9° Semestre)"
              desc="Desenvolvimento acadêmico focado em projetos arquitetônicos, urbanismo e representação visual."
              isLast={true}
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
