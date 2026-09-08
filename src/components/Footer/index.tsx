import Logo from '../Logo'
import { Container } from '../../styles/shared'
import { Copyright, FooterBar, Social, SocialItem } from './styles'

const Footer = () => (
  <FooterBar>
    <Container>
      <Logo />

      <Social aria-label="Redes sociais">
        <SocialItem href="#" aria-label="Instagram">
          ◎
        </SocialItem>
        <SocialItem href="#" aria-label="Facebook">
          f
        </SocialItem>
        <SocialItem href="#" aria-label="Twitter">
          ♥
        </SocialItem>
      </Social>

      <Copyright>
        A eFood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e qualidade dos produtos é dos
        restaurantes.
      </Copyright>
    </Container>
  </FooterBar>
)

export default Footer
