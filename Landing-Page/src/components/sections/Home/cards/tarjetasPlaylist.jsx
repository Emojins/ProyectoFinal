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


function Playlist() {
  return (
    <div className="cards">
       {/*  section playlist */}

        <div className="container d-flex justify-content-center align-items-center h-100" id="playlist">
          <div className="row">
            {playlist.map(({ title, image, url, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={image} title={title} url={url} />
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Playlist;