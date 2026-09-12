import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.73);
`

export const Modal = styled.div`
  position: relative;
  width: min(1024px, 100%);
  height: 344px;
  padding: 32px;
  background: #e66767;
  color: #fff8f2;

  @media (max-width: 700px) {
    width: min(340px, 100%);
    height: auto;
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    padding: 32px 24px 24px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: #fff8f2;
  font-size: 24px;
  line-height: 1;
  font-weight: 900;
`

export const Content = styled.div`
  display: flex;
  gap: 24px;
  height: 280px;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  flex: 0 0 280px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100%;
    height: 220px;
    flex-basis: auto;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  button {
    width: auto;
    max-width: 218px;
    margin-top: 0;
    background: #ffebd9;
    color: #e66767;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

export const Description = styled.p`
  max-width: 656px;
  font-size: 14px;
  line-height: 22px;
`

export const Portion = styled.p`
  font-size: 14px;
  line-height: 22px;
`
