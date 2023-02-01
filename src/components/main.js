import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Info } from "./styled";
import { Button } from "./styled";
import { InputSt } from "./styled";
import { DivSt } from "./styled";
import "../style/style.css";
let price = 0;

export default function Prices() {
  //! Getting localStorage
  const storedWebCheck = localStorage.getItem("webChecked");
  const storedSeoCheck = localStorage.getItem("seoChecked");
  const storedAdsCheck = localStorage.getItem("gAdsChecked");
  const storedPaginas = localStorage.getItem("nPaginas");
  const storedIdiomas = localStorage.getItem("nIdiomas");
  let countP = Number(storedPaginas || 1);
  let countI = Number(storedIdiomas || 1);

  //?Checks
  const [webCheck, webSetIsChecked] = useState(false);
  const [seoCheck, seoSetIsChecked] = useState(false);
  const [gAdsCheck, gAdsSetIsChecked] = useState(false);
  useState(() => {
    if (storedWebCheck !== null) webSetIsChecked(JSON.parse(storedWebCheck));
    if (storedSeoCheck !== null) seoSetIsChecked(JSON.parse(storedSeoCheck));
    if (storedAdsCheck !== null) gAdsSetIsChecked(JSON.parse(storedAdsCheck));
  });
  const webChange = () => {
    webSetIsChecked(!webCheck);
    !webCheck
      ? localStorage.setItem("webChecked", true)
      : localStorage.setItem("webChecked", false);
  };
  const seoChange = () => {
    seoSetIsChecked(!seoCheck);
    !seoCheck
      ? localStorage.setItem("seoChecked", true)
      : localStorage.setItem("seoChecked", false);
  };
  const gAdsChange = () => {
    gAdsSetIsChecked(!gAdsCheck);
    !gAdsCheck
      ? localStorage.setItem("gAdsChecked", true)
      : localStorage.setItem("gAdsChecked", false);
  };

  //* FORMULARIO
  const [isToggled, setIsToggled] = useState(false);

  useState(() => {
    if (storedWebCheck !== null) setIsToggled(JSON.parse(storedWebCheck));
  });
  const [datos, setDatos] = useState({
    nPaginas: countP,
    nIdiomas: countI,
  });

  //* +PLUS -MINUS
  const handleInputChange = (event) => {
    event.target.name === "nPaginas"
      ? (countP = Number(event.target.value)) &&
        localStorage.setItem("nPaginas", event.target.value)
      : (countI = Number(event.target.value)) &&
        localStorage.setItem("nIdiomas", event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const sumar = (event) => {
    event.target.name === "nPaginas"
      ? (countP += 1) && localStorage.setItem("nPaginas", countP)
      : (countI += 1) && localStorage.setItem("nIdiomas", countI);
    setDatos({
      ...datos,
      [event.target.name]: event.target.name === "nPaginas" ? countP : countI,
    });
  };
  const restar = (event) => {
    event.target.name === "nPaginas"
      ? countP > 1
        ? (countP -= 1) && localStorage.setItem("nPaginas", countP)
        : (countP -= 0)
      : countI > 1
      ? (countI -= 1) && localStorage.setItem("nIdiomas", countI)
      : (countI -= 0);
    setDatos({
      ...datos,
      [event.target.name]: event.target.name === "nPaginas" ? countP : countI,
    });
  };

  //* GUARDAR PRESUPUESTO
  const [isTog, setIsTog] = useState(false);
  const save = () => {
    let preu =
      (webCheck && price + 500 + datos.nPaginas * datos.nIdiomas * 30) +
      (seoCheck && price + 300) +
      (gAdsCheck && price + 200);
    const pres = [
      {
        nombre: "",
        web: storedWebCheck,
        nPag: countP,
        nId: countI,
        consultorio: storedSeoCheck,
        ads: storedAdsCheck,
        precio: preu,
      },
    ];
    console.log(pres);
  };

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
        <DivSt>
          <p /> Número de pàginas &nbsp;
          <Button name="nPaginas" onClick={sumar}>
            +
          </Button>
          <InputSt
            type="number"
            className="form-control"
            name="nPaginas"
            value={datos.nPaginas}
            onChange={handleInputChange}
          ></InputSt>
          <Button name="nPaginas" onClick={restar}>
            -
          </Button>
          <Popup trigger={<Info>i</Info>} position="right center">
            <div>
              En este componente debe indicar el número de páginas que tendrá su
              sitio web
            </div>
          </Popup>
          <p /> Número de idiomas &nbsp;
          <Button name="nIdiomas" onClick={sumar}>
            +
          </Button>
          <InputSt
            type="number"
            className="form-control"
            name="nIdiomas"
            value={datos.nIdiomas}
            onChange={handleInputChange}
          ></InputSt>
          <Button name="nIdiomas" onClick={restar}>
            -
          </Button>
          <Popup trigger={<Info>i</Info>} position="right center">
            <div>
              En este componente debe indicar el número de idiomas que tendrá su
              sitio web
            </div>
          </Popup>
        </DivSt>
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
      <button onClick={() => setIsTog(!isTog)}>Guardar presupuesto</button>
      {isTog && (
        <div>
          <p>Escriba el nombre de su presupuesto</p>
          <input type="text"></input>
          <button onClick={save}>OK</button>
        </div>
      )}
    </div>
  );
}

// {gAdsCheck ? price + 200: price + 0}

//? Pedir nombre de presupuesto y cliente,
//? boton para añadir otro presupuesto,
//? enseñar todos los presupuestos en la derecha de la pantalla,
//? poner fecha en cada uno de esos presupuestos
//? poner tres botones arriba de la list, ordenar alfabeticamente, por fecha y por orden array
