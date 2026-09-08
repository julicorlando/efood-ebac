import styled from 'styled-components'

export const FooterBar = styled.footer`
  margin-top: 120px;
  padding: 40px 0;
  background: #ffebd9;
  text-align: center;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 28px 0 80px;
`

export const SocialItem = styled.a`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #e66767;
  color: #ffebd9;
  font-size: 15px;
  font-weight: 900;
`

export const Copyright = styled.p`
  max-width: 480px;
  margin: 0 auto;
  color: #e66767;
  font-size: 10px;
  line-height: 12px;
`
