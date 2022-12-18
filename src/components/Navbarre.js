import React from 'react'
import { navItems } from '../data'

function Navbarre() {
  return (
    <React.Fragment>
      <section
        className="row text-white fw-light d-none d-md-flex"
        style={{ backgroundColor: '#2197f2' }}
      >
        <ul className="list-inline d-flex justify-content-evenly gy-2">
          {navItems.map((item, index) => (
            <li className="list-inline-item" key={`${item} - ${index}`}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  )
}

export default Navbarre
