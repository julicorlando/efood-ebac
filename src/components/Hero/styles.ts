import styled from 'styled-components'

export const Header = styled.header`
  background: #ffebd9;
`

export const Pattern = styled.div`
  min-height: 384px;
  padding-top: 40px;
  text-align: center;
  background-color: #ffebd9;
  background-image:
    radial-gradient(circle at 12px 12px, rgba(230, 103, 103, 0.16) 2px, transparent 2px),
    radial-gradient(circle at 36px 36px, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 48px 48px;
`

export const HeroTitle = styled.h1`
  max-width: 560px;
  margin: 136px auto 0;
  color: #e66767;
  font-size: 36px;
  line-height: 1.16;
  font-weight: 900;

  @media (max-width: 640px) {
    margin-top: 110px;
    font-size: 28px;
  }
`
