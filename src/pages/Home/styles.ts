import styled from 'styled-components'

export const Main = styled.main`
  min-height: 420px;
  padding-top: 80px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const Status = styled.p`
  padding: 64px 0;
  text-align: center;
  color: #e66767;
  font-size: 18px;
  font-weight: 700;
`
