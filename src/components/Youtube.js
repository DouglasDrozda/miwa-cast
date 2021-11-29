import React, { useContext } from "react";
import MyContext from '../context/index';
import Loading from "./Loading";
import youtube from '../images/youtube.png'
import spotify from '../images/spotify.png'
import twitch from '../images/twitch.png'


function Youtube() {
  const { api, loading } = useContext(MyContext);

  const result = api.slice(0, 12)

  return (
    <section className="podcast-card-contain">
      {loading === true ? <Loading /> : result.map(({ id: { videoId }, snippet: { thumbnails, title, channelTitle, description } }) => (
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
      <div className="podcast-buttons-container">
        <a href="/episodios" className="button-page-episodes">VER MAIS...</a>
      </div>
    </section>
  );
}

export default Youtube;
