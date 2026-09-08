import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { Container } from '../../styles/shared'
import { Cart, HeaderBar, HeaderContent, RestaurantsLink } from './styles'

type Props = {
  cartCount?: number
}

const RestaurantHeader = ({ cartCount = 0 }: Props) => (
  <HeaderBar>
    <Container>
      <HeaderContent>
        <RestaurantsLink as={Link} to="/">
          Restaurantes
        </RestaurantsLink>

        <Link to="/" aria-label="eFood - início">
          <Logo />
        </Link>

        <Cart href="#menu">{cartCount} produto(s) no carrinho</Cart>
      </HeaderContent>
    </Container>
  </HeaderBar>
)

export default RestaurantHeader
