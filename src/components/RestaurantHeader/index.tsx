import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../../store'
import { Container } from '../../styles/shared'
import Logo from '../Logo'
import { Cart, HeaderBar, HeaderContent, RestaurantsLink } from './styles'

const RestaurantHeader = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

  return (
    <HeaderBar>
      <Container>
        <HeaderContent>
          <RestaurantsLink as={Link} to="/">
            Restaurantes
          </RestaurantsLink>

          <Link to="/" aria-label="eFood - início">
            <Logo />
          </Link>

          <Cart as={Link} to="/carrinho">
            {cartCount} produto(s) no carrinho
          </Cart>
        </HeaderContent>
      </Container>
    </HeaderBar>
  )
}

export default RestaurantHeader
