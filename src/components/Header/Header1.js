import React from 'react'
import { welcomeMessage } from '../../data'

function Header1() {
  return (
    <React.Fragment>
      <section
        className="row text-white fw-light"
        style={{ backgroundColor: '#0063d2' }}
      >
        <ul className="col list-inline g-2 ms-2">
          <li className="list-inline-item">Français</li>
          <li className="list-inline-item mx-5">FCFA</li>
          <li className="list-inline-item">{welcomeMessage}</li>
        </ul>

        <ul className="col g-2 list-inline d-flex justify-content-end me-2">
          <li className="list-inline-item me-5">Mon compte</li>
          <li className="list-inline-item">Liste des souhaits (0) </li>
        </ul>
      </section>
    </React.Fragment>
  )
}

export default Header1
