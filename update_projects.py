import re

with open("d:/portfolio kevin/src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Add Lightbox state
content = content.replace("const totalSlides = project.slides.length;", "const totalSlides = project.slides.length;\n  const [lightboxImage, setLightboxImage] = useState(null);")

# Update <img ... />
# We want to add loading="lazy", alt="{project.title} render", and onClick
img_pattern = re.compile(r'<img\s+src=\{([^}]+)\}([^>]*)>')
def repl_img(match):
    src = match.group(1)
    rest = match.group(2)
    # Remove existing alt if present
    rest = re.sub(r'\s*alt="[^"]*"', '', rest)
    rest = re.sub(r'\s*loading="lazy"', '', rest)
    return f'<img src={{{src}}} alt={{`${{project.title}} - Imagem`}} loading="lazy" onClick={{() => setLightboxImage({src})}} style={{...{{ cursor: "zoom-in" }}}}{rest} />'

# Update <motion.img ... />
motion_img_pattern = re.compile(r'<motion\.img([^>]*)src=\{([^}]+)\}([^>]*)>')
def repl_motion(match):
    pre = match.group(1)
    src = match.group(2)
    post = match.group(3)
    # Remove existing alt if present
    post = re.sub(r'\s*alt="[^"]*"', '', post)
    post = re.sub(r'\s*loading="lazy"', '', post)
    return f'<motion.img{pre}src={{{src}}} alt={{`${{project.title}} - Imagem`}} loading="lazy" onClick={{() => setLightboxImage({src})}} {post} />'

# Apply replacements
content = img_pattern.sub(repl_img, content)
content = motion_img_pattern.sub(repl_motion, content)

# Inject Lightbox UI before the closing div
lightbox_ui = """
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Fullscreen" style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }} />
        </div>
      )}
"""
content = content.replace("    </div>\n  );\n};\n\nexport default Projects;", lightbox_ui + "    </div>\n  );\n};\n\nexport default Projects;")

# Also need to add slide progress indicators
indicators = """
      {/* Progress Indicators */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
        {project.slides.map((_, idx) => (
          <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: activeSlide === idx ? 'var(--accent-color)' : 'var(--text-secondary)', opacity: activeSlide === idx ? 1 : 0.5, transition: 'all 0.3s ease' }} />
        ))}
      </div>
"""
content = content.replace("      <div style={{ position: 'absolute', top: '50%', left: '2rem', transform: 'translateY(-50%)', zIndex: 10 }}>", indicators + "\n      <div style={{ position: 'absolute', top: '50%', left: '2rem', transform: 'translateY(-50%)', zIndex: 10 }}>")


with open("d:/portfolio kevin/src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated Projects.jsx successfully.")
