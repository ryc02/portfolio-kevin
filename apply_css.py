import re

with open("d:/portfolio kevin/src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
if "import './Projects.css';" not in content:
    content = content.replace("import { ArrowRight, ArrowLeft } from 'lucide-react';", "import { ArrowRight, ArrowLeft } from 'lucide-react';\nimport './Projects.css';")

# 2. Replace floor-plan
content = content.replace(
    "className=\"container\" style={{ display: 'grid', gridTemplateColumns: isReversed ? '1fr 1.8fr' : '1.8fr 1fr', gap: '4rem', alignItems: 'center' }}",
    "className={`container slide-floor-plan ${isReversed ? 'reversed' : 'normal'}`}"
)

# 3. Replace boards
content = content.replace(
    "className=\"container\" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}",
    "className=\"container slide-boards\""
)

# 4. Replace technical-grid
content = content.replace(
    "className=\"container\" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '2rem', alignItems: 'center' }}",
    "className=\"container slide-technical\""
)

# 5. Replace multi-column
content = content.replace(
    "className=\"container\" style={{ display: 'grid', gridTemplateColumns: slide.gridCols || `repeat(${slide.columns.length}, 1fr)`, gap: slide.gap || '2rem', alignItems: 'center' }}",
    "className=\"container slide-multi-col\" style={{ gridTemplateColumns: slide.gridCols || `repeat(${slide.columns.length}, 1fr)`, gap: slide.gap || '2rem' }}"
)

# 6. Replace image-grid
content = content.replace(
    "style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '80vh' }}",
    "className=\"slide-image-grid\""
)

with open("d:/portfolio kevin/src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(content)
