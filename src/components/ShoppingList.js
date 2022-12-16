import React from 'react'
import { clothes } from '../data'

function ShoppingList() {
  const categories = clothes.reduce(
    (x, y) => (x.includes(y.categorie) ? x : x.concat(y.categorie)),
    []
  )
  return (
    <React.Fragment>
      <div>
        <ul>
          {categories.map((cat, index) => (
            <li key={`${cat} - ${index}`}>{cat}</li>
          ))}
        </ul>
      </div>

      <div>
        {clothes.map(
          ({ id, name, categorie, cut, price, onSale, sex, forWho, cover }) => (
            <div key={id} className="card" style={{ width: '18rem' }}>
              <img
                src={cover}
                className="card-img-top"
                alt={`${name} - cover`}
              />
              <div className="card-body">
                <p className="card-text">
                  <span>{price}</span>
                  <span>{name}</span>
                  <span>{sex}</span>
                  <span>{forWho}</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </React.Fragment>
  )
}

export default ShoppingList
