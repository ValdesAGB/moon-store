import React from 'react'
import { welcomeMessage } from '../../data'

function Header1() {
  function Unavalaible() {
    alert(
      "Cette fonctionnalité n'est pas disponible dans votre pays. Veuillez réésayer plutard."
    )
  }
  return (
    <React.Fragment>
      <section
        className="row text-white fw-light"
        style={{ backgroundColor: '#0063d2' }}
      >
        <ul className="col col-sm- list-inline g-2 ms-2">
          <li
            className="list-inline-item d-none d-md-inline-block"
            onClick={() => Unavalaible()}
          >
            Français
          </li>
          <li
            className="list-inline-item mx-5 d-none d-lg-inline-block"
            onClick={() => Unavalaible()}
          >
            EURO
          </li>
          <li className="list-inline-item ms-md-2 ms-lg-0">{welcomeMessage}</li>
        </ul>

        <ul className="col col-sm-6 g-2 list-inline d-flex justify-content-end me-2">
          <li
            className="list-inline-item me-md-5 me-sm-0"
            onClick={() => Unavalaible()}
          >
            Mon compte
          </li>
          <li
            className="list-inline-item d-none d-md-inline-block"
            onClick={() => Unavalaible()}
          >
            Liste des souhaits (0){' '}
          </li>
        </ul>
      </section>
    </React.Fragment>
  )
}

export default Header1
