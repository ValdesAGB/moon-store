import React, { useState } from 'react'
import { clothes } from '../data'
import Categories from './Categories'
import ShoppingItem from './ShoppingItem'

function ShoppingList({ cart, setCart }) {
  const categories = clothes.reduce(
    (x, y) => (x.includes(y.categorie) ? x : x.concat(y.categorie)),
    []
  )

  const [activeCategorie, setActiveCategory] = useState('')

  return (
    <React.Fragment>
      <div>
        <Categories
          activeCategory={activeCategorie}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>

      <div className="row d-flex justify-content-around">
        {clothes.map(({ id, name, price, onSale, cover, categorie }) =>
          !activeCategorie || activeCategorie === categorie ? (
            <ShoppingItem
              key={id}
              name={name}
              price={price}
              onSale={onSale}
              cover={cover}
              cart={cart}
              setCart={setCart}
            />
          ) : null
        )}
      </div>
    </React.Fragment>
  )
}

export default ShoppingList
