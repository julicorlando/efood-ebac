import Logo from '../Logo'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { Container } from '../../styles/shared'
import { Copyright, FooterBar, Social, SocialItem } from './styles'

const Footer = () => (
  <FooterBar>
    <Container>
      <Logo />

      <Social aria-label="Redes sociais">
        <SocialItem href="https://www.instagram.com" aria-label="Instagram">
          <img src={instagram} alt="" />
        </SocialItem>
        <SocialItem href="https://www.facebook.com" aria-label="Facebook">
          <img src={facebook} alt="" />
        </SocialItem>
        <SocialItem href="https://www.twitter.com" aria-label="Twitter">
          <img src={twitter} alt="" />
        </SocialItem>
      </Social>

      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </Container>
  </FooterBar>
)

export default Footer
