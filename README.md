# PL Formosa-GO — Front-end (Next.js)

Protótipo visual do site do Partido Liberal de Formosa, Goiás. Somente front-end: os formulários são apenas visuais.

## Como rodar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Páginas
`/` início · `/partido` · `/liderancas` (filtro por cargo) · `/noticias` e `/noticias/[slug]` · `/filie-se` · `/contato` · `/pl-jovem` e `/pl-mulher` (em breve, para os subdomínios).

## Onde editar
- Textos e listas: `lib/data.ts` (valores, manifesto, presidentes, notícias).
- Componentes compartilhados: `components/ui.tsx`.
- Estilos: `app/globals.css`. Imagens: `public/img`.
- Tudo que está entre colchetes `[ ]` é espaço reservado para conteúdo real.
