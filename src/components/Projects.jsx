import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: "01",
    title: "Vitta Studio",
    softwares: "SKETCHUP - ENSCAPE",
    description: "Projeto autoral focado na harmonia entre funcionalidade e design. A proposta explora a arquitetura de interiores como um meio para criar espaços que sejam práticos para a rotina, sem abrir mão do apuro estético e do máximo conforto.",
    slides: [
      {
        type: "intro-mosaic",
        images: ["/assets/image27.webp", "/assets/image29.webp", "/assets/image28.webp"],
        gridCols: "2.66fr 1fr",
        gridRows: "1fr 1fr"
      },
      {
        type: "image-grid",
        images: ["/assets/image31.webp", "/assets/image32.webp", "/assets/image33.webp", "/assets/image30.webp"]
      }
    ]
  },
  {
    id: "02",
    title: "Bahira",
    softwares: "SKETCHUP - LAYOUT - D5 RENDER",
    description: "Projeto acadêmico (8º semestre) de escopo completo, abrangendo desde a idealização da persona do cliente até a resolução integral da planta baixa e layout. A proposta utiliza o maximalismo como fio condutor para imprimir forte identidade visual ao apartamento, provando que espaços ricos em detalhes e personalidade podem coexistir em perfeita harmonia com o conforto e o acolhimento.",
    slides: [
      {
        type: "floor-plan",
        image: "/assets/image35.webp",
        theme: "dark"
      },
      {
        type: "single-image",
        image: "/assets/renders_sem_fundo.webp",
        theme: "dark"
      },
      {
        type: "single-image",
        image: "/assets/bahira_slide3.webp",
        theme: "dark"
      }
    ]
  },
  {
    id: "03",
    title: "Ambev",
    softwares: "SKETCHUP - LAYOUT - D5 RENDER",
    description: "Desenvolvido em dupla no 8º semestre, o escopo deste projeto foi a criação de um escritório corporativo a partir de uma marca de nossa escolha. A concepção da planta e do layout foi precedida por uma análise detalhada da comunicação visual e da cultura interna da empresa. O resultado é um ambiente que reflete o DNA da marca e prioriza a experiência, a produtividade e o bem-estar do colaborador.",
    slides: [
      {
        type: "floor-plan",
        image: "/assets/ambev_capa_plantas.webp",
        theme: "light",
        reverse: true,
        scale: 1
      },
      {
        type: "stacked-panoramas",
        image1: "/assets/Imagem6.webp",
        image2: "/assets/Imagem8.webp",
        theme: "light"
      },
      {
        type: "stacked-panoramas",
        image1: "/assets/Imagem9.webp",
        image2: "/assets/Imagem10.webp",
        theme: "light"
      }
    ]
  },
  {
    id: "04",
    title: "Woodora",
    softwares: "SKETCHUP - AUTOCAD - D5 RENDER",
    description: "Projeto residencial desenvolvido em grupo no 8º semestre, com foco na pesquisa de materiais e sistemas construtivos. O principal desafio foi conceber uma habitação sustentada por uma estrutura integralmente em madeira, aliando alta eficiência técnica, estabilidade e racionalização no uso do material.",
    slides: [
      {
        type: "boards",
        images: ["/assets/Imagem11.webp", "/assets/Imagem12.webp"]
      },
      {
        type: "image-row",
        images: ["/assets/Imagem13.webp", "/assets/Imagem14.webp", "/assets/Imagem15.webp"],
        theme: "light"
      }
    ]
  },
  {
    id: "05",
    title: "L.A.N.S",
    softwares: "SKETCHUP - AUTOCAD - ENSCAPE",
    description: "Estudo em grupo para um edifício corporativo cuja premissa urbana é a forte relação com o entorno através de uma fachada ativa. O partido arquitetônico foi norteado por um rigoroso estudo de modulação, onde a principal discussão foi compatibilizar a eficiência da malha estrutural com a linguagem estética e volumétrica do edifício.",
    slides: [
      {
        type: "multi-column",
        gridCols: "1.2fr 1.4fr 1.6fr",
        showIntro: true,
        columns: [
          ["/assets/Imagem16.webp", "/assets/Imagem17.webp"],
          ["/assets/Imagem18.webp", "/assets/Imagem19.webp", "/assets/Imagem20.webp"]
        ],
        theme: "light",
        gap: "1rem"
      }
    ]
  }
];

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  })
};

