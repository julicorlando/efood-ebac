import styled from 'styled-components'

export const Card = styled.article`
  position: relative;
  background: #fff;
  border: 1px solid #e66767;
  color: #e66767;

  > div:first-child {
    position: relative;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Tag = styled.span`
  padding: 6px 8px;
  background: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: 700;
`

export const CardBody = styled.div`
  padding: 8px;

  .details {
    display: inline-block;
    margin-top: 16px;
    padding: 6px 8px;
    background: #e66767;
    color: #ffebd9;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.3;
`

export const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;

  span {
    color: #ffb800;
    font-size: 21px;
  }
`

export const Description = styled.p`
  min-height: 88px;
  margin-top: 16px;
  color: #e66767;
  font-size: 14px;
  line-height: 22px;
`
