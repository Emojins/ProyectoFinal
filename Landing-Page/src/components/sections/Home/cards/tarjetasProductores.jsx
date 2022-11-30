import React from "react";
import Card from "./tarjeta";

 //section productores
import image13 from "./imagesCards/productores/Big-One.png";
import image14 from './imagesCards/productores/Bizarrap.png'
import image15 from './imagesCards/productores/Diplo.png';
import image16 from './imagesCards/productores/PharrelWilliams.png';
import image17 from './imagesCards/productores/Timbaland.png';
import image18 from './imagesCards/productores/Skrillex.png';
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
    
    
function Productores() {
      return (
        <div className="productores">
                <div className="container d-flex justify-content-center align-items-center h-100" id="productores">
                <div className="row">
                  {productores.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                      <Card imageSource={image} title={title} url={url} />
                    </div>
                  ))}
                </div>
            </div> 
        </div>
           
      );
    }
    
export default Productores