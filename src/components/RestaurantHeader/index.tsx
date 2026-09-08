import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { Container } from '../../styles/shared'
import { Cart, HeaderBar, HeaderContent, RestaurantsLink } from './styles'

const RestaurantHeader = () => (
  <HeaderBar>
    <Container>
      <HeaderContent>
        <RestaurantsLink as={Link} to="/">
          Restaurantes
        </RestaurantsLink>

        <Link to="/" aria-label="eFood - início">
          <Logo />
        </Link>

        <Cart href="#menu">0 produto(s) no carrinho</Cart>
      </HeaderContent>
    </Container>
  </HeaderBar>
)

export default RestaurantHeader
