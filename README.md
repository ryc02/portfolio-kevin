# Kevin Nery | Portfolio

> Portfólio profissional de Arquitetura e Visualização 3D — desenvolvido com React + Vite, publicado na Vercel.

## Stack
- **React 19** + **Vite 8**
- **Framer Motion** — animações e efeito Parallax
- **Lenis** — smooth scrolling
- **Lucide React** — ícones
- **Vanilla CSS** — sem framework de estilo

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em: `http://localhost:5173`

## Deploy

O deploy é automático via **Vercel**. Qualquer push para o branch `master` publica uma nova versão em ~1 minuto.

## Estrutura principal

```
src/
├── components/     # Header, Hero, About, Projects, Footer, Loader...
├── contexts/       # LanguageContext (sistema PT/EN)
├── translations.js # Dicionário de strings em PT e EN
└── index.css       # Tokens de design (cores, fontes, espaçamentos)

public/assets/      # Todas as imagens (.webp)
```

## Documentação completa

Para detalhes sobre arquitetura, como adicionar projetos, sistema i18n e outros recursos, consulte o arquivo de [documentação técnica completa](./DOCUMENTATION.md).

---

*© 2026 Kevin Nery Rodrigues. Todos os direitos reservados.*