const ProjectSlider = ({ project, setLightboxImage }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = project.slides.length;

  const nextSlide = () => setActiveSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () => setActiveSlide((p) => (p - 1 + totalSlides) % totalSlides);

  const renderIntroText = (isDark = false) => (
    <div style={{ paddingRight: isDark ? '0' : '4rem', paddingLeft: isDark ? '4rem' : '0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerVariants} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 8vw, 7rem)', color: isDark ? 'var(--accent-light)' : 'var(--accent-color)', lineHeight: 0.9, fontWeight: 400, marginBottom: '1rem', textAlign: isDark ? 'right' : 'left' }}>
        {project.id}.
      </motion.h2>
      <motion.h3 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerVariants} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: isDark ? 'var(--accent-color)' : 'var(--text-primary)', fontWeight: 400, marginBottom: '0.5rem', textAlign: isDark ? 'right' : 'left' }}>
        {project.title}
      </motion.h3>
      <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerVariants} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', letterSpacing: '3px', color: isDark ? 'var(--bg-color)' : 'var(--accent-light)', textTransform: 'uppercase', fontWeight: 500, textAlign: isDark ? 'right' : 'left' }}>
        {project.softwares}
      </motion.p>
      
      <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerVariants} style={{ width: '50px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '2.5rem 0', alignSelf: isDark ? 'flex-end' : 'flex-start' }} />

      <motion.p custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerVariants} style={{ color: isDark ? '#e0e0e0' : 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 300, textAlign: isDark ? 'right' : 'left', alignSelf: isDark ? 'flex-end' : 'flex-start' }}>
        {project.description}
      </motion.p>
    </div>
  );

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100vw', backgroundColor: 'var(--bg-color)' }}>
      <motion.div 
        initial={false}
        animate={{ x: `-${activeSlide * 100}vw` }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 1 }}
        style={{ display: 'flex', width: `${totalSlides * 100}vw` }}
      >
        {project.slides.map((slide, index) => {
          
          if (slide.type === 'intro-mosaic') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container grid-2" style={{ gap: '2rem' }}>
                  {renderIntroText(false)}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }}>
                    
                    {slide.panoramaTop ? (
                      <div style={{ display: 'grid', gridTemplateColumns: slide.gridCols, gridTemplateRows: slide.gridRows, gap: '8px', width: '100%' }}>
                        <div style={{ gridColumn: '1 / -1', overflow: 'hidden', border: '1px solid var(--text-primary)', aspectRatio: '3.04' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[0]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[0])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ overflow: 'hidden', border: '1px solid var(--text-primary)', aspectRatio: '1.52' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[1]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[1])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ overflow: 'hidden', border: '1px solid var(--text-primary)', aspectRatio: '1.52' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[2]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[2])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    ) : slide.gridCols === "1fr 1fr 1fr" ? (
                      <div style={{ display: 'grid', gridTemplateColumns: slide.gridCols, gap: '8px', width: '100%' }}>
                        {slide.images.map((img, i) => (
                           <div key={i} style={{ overflow: 'hidden', border: '1px solid var(--text-primary)', aspectRatio: '0.75' }}>
                             <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                           </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: slide.gridCols, gridTemplateRows: slide.gridRows, gap: '8px', width: '100%' }}>
                        <div style={{ gridColumn: '1', gridRow: '1', overflow: 'hidden', border: '1px solid var(--text-primary)' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[0]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[0])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ gridColumn: '1', gridRow: '2', overflow: 'hidden', border: '1px solid var(--text-primary)' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[1]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[1])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ gridColumn: '2', gridRow: '1 / span 2', overflow: 'hidden', border: '1px solid var(--text-primary)' }}>
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[2]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[2])}  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                      </div>
                    )}

                  </motion.div>
                </div>
              </section>
            );
          }

          if (slide.type === 'floor-plan') {
            const isReversed = slide.reverse;
            const scaleValue = slide.scale !== undefined ? slide.scale : 1.15;
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: slide.theme === 'dark' ? 'var(--text-primary)' : 'var(--bg-color)' }}>
                <div className={`container slide-floor-plan ${isReversed ? 'reversed' : 'normal'}`}>
                  {isReversed && renderIntroText(slide.theme === 'dark')}
                  <motion.div initial={{ opacity: 0, x: isReversed ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={slide.image} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.image)} style={{ width: '100%', height: 'auto', transform: `scale(${scaleValue})`, transformOrigin: isReversed ? 'center left' : 'center right' }} />
                  </motion.div>
                  {!isReversed && renderIntroText(slide.theme === 'dark')}
                </div>
              </section>
            );
          }

          if (slide.type === 'mosaic-pure') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 0', backgroundColor: 'var(--text-primary)' }}>
                <div className="container" style={{ position: 'relative' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: slide.gridCols, gridTemplateRows: slide.gridRows, gap: '8px', height: '80vh', width: '100%' }}>
                    <div style={{ gridColumn: '1', gridRow: '1 / span 2', overflow: 'hidden' }}>
                      <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[0]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[0])}  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div style={{ gridColumn: '2', gridRow: '1', overflow: 'hidden' }}>
                      <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[1]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[1])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ gridColumn: '2', gridRow: '2', overflow: 'hidden' }}>
                      <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={slide.images[2]} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.images[2])}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (slide.type === 'technical-grid') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: 'var(--text-primary)' }}>
                <div className="container slide-technical">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={slide.imageLeft} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.imageLeft)} style={{ width: '100%', height: 'auto', transform: 'scale(1.15)', transformOrigin: 'center left' }} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {slide.imageRight ? (
                      <img src={slide.imageRight} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.imageRight)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: '12px', width: '100%', height: '100%' }}>
                        {slide.imagesRight.map((img, i) => (
                          <div key={i} style={{ overflow: 'hidden', border: '2px solid var(--bg-color)' }}>
                            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </section>
            );
          }

          if (slide.type === 'single-image') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', backgroundColor: slide.theme === 'dark' ? 'var(--text-primary)' : 'var(--bg-color)' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, ease: 'easeOut' }} 
                    viewport={{ once: true }} 
                    src={slide.image} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.image)}  
                    style={{ width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain' }} 
                  />
                </div>
              </section>
            );
          }

          if (slide.type === 'image-grid') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container" style={{ position: 'relative' }}>
                  <div className="slide-image-grid">
                    {slide.images.slice(0, 4).map((img, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} style={{ overflow: 'hidden', border: '1px solid var(--text-primary)' }}>
                        <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (slide.type === 'stacked-panoramas') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '4rem 0', backgroundColor: slide.theme === 'dark' ? 'var(--text-primary)' : 'var(--bg-color)' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} style={{ width: '100%', overflow: 'hidden' }}>
                    <motion.img whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} src={slide.image1} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.image1)}  style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} viewport={{ once: true }} style={{ width: '100%', overflow: 'hidden' }}>
                    <motion.img whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} src={slide.image2} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(slide.image2)}  style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </motion.div>
                </div>
              </section>
            );
          }

          if (slide.type === 'multi-column') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: slide.theme === 'light' ? 'var(--bg-color)' : 'var(--text-primary)' }}>
                <div className="container slide-multi-col" style={{ gridTemplateColumns: slide.gridCols || `repeat(${slide.columns.length}, 1fr)`, gap: slide.gap || '2rem' }}>
                  {slide.showIntro && renderIntroText(slide.theme === 'dark')}
                  
                  {slide.columns.map((col, colIndex) => (
                    <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: slide.gap || '2rem', height: '100%' }}>
                      {col.map((img, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (colIndex * 0.2) + (i * 0.1), duration: 0.8 }} style={{ overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                          <img src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </motion.div>
                      ))}
                    </div>
                  ))}
                  
                  {slide.showIntroRight && renderIntroText(slide.theme === 'dark')}
                </div>
              </section>
            );
          }

          if (slide.type === 'image-row') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: slide.theme === 'dark' ? 'var(--text-primary)' : 'var(--bg-color)' }}>
                <div className="container" style={{ display: 'flex', gap: '20px', height: '80vh', justifyContent: 'center' }}>
                  {slide.images.map((img, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.8 }} style={{ flex: 1, overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                      <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          if (slide.type === 'boards') {
            return (
              <section key={index} style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container slide-boards">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {slide.images.map((img, i) => (
                      <div key={i} style={{ flex: 1, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <img src={img} alt={`${project.title} - Imagem`} loading="lazy" onClick={() => setLightboxImage(img)} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    ))}
                  </motion.div>
                  {renderIntroText(false)}
                </div>
              </section>
            );
          }

          return null;
        })}
      </motion.div>

      {totalSlides > 1 && (
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 10 }}>
          <button onClick={prevSlide} style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeSlide === 0 ? 'var(--text-secondary)' : 'var(--text-primary)', opacity: activeSlide === 0 ? 0.3 : 1, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} disabled={activeSlide === 0}>
            <ArrowLeft size={32} strokeWidth={1} color={project.slides[activeSlide]?.theme === 'dark' ? 'var(--bg-color)' : 'var(--text-primary)'} />
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[...Array(totalSlides)].map((_, idx) => (
              <div key={idx} onClick={() => setActiveSlide(idx)} style={{ height: '2px', width: activeSlide === idx ? '60px' : '20px', backgroundColor: project.slides[activeSlide]?.theme === 'dark' ? (activeSlide === idx ? 'var(--bg-color)' : 'var(--text-secondary)') : (activeSlide === idx ? 'var(--text-primary)' : 'var(--accent-color)'), transition: 'all 0.5s cubic-bezier(0.83, 0, 0.17, 1)', cursor: 'pointer' }} />
            ))}
          </div>
          <button onClick={nextSlide} style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeSlide === totalSlides - 1 ? 'var(--text-secondary)' : 'var(--text-primary)', opacity: activeSlide === totalSlides - 1 ? 0.3 : 1, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} disabled={activeSlide === totalSlides - 1}>
            <ArrowRight size={32} strokeWidth={1} color={project.slides[activeSlide]?.theme === 'dark' ? 'var(--bg-color)' : 'var(--text-primary)'} />
          </button>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div id="projects">
      {projectsData.map((project) => (
        <ProjectSlider key={project.id} project={project} setLightboxImage={setLightboxImage} />
      ))}

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Fullscreen" style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
};

export default Projects;
