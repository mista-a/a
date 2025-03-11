import ProductsPage from '@/products/page'
import { ProductType } from '@/types/product'

export default function Home() {
  const products: ProductType[] = [
    { id: 1, name: 'Сникеры LV Skate', price: 133 },
    { id: 2, name: 'Сникеры LV Skate', price: 133 },
    { id: 3, name: 'Сникеры LV Skate', price: 133 },
    { id: 4, name: 'Сникеры LV Skate', price: 133 },
    { id: 5, name: 'Сникеры LV Skate', price: 133 },
    { id: 6, name: 'Сникеры LV Skate', price: 133 },
  ]

  return <ProductsPage products={products} />
}
