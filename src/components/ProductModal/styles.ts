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
  color: #fff;

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
  width: 16px;
  height: 16px;
  border: 0;
  padding: 0;
  background: transparent;
  color: transparent;
  font-size: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 16px;
    height: 2px;
    background: #fff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
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
    width: 218px;
    max-width: 100%;
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
  font-weight: 400;
`

export const Portion = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`
