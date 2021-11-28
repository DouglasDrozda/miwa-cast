import React, { useContext } from "react";
import MyContext from '../context/index';
import Loading from "./Loading";


function Youtube() {
  const { api, loading } = useContext(MyContext);

  const result = api.slice(0,12)

  return (
    <section className="podcast-card-contain">
      {loading === true ? <Loading /> : result.map(({ id: { videoId }, snippet: { thumbnails, title, channelTitle, description } }) => (
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
    </section>
  );
}

export default Youtube;
