import React from 'react'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'

function Banner({ cart, setCart }) {
  return (
    <header>
      <Header1 />
      <Header2 cart={cart} setCart={setCart} />
    </header>
  )
}

export default Banner
