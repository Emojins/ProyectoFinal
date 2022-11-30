import React from "react";
import Card from "./tarjeta";

//section playlist
import image1 from "./imagesCards/playlist/chupac.jpg";
import image2 from './imagesCards/playlist/rock.jpg'
import image3 from './imagesCards/playlist/metal.jpg'
import image4 from './imagesCards/playlist/kpop.jpg'
import image5 from './imagesCards/playlist/trap.jpg'
import image6 from './imagesCards/playlist/regueton.jpg'
const playlist = [
  {
    id: 1,
    title: "Rap",
    image: image1,
    url: "#",
  },
  {
    id: 2,
    title: "Rock",
    image: image2,
    url: "#",
  },
  {
    id: 3,
    title: "Metal",
    image: image3,
    url: "#",
  },
  {
    id: 4,
    title: "K-pop",
    image: image4,
    url: "#",
  },
  {
    id: 5,
    title: "Trap",
    image: image5,
    url: "#",
  },
  {
    id: 6,
    title: "Reggaeton",
    image: image6,
    url: "#",
  }
];

/* //section artistas

import image7 from "./imagesCards/artistas/AndresCalamaro.jpg";
import image8 from './imagesCards/artistas/GustavoCerati.png'
import image9 from './imagesCards/artistas/Residente.jpg'
import image10 from './imagesCards/artistas/FitoPaez.jpg'
import image11 from './imagesCards/artistas/PauloLondra.jpg';
import image12 from './imagesCards/artistas/TiagoPZK.jpg';
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


//section productores
import image13 from "./imagesCards/productores/Big-One.jpg";
import image14 from './imagesCards/productores/Bizarrap.png'
import image15 from './imagesCards/productores/Diplo.jpg';
import image16 from './imagesCards/productores/PharrelWilliams.jpg';
import image17 from './imagesCards/productores/Timbaland.jpg';
import image18 from './imagesCards/productores/Skrillex.jpg';
const productores = [
  {
    id: 13,
    title: "Big One",
    image: image13,
    url: "#",
  },
  {
    id: 14,
    title: "Bizarrap",
    image: image14,
    url: "#",
  },
  {
    id: 15,
    title: "Diplo",
    image: image15,
    url: "#",
  },
  {
    id: 16,
    title: "Pharrel Williams",
    image: image16,
    url: "#",
  },
  {
    id: 17,
    title: "Timbaland",
    image: image17,
    url: "#",
  },
  {
    id: 18,
    title: "Skrillex",
    image: image18,
    url: "#",
  }
];
 */

function Cards() {
  return (
    <div className="cards">
       {/*  section playlist */}

        <div className="container d-flex justify-content-center align-items-center h-100" id="playlist">
          <div className="row">
            {playlist.map(({ title, image, url, id }) => (
              <div className="col-md-3" key={id}>
                <Card imageSource={image} title={title} url={url} />
              </div>
            ))}
          </div>
        </div>

            {/*  section artistas */}

        {/*   <div className="container d-flex justify-content-center align-items-center h-100" id="artistas">
            <div className="row">
              {artistas.map(({ title, image, url, id }) => (
                <div className="col-md-3" key={id}>
                  <Card imageSource={image} title={title} url={url} />
                </div>
              ))}
            </div>
        </div> */}

            {/*  section productores */}

         {/*  <div className="container d-flex justify-content-center align-items-center h-100" id="productores">
            <div className="row">
              {productores.map(({ title, image, url, id }) => (
                <div className="col-md-3" key={id}>
                  <Card imageSource={image} title={title} url={url} />
                </div>
              ))}
            </div>
        </div> */}
    </div>
  );
}

export default Cards;