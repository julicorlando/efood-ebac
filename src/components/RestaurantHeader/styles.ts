import styled from 'styled-components'

export const HeaderBar = styled.header`
  height: 186px;
  background-color: #ffebd9;
  background-image:
    radial-gradient(circle at 12px 12px, rgba(230, 103, 103, 0.16) 2px, transparent 2px),
    radial-gradient(circle at 36px 36px, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 48px 48px;
`

export const HeaderContent = styled.div`
  height: 186px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 64px 0;

  > a:nth-child(2) {
    justify-self: center;
  }

  img {
    width: 125px;
    height: 58px;
  }

  @media (max-width: 700px) {
    height: 220px;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 12px;
    padding: 24px 0;
  }
`

export const RestaurantsLink = styled.a`
  justify-self: start;
  color: #e66767;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

export const Cart = styled.a`
  justify-self: end;
  color: #e66767;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;

  @media (max-width: 700px) {
    justify-self: center;
  }
`
