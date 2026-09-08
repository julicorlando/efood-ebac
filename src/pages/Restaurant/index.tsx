import { Navigate, useParams } from 'react-router-dom'
import DishCard from '../../components/DishCard'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { restaurants } from '../../data/restaurants'
import { Container } from '../../styles/shared'
import {
  Banner,
  BannerOverlay,
  BannerText,
  Cuisine,
  MenuGrid,
  RestaurantName
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <RestaurantHeader />

      <Banner $image={restaurant.cover}>
        <BannerOverlay>
          <Container>
            <BannerText>
              <Cuisine>{restaurant.type}</Cuisine>
              <RestaurantName>{restaurant.title}</RestaurantName>
            </BannerText>
          </Container>
        </BannerOverlay>
      </Banner>

      <Container>
        <MenuGrid id="menu">
          {restaurant.menu.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </MenuGrid>
      </Container>

      <Footer />
    </>
  )
}

export default Restaurant
