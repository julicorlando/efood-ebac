import { Link } from 'react-router-dom'
import type { Restaurant } from '../../data/restaurants'
import star from '../../assets/star.svg'
import {
  Card,
  CardBody,
  Description,
  Image,
  Info,
  Rating,
  Tag,
  Tags,
  Title
} from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <Card>
    <div>
      <Image src={restaurant.cover} alt={restaurant.title} />
      <Tags>
        {restaurant.featured && <Tag $featured>Destaque da semana</Tag>}
        <Tag>{restaurant.type}</Tag>
      </Tags>
    </div>

    <CardBody>
      <Info>
        <Title>{restaurant.title}</Title>
        <Rating>
          {restaurant.rating.toFixed(1)}
          <img src={star} alt="" aria-hidden="true" />
        </Rating>
      </Info>

      <Description>{restaurant.description}</Description>

      <Link className="details" to={`/restaurante/${restaurant.id}`}>
        Saiba mais
      </Link>
    </CardBody>
  </Card>
)

export default RestaurantCard
