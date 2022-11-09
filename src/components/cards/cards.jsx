import React from "react";
import Card from "./card";

import image1 from "../../assets/images/section1.jpg";
import image2 from '../../assets/images/rock.jpg'
import image3 from '../../assets/images/metal.jpg'
import image4 from '../../assets/images/kpop.jpg'
import image5 from '../../assets/images/section3.jpg'
import image6 from '../../assets/images/regueton.jpg'
import image7 from '../../assets/images/trap.jpg'
import image8 from '../../assets/images/chupac.jpg'
const cards = [
  {
    id: 1,
    title: "Pop",
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
    title: "Jazz",
    image: image5,
    url: "#",
  },
  {
    id: 6,
    title: "Reggaeton",
    image: image6,
    url: "#",
  },
  {
    id: 7,
    title: "Trap",
    image: image7,
    url: "#",
  },
  {
    id: 8,
    title: "Rap",
    image: image8,
    url: "#",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;