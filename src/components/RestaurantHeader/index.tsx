import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../../store'
import { abrir } from '../../store/reducers/cart'
import { Container } from '../../styles/shared'
import Logo from '../Logo'
import { Cart, HeaderBar, HeaderContent, RestaurantsLink } from './styles'

const RestaurantHeader = () => {
  const dispatch = useDispatch()
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

          <Cart
            type="button"
            onClick={() => dispatch(abrir())}
            aria-label={`Abrir carrinho com ${cartCount} produto(s)`}
          >
            {cartCount} produto(s) no carrinho
          </Cart>
        </HeaderContent>
      </Container>
    </HeaderBar>
  )
}

export default RestaurantHeader
