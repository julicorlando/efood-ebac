import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.8);
`

export const Modal = styled.div`
  position: relative;
  width: min(1024px, 100%);
  padding: 32px;
  background: #e66767;
  color: #fff8f2;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: #fff8f2;
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100%;
    height: 220px;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    margin-top: 16px;
    background: #ffebd9;
    color: #e66767;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 900;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Portion = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
