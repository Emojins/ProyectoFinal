import React from "react";
import Card from "./tarjeta";
 //section artistas

import image7 from "./imagesCards/artistas/AndresCalamaro.png";
import image8 from './imagesCards/artistas/GustavoCerati.png'
import image9 from './imagesCards/artistas/Residente.png'
import image10 from './imagesCards/artistas/FitoPaez.png'
import image11 from './imagesCards/artistas/PauloLondra.png';
import image12 from './imagesCards/artistas/TiagoPZK.png';
const artistas = [
  {
    id: 7,
    title: "Andrés Calamaro",
    image: image7,
    url: "#",
  },
  {
    id: 8,
    title: "Gustavo Cerati",
    image: image8,
    url: "#",
  },
  {
    id: 9,
    title: "Residente",
    image: image9,
    url: "#",
  },
  {
    id: 10,
    title: "Fito Paez",
    image: image10,
    url: "#",
  },
  {
    id: 11,
    title: "Paulo Londra",
    image: image11,
    url: "#",
  },
  {
    id: 12,
    title: "Tiago PZK",
    image: image12,
    url: "#",
  }
];



function Artistas() {
  return (
    <div className="artistas">
            {/*  section artistas */}

           <div className="container d-flex justify-content-center align-items-center h-100" id="artistas">
            <div className="row">
              {artistas.map(({ title, image, url, id }) => (
                <div className="col-md-4" key={id}>
                  <Card imageSource={image} title={title} url={url} />
                </div>
              ))}
            </div>
        </div> 

    </div>
  );
}

export default Artistas;