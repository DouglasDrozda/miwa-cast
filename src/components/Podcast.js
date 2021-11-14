import React from "react";
import '../styles/Podcast.css';
import podcasts from "../services/data";


function Podcast() {

  // const quantity = 2;
  // const twelveArray = podcasts.slice(0, quantity);
  // console.log(twelveArray);

  let number = 0;
  let limit = 12;

  return (
    <section className="podcast-container">
      <div className="podcast-sub-container">
        <h1>Convidados que passaram por aqui</h1>
        <div className="podcast-card-contain">
          {
            Object.values(podcasts).map((card) => {
              number += 1
              if (number <= limit) {
                return (
                  <div className="podcast-card-sub-contain" key={card.id}>
                    <img src={card.image} alt="card.title" width="100%" />
                    <div className="podcast-title">
                      <h4>{card.title}</h4>
                      <div>
                        <p>{card.description}</p>
                      </div>
                      <div className="podcast-buttons-container">
                        <a href={card.youtube} className="podcast-buttons" target="_blank" rel="noreferrer">Youtube</a>
                        <a href={card.spotify} className="podcast-buttons" target="_blank" rel="noreferrer">Spotify</a>
                      </div>
                    </div>
                  </div>
                )
              }
              return null;
            })
          }
          {/* <button>VER MAIS</button> */}
        </div>
      </div>
    </section>
  );
}

export default Podcast;
