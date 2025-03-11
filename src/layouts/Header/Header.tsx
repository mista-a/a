import Button from '@/Components/Button/Button'
import Link from 'next/link'
import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { MdFavoriteBorder } from 'react-icons/md'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <h1>Logo</h1>
      <div className='flex space justify-between gap-20'>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <Link href='/'>Categories</Link>
        </div>
        <div>
          <Link href='/'>Collections</Link>
        </div>
        <div>
          <Link href='/'>Popular</Link>
        </div>
      </div>
      <div className='flex'>
        <Button>
          <CiSearch />
        </Button>
        <Button>
          <MdFavoriteBorder />
        </Button>
        <Button>
          <CiShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default Header
