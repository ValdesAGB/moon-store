import React from 'react'

function Cart({ cart, setCart, total }) {
  // fonction pour retirer un éléments du panier
  function withdrawCart(name, price) {
    const currentClothesAmount = cart.find((cloth) => cloth.name === name)
    if (currentClothesAmount) {
      const cartFilteredCurrentClothes = cart.filter(
        (plant) => plant.name !== name
      )
      if (currentClothesAmount.amount === 1) {
        setCart([...cartFilteredCurrentClothes])
      } else {
        setCart([
          ...cartFilteredCurrentClothes,
          { name, price, amount: currentClothesAmount.amount - 1 },
        ])
      }
    }
  }

  return (
    <React.Fragment>
      <i
        className="bi bi-cart4 fs-2 btn text-white p-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></i>

      <div
        className="modal fade text-black"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-black"
                id="exampleModalLabel"
              >
                PANIER
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {cart.length > 0 ? (
              <div className="modal-body text-black">
                {cart.map(({ name, price, amount }, index) => (
                  <div key={`${name}-${index}`} className="row">
                    <div className="col-10">
                      {name} : {price} € x {amount}
                    </div>
                    <div className=" col-1">
                      <i
                        className="bi bi-x-lg btn text-danger fs-5"
                        onClick={() => withdrawCart(name, price)}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="modal-body text-black">Votre panier est vide</div>
            )}
            <div className="modal-footer ">
              <span className="mx-4">
                <h5 className="fw-light">Total : {total} € </h5>
              </span>
              <span>
                <button
                  type="button"
                  className="btn btn-danger fw-light"
                  onClick={() => setCart([])}
                >
                  Vider le panier
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart
