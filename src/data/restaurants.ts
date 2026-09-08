export type Dish = {
  id: number
  name: string
  description: string
  image: string
  price: number
  portion: string
}

export type Restaurant = {
  id: number
  title: string
  type: string
  rating: number
  featured: boolean
  description: string
  cover: string
  menu: Dish[]
}

type ApiDish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type ApiRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ApiDish[]
}

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const normalizeRestaurant = (restaurant: ApiRestaurant): Restaurant => ({
  id: restaurant.id,
  title: restaurant.titulo,
  type: restaurant.tipo,
  rating: restaurant.avaliacao,
  featured: restaurant.destacado,
  description: restaurant.descricao,
  cover: restaurant.capa,
  menu: restaurant.cardapio.map((dish) => ({
    id: dish.id,
    name: dish.nome,
    description: dish.descricao,
    image: dish.foto,
    price: dish.preco,
    portion: dish.porcao
  }))
})

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  const data: ApiRestaurant[] = await response.json()
  return data.map(normalizeRestaurant)
}
