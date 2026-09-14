import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
  background: #e66767;
`

export const CartList = styled.ul`
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const CartItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  min-height: 100px;
  padding: 8px 8px 12px;
  background: #ffebd9;
  color: #e66767;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  min-width: 0;
  padding-right: 20px;

  h3 {
    margin: 0 0 16px;
    color: #e66767;
    font-size: 18px;
    line-height: 21px;
    font-weight: 900;
  }

  span {
    color: #e66767;
    font-size: 14px;
    line-height: 16px;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #e66767;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`

export const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  color: #ffebd9;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`

export const FinishButton = styled.button`
  width: 100%;
  min-height: 24px;
  margin-top: 16px;
  border: 0;
  padding: 4px 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
`

export const EmptyCart = styled.div`
  color: #ffebd9;
  font-size: 14px;
  line-height: 20px;

  strong {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
  }
`
