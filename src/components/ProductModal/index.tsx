import { useEffect } from 'react'
import type { Dish } from '../../data/restaurants'
import { Button } from '../../styles/shared'
import {
  CloseButton,
  Content,
  Description,
  Modal,
  Overlay,
  ProductImage,
  ProductInfo,
  Portion,
  Title
} from './styles'

type Props = {
  dish: Dish | null
  onClose: () => void
  onAdd: (dish: Dish) => void
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const ProductModal = ({ dish, onClose, onAdd }: Props) => {
  useEffect(() => {
    if (!dish) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dish, onClose])

  if (!dish) return null

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose()
      }}
    >
      <Modal role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <CloseButton type="button" onClick={onClose} aria-label="Fechar modal">
          ×
        </CloseButton>

        <Content>
          <ProductImage src={dish.image} alt={dish.name} />

          <ProductInfo>
            <Title id="product-modal-title">{dish.name}</Title>
            <Description>{dish.description}</Description>
            <Portion>Serve: {dish.portion}</Portion>
            <Button type="button" onClick={() => onAdd(dish)}>
              Adicionar ao carrinho - {formatPrice(dish.price)}
            </Button>
          </ProductInfo>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default ProductModal
