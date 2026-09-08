import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import { Container } from '../../styles/shared'
import { Box, Page } from './styles'

const NotFound = () => (
  <Page>
    <Container>
      <Box>
        <Logo />
        <h1>Página não encontrada</h1>
        <p>O endereço informado não existe.</p>
        <Link to="/">Voltar para os restaurantes</Link>
      </Box>
    </Container>
  </Page>
)

export default NotFound
