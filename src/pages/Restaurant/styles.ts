import styled from 'styled-components'

export const Banner = styled.section<{ $image: string }>`
  height: 280px;
  background-image: url('${({ $image }) => $image}');
  background-position: center;
  background-size: cover;
`

export const BannerOverlay = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.55);

  > div {
    height: 100%;
  }
`

export const BannerText = styled.div`
  height: 100%;
  padding: 24px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
`

export const Cuisine = styled.span`
  font-size: 32px;
  font-weight: 100;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

export const MenuGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  padding-top: 56px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`
