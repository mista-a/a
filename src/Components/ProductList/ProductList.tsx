import { ProductType } from '@/types/product'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

type ProductListProps = {
  products: ProductType[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-0.5'>
      {products.map((product) => (
        <div key={product.id}>{<ProductCard {...product} />}</div>
      ))}
    </div>
  )
}

export default ProductList
