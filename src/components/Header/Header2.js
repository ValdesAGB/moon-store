import React from 'react'
import { siteName, welcomeMessage } from '../../data'
import moonstore from '../../assets/moonstore.png'
import Cart from '../Cart'

function Header2() {
  return (
    <section
      className="row text-white border-top"
      style={{ backgroundColor: '#0063d2' }}
    >
      <div className="col-6 row">
        <div className="col-2">
          <img src={moonstore} alt={`${siteName} - cover`} className="w-100" />
        </div>
        <div className="col">
          <div className="fw-bold fs-2">{siteName}</div>
          <div className="fw-light" style={{ fontSize: '0.9em' }}>
            {welcomeMessage}
          </div>
        </div>
      </div>

      <div className="col-6 row g-2 fw-light">
        <div className="col input-group text-white pb-2">
          <input type="search" className="form-control" />
          <button
            type="submit"
            className="fw-light btn text-white btn-outline-secondary rounded-0"
            style={{ backgroundColor: '#2196f3' }}
          >
            Rechercher
          </button>
        </div>

        <div className="col-5 ps-5 row d-flex justify-content-end">
          <div className="col-2 mx-2">
            <Cart />
          </div>
          <div className="col">
            <div>Panier</div>
            <div>3 éléments - $250.00</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header2
