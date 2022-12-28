import React from 'react'
import { sellerNetworks } from '../data'

function Footer() {
  return (
    <footer>
      <hr />
      <div className="row py-md-2 py-0 align-items-center">
        <div className="col-9">
          <h5 className="ms-md-5 ms-0">
            <a href="#" className="text-decoration-none text-dark fw-light">
              MoonStore
            </a>
          </h5>
        </div>

        <div className="col-3">
          <div>
            <ul className="list-inline">
              {sellerNetworks.map(({ id, link, icone }) => (
                <li
                  className="list-inline-item px-2"
                  title={id}
                  key={id}
                  onClick={() =>
                    alert(
                      "Vous serez redirigé vers le profil ComeUp du concepteur de ce site, sur lequel vous pourrez discuter de vos besoins avec lui en toutes sécurité. Ne vous en faites pas, c'est gratuit 😁."
                    )
                  }
                >
                  <a href={link} className="text-dark">
                    <i className={icone}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
