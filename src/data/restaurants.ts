export type Dish = {
  id: number
  name: string
  description: string
  image: string
}

export type Restaurant = {
  id: number
  title: string
  type: string
  rating: number
  featured?: boolean
  description: string
  cover: string
  menu: Dish[]
}

const dishes: Dish[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'Uma clássica pizza italiana com molho de tomate, mussarela fresca, manjericão e azeite.',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    description:
      'Massa artesanal, molho de tomate, queijo derretido e generosas fatias de pepperoni.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Ravioli da casa',
    description:
      'Massa fresca recheada, servida com molho especial da casa e ervas aromáticas.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Risoto especial',
    description:
      'Arroz cremoso preparado lentamente, finalizado com parmesão e ingredientes frescos.',
    image:
      'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Pasta artesanal',
    description:
      'Massa artesanal com molho encorpado, queijo e ervas selecionadas.',
    image:
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Tiramisu',
    description:
      'Sobremesa italiana cremosa, com café, cacau e camadas delicadas de mascarpone.',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80'
  }
]

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    type: 'Japonesa',
    rating: 4.9,
    featured: true,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa. Sushis frescos, combinações especiais e ingredientes selecionados.',
    cover:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    rating: 4.6,
    description:
      'A verdadeira cozinha italiana feita com carinho. Massas artesanais, pizzas e receitas tradicionais para uma experiência inesquecível.',
    cover:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  },
  {
    id: 3,
    title: 'Sabor do Mar',
    type: 'Frutos do mar',
    rating: 4.8,
    description:
      'Pratos frescos e cheios de sabor, preparados com peixes, camarões e ingredientes selecionados para quem ama o mar.',
    cover:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  },
  {
    id: 4,
    title: 'Cantina Toscana',
    type: 'Italiana',
    rating: 4.7,
    featured: true,
    description:
      'Sabores clássicos da Toscana em receitas acolhedoras, com massas, molhos artesanais e ingredientes de alta qualidade.',
    cover:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  },
  {
    id: 5,
    title: 'Burger House',
    type: 'Americana',
    rating: 4.5,
    description:
      'Hambúrgueres artesanais, ingredientes frescos e combinações generosas para matar a fome e deixar vontade de repetir.',
    cover:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  },
  {
    id: 6,
    title: 'Bistrô Paris',
    type: 'Francesa',
    rating: 4.9,
    description:
      'Uma seleção inspirada nos bistrôs franceses, com pratos elegantes, sabores delicados e uma experiência especial em cada pedido.',
    cover:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    menu: dishes
  }
]
