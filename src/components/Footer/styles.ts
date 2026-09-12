import styled from 'styled-components'

export const FooterBar = styled.footer`
  width: 100%;
  height: 298px;
  margin-top: 120px;
  padding: 40px;
  background: #ffebd9;
  text-align: center;

  img[alt='Logo da eFood'] {
    width: 125px;
    height: 58px;
    margin: 0 auto;
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`

export const SocialItem = styled.a`
  display: block;
  width: 24px;
  height: 24px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Copyright = styled.p`
  max-width: 480px;
  margin: 80px auto 0;
  color: #e66767;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
`
