interface IRating {
  rate: number
  count: number
}

export interface IProductResponse {
  id: number
  categoryId: number
  title: string
  price: number
  description: string
  category: string
  image: string
  gallery: string[]
  rating: IRating
}
