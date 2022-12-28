import React from 'react'
import { siteName, welcomeMessage } from '../../data'
import moonstore from '../../assets/moonstore.png'
import Cart from '../Cart'

function Header2({ cart, setCart, total }) {
  total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  let amountClothe = cart.reduce(
    (acc, clotheItem) => acc + clotheItem.amount,
    0
  )

  return (
    <section
      className="row text-white border-top"
      style={{ backgroundColor: '#0063d2' }}
    >
      <div className="row col-6 col-md-7 col-lg-6 col-xl-7 d-flex align-items-center ">
        <div className="col-9 col-lg-3 col-md-4 col-xl-2">
          <img src={moonstore} alt={`${siteName} - cover`} className="w-100" />
        </div>
        <div className="col-lg-9 col-md-8 col-xl-10 d-none d-md-block">
          <div className="fw-bold fs-2">{siteName}</div>
          <div className="fw-light" style={{ fontSize: '0.9em' }}>
            {welcomeMessage}
          </div>
        </div>
      </div>

      <div className="row col col-md-5 col-lg-6 col-xl-5 fw-light  d-flex align-items-center justify-content-end">
        <div className="text-white col-lg-5 col-xl-5 col-md-2 d-none d-lg-block">
          <input type="search" className="col-7" disabled />
          <button
            disabled
            type="submit"
            className="fw-light btn text-white btn-outline-secondary rounded-0 col-5 p-0"
            style={{ backgroundColor: '#2196f3' }}
          >
            Search
          </button>
        </div>

        <div className="row d-flex  justify-content-end col-md-10 col-lg-6  col-12 col-xl-6  offset-1">
          <div className="col-md-3 col-lg-2 col-xl-3   mt-2 ">
            <Cart cart={cart} setCart={setCart} total={total} />
          </div>
          <div className="col-md-9 col-lg-10 col-xl-9 d-none d-md-block  ">
            <div>Panier</div>
            <div>
              {amountClothe} élément(s) - {total} €
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header2
