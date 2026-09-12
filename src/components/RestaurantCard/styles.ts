import styled from 'styled-components'

export const Card = styled.article`
  position: relative;
  width: 100%;
  max-width: 472px;
  height: 398px;
  background: #fff;
  color: #e66767;

  > div:first-child {
    position: relative;
  }

  @media (max-width: 768px) {
    max-width: 310px;
    height: 450px;
    margin: 0 auto;
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
  right: 8px;
  display: flex;
  justify-content: flex-end;
`

export const Tag = styled.span<{ $featured?: boolean }>`
  display: inline-block;
  width: ${({ $featured }) => ($featured ? '121px' : '61px')};
  height: 26px;
  margin-right: 8px;
  padding: 6px 4px;
  background: #e66767;
  color: #ffebd9;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  text-align: center;
`

export const CardBody = styled.div`
  height: 181px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  border: 1px solid #e66767;
  border-top: 0;

  .details {
    display: inline-block;
    width: 82px;
    height: 24px;
    padding: 4px 6px;
    background: #e66767;
    color: #ffebd9;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 233px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 21px;
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  height: 88px;
  overflow: hidden;
  color: #e66767;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;

  @media (max-width: 768px) {
    height: 140px;
  }
`
