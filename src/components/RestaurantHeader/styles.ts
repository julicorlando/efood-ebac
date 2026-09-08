import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-color: #ffebd9;
  background-image:
    radial-gradient(circle at 12px 12px, rgba(230, 103, 103, 0.16) 2px, transparent 2px),
    radial-gradient(circle at 36px 36px, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 48px 48px;
`

export const HeaderContent = styled.div`
  min-height: 186px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;

  @media (max-width: 700px) {
    min-height: 220px;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 12px;
    padding: 24px 0;
  }
`

export const RestaurantsLink = styled.a`
  font-size: 18px;
  font-weight: 900;
`

export const Cart = styled.a`
  justify-self: end;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 700px) {
    justify-self: center;
  }
`
