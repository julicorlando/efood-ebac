import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DishCard from '../../components/DishCard'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import RestaurantHeader from '../../components/RestaurantHeader'
import {
  getRestaurants,
  type Dish,
  type Restaurant as RestaurantType
} from '../../data/restaurants'
import { Container } from '../../styles/shared'
import {
  Banner,
  BannerOverlay,
  BannerText,
  Cuisine,
  MenuGrid,
  RestaurantName,
  Status
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getRestaurants()
      .then((restaurants) => {
        const currentRestaurant = restaurants.find((item) => item.id === Number(id))

        if (!currentRestaurant) {
          setError('Restaurante não encontrado.')
          return
        }

        setRestaurant(currentRestaurant)
      })
      .catch(() => setError('Não foi possível carregar este restaurante.'))
      .finally(() => setLoading(false))
  }, [id])

  const closeModal = useCallback(() => setSelectedDish(null), [])

  const addToCart = (dish: Dish) => {
    setCartCount((count) => count + 1)
    setSelectedDish(null)
  }

  if (loading) {
    return (
      <>
        <RestaurantHeader cartCount={cartCount} />
        <Container>
          <Status>Carregando restaurante...</Status>
        </Container>
      </>
    )
  }

  if (!restaurant || error) {
    return (
      <>
        <RestaurantHeader cartCount={cartCount} />
        <Container>
          <Status>
            {error || 'Restaurante não encontrado.'} <Link to="/">Voltar ao início</Link>
          </Status>
        </Container>
      </>
    )
  }

  return (
    <>
      <RestaurantHeader cartCount={cartCount} />

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
            <DishCard key={dish.id} dish={dish} onBuy={setSelectedDish} />
          ))}
        </MenuGrid>
      </Container>

      <Footer />

      <ProductModal dish={selectedDish} onClose={closeModal} onAdd={addToCart} />
    </>
  )
}

export default Restaurant
