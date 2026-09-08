import type { Dish } from '../../data/restaurants'
import { Button } from '../../styles/shared'
import { Card, Content, Description, DishImage, Title } from './styles'

type Props = {
  dish: Dish
  onBuy: (dish: Dish) => void
}

const DishCard = ({ dish, onBuy }: Props) => (
  <Card>
    <DishImage src={dish.image} alt={dish.name} />
    <Content>
      <Title>{dish.name}</Title>
      <Description>{dish.description}</Description>
      <Button type="button" onClick={() => onBuy(dish)}>
        Comprar produto
      </Button>
    </Content>
  </Card>
)

export default DishCard
