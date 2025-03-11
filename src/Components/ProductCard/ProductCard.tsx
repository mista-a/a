import { ProductType } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProductCardProps = {} & ProductType

const ProductCard: React.FC<ProductCardProps> = ({ name, price, id }) => {
  return (
    <Link href={`products/${id}`}>
      <div className='bg-white rounded-2xl backdrop-blur-2xl'>
        <Image
          width={400}
          height={400}
          className='w-full h-full'
          src='https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BO9U3PMI31_PM2_Front%20view.png?wid=400&hei=400'
          alt='product color'
        />
        <div className='p-2 '>
          <p>{name}</p>
          <p className='font-bold'>{price} $</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
