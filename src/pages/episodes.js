import React, { useContext } from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MyContext from '../context/index';


function Episodes() {
  const { getPodcast } = useContext(MyContext);
  return (
    <section className="podcast-container">
      <Header />
      <div className="podcast-sub-container">
        <div className="episodes-search">
          {/* <h1>Convidados que passaram por aqui</h1> */}
            <SearchInput />
          <div>
          </div>
        </div>
        <div className="podcast-card-contain">
          {
            getPodcast().length > 0 ?
            Object.values(getPodcast()).map((card) => {
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
            : <h4>Ops, nenhum podcast encontrado com esse nome 😥</h4> }
        </div>
      </div>
    </section>
  );
}

export default Episodes;
