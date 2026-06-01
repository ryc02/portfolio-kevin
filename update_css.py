import re

with open("d:/portfolio kevin/src/index.css", "r", encoding="utf-8") as f:
    content = f.read()

# Update .title-huge
content = re.sub(
    r'\.title-huge\s*{[^}]*}',
    r'.title-huge {\n  font-size: clamp(4rem, 12vw, 9rem);\n  line-height: 1;\n  letter-spacing: -2px;\n  font-family: var(--font-serif);\n  font-weight: 600;\n}',
    content
)

with open("d:/portfolio kevin/src/index.css", "w", encoding="utf-8") as f:
    f.write(content)
