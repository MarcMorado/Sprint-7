import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useLocalStorage } from "./useLocalStorage";
import { Info } from "./styled";
import { Button } from "./styled";
import "../style/style.css";



let price = 0;
let countP = 1;
let countI = 1;

export default function Prices() {
  const [webCheck, webSetIsChecked] = useState(false);
  const [seoCheck, seoSetIsChecked] = useState(false);
  const [gAdsCheck, gAdsSetIsChecked] = useState(false);
  const webChange = () => {
    webSetIsChecked(!webCheck);
  };
  const seoChange = () => {
    seoSetIsChecked(!seoCheck);
  };
  const gAdsChange = () => {
    gAdsSetIsChecked(!gAdsCheck);
  };

  //* FORMULARIO
  const [isToggled, setIsToggled] = useState(false);
  const [datos, setDatos] = useState({
    nPaginas: 1,
    nIdiomas: 1,
  });

  //* +PLUS -MINUS
  const handleInputChange = (event) => {
    event.target.name === "nPaginas"
      ? (countP = Number(event.target.value))
      : (countI = Number(event.target.value));
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const sumar = (event) => {
    event.target.name === "nPaginas" ? (countP += 1) : (countI += 1);
    setDatos({
      ...datos,
      [event.target.name]: event.target.name === "nPaginas" ? countP : countI,
    });
  };
  const restar = (event) => {
    event.target.name === "nPaginas"
      ? countP > 1
        ? (countP -= 1)
        : (countP -= 0)
      : countI > 1
      ? (countI -= 1)
      : (countI -= 0);
    setDatos({
      ...datos,
      [event.target.name]: event.target.name === "nPaginas" ? countP : countI,
    });
  };

  //! LOCALSTORAGE
  const [valor, setValor] = useLocalStorage("valor", "");
  const [checked, setChecked] = useLocalStorage("CheckBox", false);

  return (
    <div>
      <h3>¿Qué quieres hacer?</h3>
      <input
        type="checkbox"
        value="web"
        checked={webCheck}
        onChange={webChange}
        onClick={() => setIsToggled(!isToggled)}
      />
      Una pàgina web (500€) <br />
      {isToggled && (
        <div>
          <p /> Número de pàginas &nbsp;
          <button name="nPaginas" onClick={sumar}>
            +
          </button>
          <input
            type="number"
            className="form-control"
            name="nPaginas"
            value={datos.nPaginas}
            onChange={handleInputChange}
          ></input>
          <button name="nPaginas" onClick={restar}>
            -
          </button>
          <Popup trigger={<button>i</button>} position="right center">
            <div>
              En este componente debe indicar el número de páginas que tendrá su
              sitio web
            </div>
          </Popup>
          <p /> Número de idiomas &nbsp;
          <button name="nIdiomas" onClick={sumar}>
            +
          </button>
          <input
            type="number"
            className="form-control"
            name="nIdiomas"
            value={datos.nIdiomas}
            onChange={handleInputChange}
          ></input>
          <button name="nIdiomas" onClick={restar}>
            -
          </button>
          <Popup trigger={<Info></Info>} position="right center">
            <div>
              En este componente debe indicar el número de idiomas que tendrá su
              sitio web
            </div>
          </Popup>
        </div>
      )}
      <input
        type="checkbox"
        value="seo"
        checked={seoCheck}
        onChange={seoChange}
      />
      Una consultoria SEO (300€) <br />
      <input
        type="checkbox"
        value="gAds"
        checked={gAdsCheck}
        onChange={gAdsChange}
      />
      Una campanya de Google Ads (200€)
      {/* Show Price */}
      <p>
        Preu:{" "}
        {(webCheck && price + 500 + datos.nPaginas * datos.nIdiomas * 30) +
          (seoCheck && price + 300) +
          (gAdsCheck && price + 200)}
        €
      </p>
    </div>
  );
}

// {gAdsCheck ? price + 200: price + 0}

//? Pedir nombre de presupuesto y cliente, 
//? boton para añadir otro presupuesto, 
//? enseñar todos los presupuestos en la derecha de la pantalla, 
//? poner fecha en cada uno de esos presupuestos
//? poner tres botones arriba de la list, ordenar alfabeticamente, por fecha y por orden array
