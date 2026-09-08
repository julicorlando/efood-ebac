import styled from 'styled-components'

export const Card = styled.article`
  padding: 8px;
  background: #e66767;
  color: #ffebd9;
`

export const DishImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Content = styled.div`
  padding-top: 8px;

  button {
    width: 100%;
    margin-top: 8px;
    background: #ffebd9;
    color: #e66767;
  }
`

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
`

export const Description = styled.p`
  min-height: 88px;
  font-size: 14px;
  line-height: 22px;
`
