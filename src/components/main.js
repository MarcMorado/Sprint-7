import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Info, DivLista, DivOrdre, BotOrdre } from "./styled";
import { Button } from "./styled";
import { InputSt } from "./styled";
import { DivSt } from "./styled";
import { SideBar } from "./styled";
import { SideBar2 } from "./styled";
import { MainDiv } from "./styled";
import "../style/style.css";
let price = 0;
const pres = [];
let array = [];
export default function Prices() {
  //! Getting localStorage
  const storedWebCheck = localStorage.getItem("webChecked");
  const storedSeoCheck = localStorage.getItem("seoChecked");
  const storedAdsCheck = localStorage.getItem("gAdsChecked");
  const storedPaginas = localStorage.getItem("nPaginas");
  const storedIdiomas = localStorage.getItem("nIdiomas");
  // const storedPresup = localStorage.getItem("Presupuestos");
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
  const [isTog1, setIsTog1] = useState(false);
  const [message, setMessage] = useState({
    nombre: "",
    nPres: "",
    buscar:''
  });
  const saveChanges = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  //?para que se actualize el cambio
  const [isChanging, setIsChanging] = useState(false);

  //*GUARDA LA LISTA
  const save = () => {
    setIsTog1(isTog, true);
    setIsChanging(!isChanging);
    let preu =
      (webCheck && price + 500 + datos.nPaginas * datos.nIdiomas * 30) +
      (seoCheck && price + 300) +
      (gAdsCheck && price + 200);
    let date = new Date().toISOString();
    pres.push({
      NomClient: message.nombre,
      NomPres: message.nPres,
      web: storedWebCheck,
      nPag: countP,
      nId: countI,
      consultorio: storedSeoCheck,
      ads: storedAdsCheck,
      precio: preu,
      date: date,
    });
    array = [...pres]
    localStorage.setItem("Presupuestos", JSON.stringify(pres))
  };

  const orderAlph = () => {
    const alph = [...pres];
    alph.sort((a,b)=>(a.NomPres>b.NomPres ? 1: -1));
    array = [...alph];
    setIsChanging(!isChanging);
  }
  
  const orderDate = () => {
    const orDate = [...pres];
    orDate.sort((a,b)=>(a.date>b.date ? 1: -1));
    array = [...orDate];
    setIsChanging(!isChanging);
  }

  const orderReset = () => {
    array = [...pres];
    setIsChanging(!isChanging);
  }

  const search = () => {
    array = pres.filter(item => item.NomPres === message.buscar)
    setIsChanging(!isChanging);
  }
  return (
    <MainDiv>
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
                En este componente debe indicar el número de páginas que tendrá
                su sitio web
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
                En este componente debe indicar el número de idiomas que tendrá
                su sitio web
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
            <p>Ompliu el espais per guardar les dades</p>
            <input
              type="text"
              name="nPres"
              onChange={saveChanges}
              placeholder="Nom del pressupost"
            ></input>
            <input
              type="text"
              name="nombre"
              onChange={saveChanges}
              placeholder="Client"
            ></input>
            <button onClick={save}>OK</button>
          </div>
        )}
      </div>
      <SideBar2>
        <SideBar>
          <h2>Pressupost</h2>
          <DivOrdre>
            <BotOrdre onClick={orderAlph}>Alfabèticament</BotOrdre>
            <BotOrdre onClick={orderDate}>Per data</BotOrdre>
            <BotOrdre onClick={orderReset}>Reinicialitzar l'ordre</BotOrdre>
          </DivOrdre>
          <input type='text' name='buscar' onChange={saveChanges} placeholder="buscar pressupost"></input>
          <button onClick={search}>Buscar</button>
          {isTog1 &&
            array.map((item, index) => {
              return (
                <DivLista key={index}>
                  <strong>Nom client:</strong> {item.NomClient}
                  <br />
                  <strong>Nom pressupost:</strong> {item.NomPres}
                  <br />
                  <strong>Preu:</strong> {item.precio}€
                  <br />
                  <strong>Data:</strong> {item.date}
                  <br />
                </DivLista>
              );
            })}
        </SideBar>
      </SideBar2>
    </MainDiv>
  );
}
