import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { Container } from '../../styles/shared'
import { Header, HeroTitle, Pattern } from './styles'

const Hero = () => (
  <Header>
    <Pattern>
      <Container>
        <Link to="/" aria-label="Voltar para a página inicial">
          <Logo />
        </Link>
        <HeroTitle>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroTitle>
      </Container>
    </Pattern>
  </Header>
)

export default Hero
