import React from 'react'
import '../styles/ShoppingItem.css'

function ShoppingItem({ id, cover, name, price, onSale, cart, setCart }) {
  return (
    <div
      key={id}
      className="card col-4 my-5 bg-light"
      style={{ width: '18rem' }}
    >
      <img src={cover} className="card-img-top h-75" alt={`${name} - cover`} />
      <div className="card-body">
        <p className="card-text fw-light">
          {name}
          <span className="ms-shopping-price ">{price} €</span>
          <span className="col">{onSale}</span>
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          className="btn btn-success fw-light"
          onClick={() => setCart(cart + 1)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ShoppingItem
