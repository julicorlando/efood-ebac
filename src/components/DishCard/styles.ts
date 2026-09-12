import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 338px;
  padding: 8px;
  background: #e66767;
  color: #ffebd9;
`

export const DishImage = styled.img`
  width: 100%;
  height: 167px;
  flex-shrink: 0;
  object-fit: cover;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 8px;
  min-height: 0;

  button {
    width: 100%;
    margin-top: auto;
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
  height: 88px;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
`
