import { SizeType } from './sizes'

export interface ProductType {
  id: number
  name: string
  price: number
  sizes: SizeType[]
}
