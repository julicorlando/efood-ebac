import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: #e66767;
    background: #fff8f2;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    background: #fff8f2;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button,
  a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle
