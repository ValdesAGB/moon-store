import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
//import Navbarre from './components/Navbarre'
import ShoppingList from './components/ShoppingList'

function App() {
  const savedCart = localStorage.getItem('shop')

  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('shop', JSON.stringify(cart))
  }, [cart])

  return (
    <React.Fragment>
      <Banner cart={cart} setCart={setCart} />
      {/*<Navbarre />*/}
      <ShoppingList cart={cart} setCart={setCart} />
      <Footer />
    </React.Fragment>
  )
}

export default App
