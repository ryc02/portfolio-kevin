import re

with open("d:/portfolio kevin/src/components/About.jsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';")

# Replace first div (name and info)
content = content.replace("<div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>", "<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: '-100px' }} style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>")
content = content.replace("</p>\n        </div>", "</p>\n        </motion.div>")

# Replace col 1
content = content.replace("<div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>", "<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, margin: '-100px' }} style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>")
content = content.replace("</p>\n          </div>\n        </div>", "</p>\n          </div>\n        </motion.div>")

# Replace col 2
content = content.replace("        {/* Column 2 */}\n        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>", "        {/* Column 2 */}\n        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true, margin: '-100px' }} style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>")
content = content.replace("</div>\n          </div>\n        </div>", "</div>\n          </div>\n        </motion.div>")

with open("d:/portfolio kevin/src/components/About.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated About.jsx successfully.")
