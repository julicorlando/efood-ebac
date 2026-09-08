# eFood - Exercício EBAC

Projeto React baseado no layout do **eFood** disponibilizado pela EBAC no Figma.

## Tecnologias

- React
- TypeScript
- Vite
- Styled Components
- React Router DOM
- Fetch API (AJAX)

## Funcionalidades

- Home com restaurantes carregados via API da EBAC
- Navegação com React Router
- Página interna de restaurante
- Cardápio carregado dinamicamente via AJAX
- Modal de produto com foto, descrição, porção e preço
- Botão de compra que abre a modal
- Inclusão demonstrativa no contador do carrinho
- Layout responsivo com Styled Components
- Fallback de SPA configurado para a Vercel

## API

`https://api-ebac.vercel.app/api/efood/restaurantes`

## Executar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicação

O projeto está preparado para deploy na Vercel, com `vercel.json` configurado para as rotas do React Router.
