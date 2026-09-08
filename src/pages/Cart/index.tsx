import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import type { RootState } from '../../store'
import { remover } from '../../store/reducers/cart'
import { Container } from '../../styles/shared'
import {
  CartItem,
  CartList,
  EmptyCart,
  FinishButton,
  ItemImage,
  ItemInfo,
  Page,
  PageTitle,
  RemoveButton,
  Summary,
  Total
} from './styles'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <RestaurantHeader />

      <Page>
        <Container>
          <PageTitle>Carrinho</PageTitle>

          {items.length === 0 ? (
            <EmptyCart>
              <strong>Seu carrinho está vazio.</strong>
              <p>Escolha um restaurante e adicione produtos para continuar.</p>
              <Link to="/">Ver restaurantes</Link>
            </EmptyCart>
          ) : (
            <>
              <CartList>
                {items.map((item, index) => (
                  <CartItem key={`${item.id}-${index}`}>
                    <ItemImage src={item.image} alt={item.name} />

                    <ItemInfo>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <strong>{formatPrice(item.price)}</strong>
                    </ItemInfo>

                    <RemoveButton
                      type="button"
                      aria-label={`Remover ${item.name} do carrinho`}
                      onClick={() => dispatch(remover(index))}
                    >
                      Remover
                    </RemoveButton>
                  </CartItem>
                ))}
              </CartList>

              <Summary>
                <Total>
                  <span>Valor total</span>
                  <strong>{formatPrice(total)}</strong>
                </Total>
                <FinishButton type="button" onClick={() => navigate('/checkout')}>
                  Continuar com a entrega
                </FinishButton>
              </Summary>
            </>
          )}
        </Container>
      </Page>

      <Footer />
    </>
  )
}

export default Cart
