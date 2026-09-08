import styled from 'styled-components'

export const Page = styled.main`
  min-height: 520px;
  padding: 56px 0 0;
`

export const PageTitle = styled.h1`
  margin-bottom: 32px;
  color: #e66767;
  font-size: 32px;
  font-weight: 900;
`

export const CartList = styled.div`
  display: grid;
  gap: 16px;
`

export const CartItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 160px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 12px;
  background: #e66767;
  color: #ffebd9;

  @media (max-width: 700px) {
    grid-template-columns: 96px 1fr;

    button {
      grid-column: 1 / -1;
    }
  }
`

export const ItemImage = styled.img`
  width: 160px;
  height: 120px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 96px;
    height: 96px;
  }
`

export const ItemInfo = styled.div`
  h2 {
    margin-bottom: 8px;
    font-size: 20px;
  }

  p {
    max-width: 620px;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 20px;
  }

  strong {
    font-size: 16px;
  }
`

export const RemoveButton = styled.button`
  border: 0;
  background: #ffebd9;
  color: #e66767;
  padding: 8px 12px;
  font-weight: 700;
`

export const Summary = styled.aside`
  width: min(420px, 100%);
  margin: 32px 0 0 auto;
  padding: 20px;
  border: 1px solid #e66767;
  background: #fff;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 18px;
`

export const FinishButton = styled.button`
  width: 100%;
  border: 0;
  padding: 12px 16px;
  background: #e66767;
  color: #ffebd9;
  font-weight: 900;
`

export const EmptyCart = styled.div`
  padding: 32px;
  border: 1px solid #e66767;
  background: #fff;

  strong {
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
  }

  p {
    margin-bottom: 20px;
    color: #8f4b4b;
  }

  a {
    display: inline-block;
    padding: 10px 14px;
    background: #e66767;
    color: #ffebd9;
    font-weight: 700;
  }
`
