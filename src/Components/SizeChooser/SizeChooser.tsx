'use client'

import React, { useState } from 'react'
import { ProductType } from '@/types/product'
import Button from '@/Components/Button/Button'

type SizeChooserProps = {} & ProductType

const SizeChooser: React.FC<SizeChooserProps> = ({ name, sizes }) => {
  const [activeSize, setActiveSize] = useState<number | null>()

  return (
    <div>
      <h2>{name}</h2>
      <div className='flex gap-1'>
        {sizes.map(({ id, name }) => (
          <Button
            key={id}
            onClick={() => setActiveSize(id)}
            active={id === activeSize}
            activeClass='bg-amber-300'
            className='bg-amber-100 rounded-2xl min-w-12 min-h-12 transition-colors hover:bg-amber-200'
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SizeChooser
