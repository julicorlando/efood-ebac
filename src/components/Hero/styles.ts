import styled from 'styled-components'

export const Header = styled.header`
  background: #ffebd9;
`

export const Pattern = styled.div`
  height: 384px;
  padding: 64px 0 40px;
  text-align: center;
  background-color: #ffebd9;
  background-image:
    radial-gradient(circle at 12px 12px, rgba(230, 103, 103, 0.16) 2px, transparent 2px),
    radial-gradient(circle at 36px 36px, rgba(230, 103, 103, 0.1) 2px, transparent 2px);
  background-size: 48px 48px;

  a > span {
    margin: 0 auto 138px;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding-top: 40px;

    a > span {
      margin-bottom: 50px;
    }
  }
`

export const HeroTitle = styled.h1`
  width: min(539px, 90%);
  margin: 0 auto;
  color: #e66767;
  font-size: 36px;
  line-height: 36px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`
