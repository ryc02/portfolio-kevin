with open("d:/portfolio kevin/src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update ProjectSlider signature and remove local state
content = content.replace("const ProjectSlider = ({ project }) => {", "const ProjectSlider = ({ project, setLightboxImage }) => {")
content = content.replace("  const [lightboxImage, setLightboxImage] = useState(null);\n", "")

# 2. Add state to Projects component and update props
content = content.replace("const Projects = () => {\n  return (", "const Projects = () => {\n  const [lightboxImage, setLightboxImage] = useState(null);\n\n  return (")
content = content.replace("<ProjectSlider key={project.id} project={project} />", "<ProjectSlider key={project.id} project={project} setLightboxImage={setLightboxImage} />")

with open("d:/portfolio kevin/src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed lightbox scope.")
