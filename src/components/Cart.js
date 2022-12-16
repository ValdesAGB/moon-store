import React from 'react'

function Cart() {
  return (
    <React.Fragment>
      <i
        className="bi bi-cart4 fs-2 btn text-white p-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></i>

      <div
        className="modal fade"
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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart
