import React, { useContext } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";
import MyContext from '../context/index';


function Episodes() {
  const { loading, getPodcast } = useContext(MyContext);
  // console.log(loading, apiEps);
  return (
    <section className="podcast-container">
      <Header />
      <div className="podcast-sub-container">
        <div className="episodes-search">
          <SearchInput />
          <div>
          </div>
        </div>
        <div className="podcast-card-contain">
          {loading === true ? <Loading /> : getPodcast().map(({ id: { videoId }, snippet: { thumbnails, title, channelTitle, description } }) => (
            <div className="podcast-card-sub-contain" key={videoId}>
              <img src={thumbnails.high.url} alt={channelTitle} width="100%" />
              <div className="podcast-title">
                <h4>{title}</h4>
                <div>
                  <p>{description}</p>
                </div>
                <div className="podcast-buttons-container">
                  <a href={`https://www.youtube.com/watch?v=${videoId}`} className="podcast-buttons" target="_blank" rel="noreferrer">Youtube</a>
                  <a href="https://open.spotify.com/show/4i7myM2dBJMz60uVXLlPGg" className="podcast-buttons" target="_blank" rel="noreferrer">Spotify</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Episodes;


// : <h4>Ops, nenhum podcast encontrado com esse nome 😥</h4>