import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import { Container } from '../../styles/shared'
import { Grid, Main } from './styles'

const Home = () => (
  <>
    <Hero />

    <Main>
      <Container>
        <Grid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </Grid>
      </Container>
    </Main>

    <Footer />
  </>
)

export default Home
