import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../store'
import { fechar, remover } from '../../store/reducers/cart'
import {
  CartContainer,
  CartItem,
  CartList,
  EmptyCart,
  FinishButton,
  ItemImage,
  ItemInfo,
  Overlay,
  Prices,
  RemoveButton,
  Sidebar
} from './styles'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)
  const total = items.reduce((sum, item) => sum + item.price, 0)

  const goToCheckout = () => {
    dispatch(fechar())
    navigate('/checkout')
  }

  if (!isOpen) return null

  return (
    <CartContainer aria-hidden={!isOpen}>
      <Overlay onClick={() => dispatch(fechar())} />

      <Sidebar role="dialog" aria-modal="true" aria-label="Carrinho de compras">
        {items.length === 0 ? (
          <EmptyCart>
            <strong>O carrinho está vazio.</strong>
            <p>Adicione um prato para continuar com o pedido.</p>
          </EmptyCart>
        ) : (
          <>
            <CartList>
              {items.map((item, index) => (
                <CartItem key={`${item.id}-${index}`}>
                  <ItemImage src={item.image} alt={item.name} />

                  <ItemInfo>
                    <h3>{item.name}</h3>
                    <span>{formatPrice(item.price)}</span>
                  </ItemInfo>

                  <RemoveButton
                    type="button"
                    aria-label={`Remover ${item.name} do carrinho`}
                    onClick={() => dispatch(remover(index))}
                  >
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M5.5 1.5h5l.5 1.5H14v1.5H2V3h3l.5-1.5ZM3.5 5.5h9l-.6 8.5H4.1l-.6-8.5Zm2 1.5.3 5.5h1.3L6.8 7H5.5Zm3.7 0-.3 5.5h1.3l.3-5.5H9.2Z" />
                    </svg>
                  </RemoveButton>
                </CartItem>
              ))}
            </CartList>

            <Prices>
              <span>Valor total</span>
              <strong>{formatPrice(total)}</strong>
            </Prices>

            <FinishButton type="button" onClick={goToCheckout}>
              Continuar com a entrega
            </FinishButton>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
