import React, { useContext } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";
import MyContext from '../context/index';
import youtube from '../images/youtube.png'
import spotify from '../images/spotify.png'
import twitch from '../images/twitch.png'


function Episodes() {
  const { loading, getPodcast } = useContext(MyContext);

  return (
    <section className="podcast-container">
      <Header />
      <div className="podcast-sub-container">
        <div className="episodes-search">
          <SearchInput />
        </div>
        <div className="podcast-card-contain">
          {loading === true ? <Loading /> : getPodcast().map(({ id: { videoId }, snippet: { thumbnails, title, channelTitle, description } }) => (
            <div className="podcast-card-sub-contain" key={videoId}>
              <img src={thumbnails.high.url} alt={channelTitle} width="100%" />
              <div className="podcast-title">
                <h4>{title}</h4>
                <div className="podcast-description">
                  <p>{description}</p>
                </div>
                <div className="podcast-buttons-container">
                  <a href={`https://www.youtube.com/watch?v=${videoId}`} id="youtube" className="podcast-buttons" target="_blank" rel="noreferrer"><img src={youtube} alt="logo-youtube" className="logos" />Youtube</a>
                  <a href="https://open.spotify.com/show/4i7myM2dBJMz60uVXLlPGg" id="spotify" className="podcast-buttons" target="_blank" rel="noreferrer"><img src={spotify} alt="logo-spotify" className="logos" />Spotify</a>
                  <a href="https://www.twitch.tv/miwacast" id="twitch" className="podcast-buttons" target="_blank" rel="noreferrer"><img src={twitch} alt="logo-twitch" className="logos" />Twitch</a>
                </div>
              </div>
            </div>
          ))}
          {getPodcast().length === 0 && !loading ? (<h4>Ops, nenhum podcast encontrado com esse nome 😥</h4>) : null}
        </div>
        {/* <div className="podcast-buttons-container">
          <button className="button-page-episodes" onClick={() => fetchAPI()}>CARREGAR MAIS...</button>
        </div> */}
      </div>
    </section>
  );
}

export default Episodes;
