import React, { useState } from 'react'
import Banner from './components/Banner'
import Navbarre from './components/Navbarre'
import ShoppingList from './components/ShoppingList'

function App() {
  const [cart, setCart] = useState(0)
  return (
    <React.Fragment>
      <Banner cart={cart} setCart={setCart} />
      <Navbarre />
      <ShoppingList cart={cart} setCart={setCart} />
    </React.Fragment>
  )
}

export default App
