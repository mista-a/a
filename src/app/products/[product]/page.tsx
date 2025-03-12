'use client'

import Button from '@/Components/Button/Button'
import SizeChooser from '@/Components/SizeChooser/SizeChooser'
import { ProductType } from '@/types/product'
import getAverageImageColor from '@/utils/getAverageImageColor/getAverageImageColor'

//fix нормальный тип для next страницы
const ProductPage: React.FC = () => {
  const product: ProductType = {
    id: 1,
    name: 'Сникеры LV Skate',
    price: 133,
    sizes: [
      {
        id: 1,
        name: 'XS',
      },
      { id: 2, name: 'S' },
      { id: 3, name: 'M' },
      { id: 4, name: 'L' },
    ],
  }

  async function getImageColor() {
    const color = await getAverageImageColor(
      'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BSUPN1DN17_PM2_Front%20view.png?wid=1920&hei=990'
    )
    console.log(color)
  }
  getImageColor()

  return (
    <div className=''>
      <div>
        {/* absolute */}
        <div className=' z-1 flex content-end flex-wrap justify-between '>
          <SizeChooser {...product} />
          <div>
            <h2>{product.price} $</h2>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-[url("https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BSUPN1DN17_PM2_Front%20view.png?wid=1920&hei=990")]'></div>
        {/* <img
          className='bg-amber-100 bg-red absolute h-dvh w-dvw top-0 left-0'
          src='https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BSUPN1DN17_PM2_Front%20view.png'
          // alt='product image'
          // width={0}
          // height={0}
          // src='https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BO9U3PMI31_PM1_Worn%20view.png?wid1800=&hei=1040'
          // sizes='100vw'
          // style={{ width: '100%', height: 'auto' }}
        /> */}
      </div>
    </div>
  )
}

export default ProductPage
