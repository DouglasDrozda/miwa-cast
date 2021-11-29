import React from "react";
import '../styles/Podcast.css';
// import podcasts from "../services/data";
import Youtube from "./Youtube";

function Podcast() {
  // let number = 0;
  // let limit = 12;

  return (
    <section className="podcast-container">
      <div id="podcast" className="podcast-sub-container">
        <h1>Convidados que passaram por aqui</h1>
        <div className="podcast-card-contain">
        </div>
        <Youtube />

      </div>
    </section>
  );
}

export default Podcast;
