//import { Customer } from 'fedapay'
import React, { useState } from 'react'
//import emailjs from '@emailjs/browser'
//import swal from 'sweetalert'

function Cart({ cart, setCart, total }) {
  const [userMail, setUserMail] = useState('')
  const [userName, setUserName] = useState('')
  //const [userCommande, setUserCommande] = useState(nameClothe)
  //const [dataBSDismiss, setDataBsDismiss] = useState(true)

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

  let nameClothe = cart.reduce(
    (acc, clotheItem) =>
      acc + ' ' + clotheItem.amount + ' ' + clotheItem.name + ' ; ',
    []
  )

  let amountClothe = cart.reduce(
    (acc, clotheItem) => acc + clotheItem.amount,
    0
  )

  function handleChangeUserMail(event) {
    setUserMail(event.target.value)
  }

  function handleChangeUserName(event) {
    setUserName(event.target.value)
  }

  function modal2Attribute() {
    let boutonConfirmer = document.getElementById('boutonConfirmer')
    if (true) {
      boutonConfirmer.setAttribute('data-bs-target', '#exampleModalToggle3')
      boutonConfirmer.setAttribute('data-bs-toggle', 'modal')
    }
  }

  function checkCommande() {
    if (userMail === '' || userName === '') {
      alert('Veuillez entrez votre nom prénom et votre mail')
    } else {
      if (!userMail.includes('@')) {
        alert(`Votre mail n'est pas valide. Veuillez le mettre à jour.`)
      } else {
        // swal('Commande effectuée!', 'Vérifiez votre mail', 'success')
        modal2Attribute(true)
      }
      /* emailjs
        .sendForm('service_4tuyxzs', 'template_yoplv1i', e, 'A1mdZJ2wcgjMn7M5O')
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )*/
    }
  }

  return (
    <React.Fragment>
      {/* premier div de modal ( panier)*/}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-black"
                id="exampleModalToggleLabel"
              >
                Panier
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cart.length > 0 ? (
                <div className="modal-body text-black">
                  {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} className="row">
                      <div className="col-10">
                        {name} : {price} € x {amount}
                      </div>
                      <div className=" col-2">
                        <i
                          className="bi bi-x-lg btn text-danger"
                          onClick={() => withdrawCart(name, price)}
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="modal-body text-black">
                  Votre panier est vide
                </div>
              )}
            </div>
            <div className="modal-footer">
              {cart.length > 0 ? (
                <span>
                  <button
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    className="btn btn-success fw-light"
                  >
                    Passer la commande
                  </button>
                </span>
              ) : null}

              <span className="mx-4">
                <h5 className="fw-light text-black">Total : {total} € </h5>
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

      {/* deuxieme div de modal ( confirmer la commande)*/}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Vérifier la commande
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span id="userCommand">
                Commande de : {nameClothe}
                <h3 className="fw-bold my-3"> TOTAL : {total} €</h3>
              </span>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Entrez votre nom et prénoms ( Obligatoire) :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="(Obligatoire)"
                  name="userName"
                  value={userName}
                  onChange={handleChangeUserName}
                  required
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Entrez votre adress mail active (Obligatoire) :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="userEmail"
                  value={userMail}
                  onChange={handleChangeUserMail}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                id="boutonConfirmer"
                //data-bs-dismiss=""
                className="btn btn-success fw-light"
                onClick={checkCommande}
              >
                Commande vérifiée
              </button>
              <button
                className="btn btn-primary fw-light"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Retour au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*dernier div de modal ( commande effectuée)*/}
      <div
        className="modal fade text-dark"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Passer la commande
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  fs-4 fw-bold">
              <span className="fw-light text-decoration-underline">
                Montant à payer{' '}
              </span>
              : &nbsp;{total} €
            </div>
            <div className="modal-footer">
              {/*<kkiapay-widget
                amount={total}
                key="595743368930419e3b3e9630f0510a50cecb8132"
                //url="<url-vers-votre-logo>"
                position="center"
                sandbox="true"
                data=""
                callback="valdesagb.github.io/moon-store"
              >
                Payer
              </kkiapay-widget>
              <kkiapay-widget
                sandbox="true"
                amount={total}
                key="595743368930419e3b3e9630f0510a50cecb8132"
                callback="https://valdesagb.github.io/moon-store"
              />*/}

              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() =>
                  alert(
                    "Cette option n'est malheureusement pas encore disponible. Nous vous conseillons de contacter le vendeur via l'un de ses réseaux situés au pied de page."
                  )
                }
              >
                Payer la commande
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setCart([])}
              >
                Annuler la commande
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* boutton pour enclencher le premier modal*/}
      <i
        className="bi bi-cart4 fs-2 btn text-white p-0 d-md-flex d-none "
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      ></i>
      <div
        className="btn btn-primary fw-light d-md-none p-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      >
        <div>Panier</div>
        <div>
          {amountClothe} élément (s) - {total} €
        </div>
      </div>
      {/* fin du boutton pour enclencher le premier modal*/}
    </React.Fragment>
  )
}

export default Cart

/* 
<i
        className="bi bi-cart4 fs-2 btn text-white p-0 d-md-flex d-none "
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      ></i>
      <div
        className="btn btn-primary fw-light d-md-none p-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      >
        <div>Panier</div>
        <div>
          {amountClothe} élément (s) - {total} €
        </div>
      </div>



<div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabIndex="-1"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalToggleLabel"
                          >
                            Panier
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {cart.length > 0 ? (
              <div className="modal-body text-black">
                {cart.map(({ name, price, amount }, index) => (
                  <div key={`${name}-${index}`} className="row">
                    <div className="col-10">
                      {name} : {price} € x {amount}
                    </div>
                    <div className=" col-2">
                      <i
                        className="bi bi-x-lg btn text-danger"
                        onClick={() => withdrawCart(name, price)}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="modal-body text-black">Votre panier est vide</div>
            )}
                        </div>
                        <div className="modal-footer">
                        {cart.length > 0 ? (
                <span>
                  <button
                   data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                    className="btn btn-success fw-light"
                    onClick={() => orderCart()}
                  >
                    Passer la commande
                  </button>
                </span>
              ) : null}

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
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                          >
                            Open second modal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalToggleLabel2"
                          >
                            Modal 2
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Hide this modal and show the first with the button
                          below.
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle"
                            data-bs-toggle="modal"
                          >
                            Back to first
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    Open first modal
                  </a>

   dernier div de modal ( commande effectué)
      <div
        className="modal fade text-dark"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Commande effectué.
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
          </div>
        </div>
      </div>*/
