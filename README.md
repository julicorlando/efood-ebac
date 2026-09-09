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

## Publicação na Vercel

O projeto possui `vercel.json` com framework Vite, comando de build, diretório `dist` e fallback de SPA para o React Router.

Ao entregar o projeto, utilize o **Production Domain** do projeto na Vercel, e não uma URL antiga de Preview Deployment. O endereço enviado ao avaliador precisa abrir em uma janela anônima sem solicitar login na Vercel.

Se a página solicitar autenticação, revise em **Vercel → Project → Settings → Deployment Protection** e deixe a produção sem Vercel Authentication/Password Protection para permitir avaliação pública.

## Validação automática

O workflow de CI executa `npm install` e `npm run build` para confirmar que a aplicação gera o bundle de produção corretamente.
