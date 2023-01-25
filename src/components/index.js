import React, { useState } from "react";

let price = 3;

export default function Prices() {
  const [webCheck, webSetIsChecked] = useState(false);
  const [seosCheck, seoSetIsChecked] = useState(false);
  const [gAdsCheck, gAdsSetIsChecked] = useState(false);
  const webChange = () => {
    webSetIsChecked(!webCheck);
  };
  const seoChange = () => {
    seoSetIsChecked(!seosCheck);
  };
  const gAdsChange = () => {
    gAdsSetIsChecked(!gAdsCheck);
  };
  return (
    <div>
      <h3>¿Qué quieres hacer?</h3>
      <input
        type="checkbox"
        value="web"
        checked={webCheck}
        onChange={webChange}
      />
      Una pàgina web (500€) <br />
      <input
        type="checkbox"
        value="seo"
        checked={seosCheck}
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
      <p>Preu: {price}€</p>
    </div>
  );
}

// {gAdsCheck ? price + 200: price + 0}
