import React from "react";
import "./Residential.scss";
import data from "./data.json";
import Card from "../../Component/Card Viola/cardviola";
import Visala from "../../assets/GRC/Visala";
import Hangtuah from "../../assets/GRC/Hangtuah";
import Araya from "../../assets/GRC/Araya";
import Dharmawangsa from "../../assets/GRC/Dharmawangsa";
import Senopati from "../../assets/GRC/Senopati";
import Ruko from "../../assets/GRC/Ruko";

const imageMap = {
  Visala,
  Hangtuah,
  Araya,
  Dharmawangsa,
  Senopati,
  Ruko,
  // Add other image arrays here if you have more sets
};

const produk = () => {
  return (
    <div className="vireya">
      <div className="cardhome-containerf">
        {data.cards.map((card, index) => {
          // Determine the logo dynamically
          // Determine the logo dynamically
          return (
            <Card
              key={index}
              carousel={imageMap[card.imagesKey]}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              subprice={card.subprice}
              details={card.details}
              whatsappLink={card.whatsappLink} // Pass the WhatsApp link
            />
          );
        })}
      </div>
    </div>
  );
};

export default produk;
