with open("d:/portfolio kevin/src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(" style={...{ cursor: \"zoom-in\" }}", "")

with open("d:/portfolio kevin/src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(content)
