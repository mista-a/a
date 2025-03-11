import ProductList from '@/Components/ProductList/ProductList'
import { ProductType } from '@/types/product'
import React from 'react'

interface ProductsPage {
  products: ProductType[]
}

//fix написать нормальный тип для next страниц
const ProductsPage: React.FC<ProductsPage> = ({ products }) => {
  return <ProductList products={products} />
}

export default ProductsPage
