import React from 'react'
import '../styles/ShoppingItem.css'

function ShoppingItem({ id, cover, name, price, onSale, cart, setCart }) {
  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      setCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ])
    } else {
      setCart([...cart, { name, price, amount: 1 }])
    }
  }

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
          {onSale ? <span className="ms-sales">En solde </span> : null}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          className="btn btn-success fw-light"
          onClick={() => addToCart(name, price)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ShoppingItem
