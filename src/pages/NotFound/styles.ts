import styled from 'styled-components'

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #ffebd9;
`

export const Box = styled.div`
  text-align: center;

  h1 {
    margin: 32px 0 8px;
  }

  p {
    margin-bottom: 24px;
  }

  a {
    display: inline-block;
    padding: 10px 16px;
    background: #e66767;
    color: #ffebd9;
    font-weight: 700;
  }
`
