import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'
import { getRestaurants, type Restaurant } from '../../data/restaurants'
import { Container } from '../../styles/shared'
import { Grid, Main, Status } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .catch(() => setError('Não foi possível carregar os restaurantes. Tente novamente.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Hero />

      <Main>
        <Container>
          {loading && <Status>Carregando restaurantes...</Status>}
          {error && <Status>{error}</Status>}

          {!loading && !error && (
            <Grid>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </Grid>
          )}
        </Container>
      </Main>

      <Footer />
    </>
  )
}

export default Home
