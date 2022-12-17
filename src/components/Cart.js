import React from 'react'

function Cart({ cart, setCart, total }) {
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
                  <div key={`${name}-${index}`}>
                    {name} : {price} € x {amount}
                  </div>
                ))}
              </div>
            ) : (
              <div className="modal-body text-black">Votre panier est vide</div>
            )}
            <div className="modal-footer">
              <h5 className="fw-light">Total : {total} € </h5>
              <button
                type="button"
                className="btn btn-danger fw-light"
                onClick={() => setCart([])}
              >
                Vider le panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart
