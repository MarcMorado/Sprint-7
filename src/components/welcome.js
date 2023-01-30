import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/style.css'

export default function WelcomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Home`;
    navigate(path);
  };

  return (
    <div>
      <h2>Diseño de Páginas Web</h2>
      <p>
        Diseñamos y desarrollamos{" "}
        <strong>
          páginas web atractivas, personalizadas y autogestionables.
        </strong>
        <br /> Si tu empresa no tiene presencia online o necesitas más clientes,
        nuestro servicio te interesa. Te ofrecemos un{" "}
        <strong>diseño web único y responsive</strong>, adaptado a dispositivos
        móviles, de fácil navegabilidad y usabilidad para conseguir los mejores
        resultados.
        <br /> Del mismo modo, si quieres vender por Internet, somos expertos en{" "}
        <strong>tiendas online.</strong> Construimos tu tienda online para que
        pongas
        <strong>
          tus productos en el mercado a disposición de tus clientes de la manera
          más cómoda, sencilla y flexible posible.
        </strong>{" "}
        <br /> Es el momento perfecto para reinventarte e invertir en el{" "}
        <strong>escaparate digital de tu empresa</strong>, tu página{" "}
        <strong>Web.</strong>
      </p>
      <button onClick={routeChange}>Home</button>
    </div>
  );
}
