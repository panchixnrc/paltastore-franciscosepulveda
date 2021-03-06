import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./ItemCount.css";

const ItemCount = ({ stock, handleStock, onAdd, inicial, itemId, item }) => {
  const [contador, setContador] = useState(inicial);
  /* const [stockLeft, setStockLeft] = useState(0); */
  const [stockControl, setStockControl] = useState(false);

  const { selectItem, compraLista, setCompraLista, cart } =
    useContext(CartContext);
  console.log(cart);

  /*  useEffect(() => {
    let cantidadInCart = 0;

    cart.map((prod) => {
      if (prod.id === itemId) {
        if (prod.cantidad > 0) {
          cantidadInCart = item.stock - prod.cantidad;
        }
        return cantidadInCart;
      } else {
        return (cantidadInCart = item.stock);
      }
    });
    setStockLeft(cantidadInCart);
    console.log("cart", cantidadInCart);
  }, []); */

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          {!compraLista && (
            <div className="input-group mb-3 col-1">
              <button
                className="btn btn-outline-secondary palta-btn"
                type="button"
                id="button-addon1"
                onClick={() => {
                  if (contador > 1) {
                    setContador(contador - 1);
                  }
                }}
              >
                -
              </button>
              <input
                onChange={(e) => setContador(e.target.value)}
                value={contador}
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className="btn btn-outline-secondary palta-btn col "
                type="button"
                id="button-addon1"
                onClick={() => {
                  if (contador < stock) {
                    setContador(contador + 1);
                  } else {
                    setStockControl(true);
                  }
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="badge bg-success mb-2">
            Hay {stock} unidades disponibles
          </span>
          {stockControl && (
            <ul className="list-group pb-2">
              <li className="list-group-item list-group-item-warning">
                La cantidad ha superado el stock disponible.
              </li>
            </ul>
          )}
        </div>
        {!compraLista && (
          <button
            onClick={() => {
              onAdd(selectItem, contador);

              setCompraLista(true);
            }}
            className="btn btn-secondary palta-btn  d-flex justify-content-center align-items-center"
          >
            <span className="mx-2">Agregar </span>
            <ion-icon size="medium" name="add-circle-outline"></ion-icon>
          </button>
        )}

        {compraLista && (
          <button className="btn btn-primary palta-btn">
            {" "}
            <Link className="text-decoration-none text-white" to="/cart">
              {" "}
              Terminar Compra{" "}
            </Link>{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default ItemCount;
