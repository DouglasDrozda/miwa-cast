import React from "react";
import Header from "../components/Header";
import podcasts from "../services/data";


function Episodes() {
  return (
    <section className="podcast-container">
      <Header />
      <div className="podcast-sub-container">
        <h1>Convidados que passaram por aqui</h1>
        <div className="podcast-card-contain">
          {
            Object.values(podcasts).map((card) => {
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
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Episodes;
