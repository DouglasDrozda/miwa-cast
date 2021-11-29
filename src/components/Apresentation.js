import React from 'react';
import '../styles/Apresentation.css';
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';


function Apresentation() {
  return (
    <section className="apresentation-container">
      <div className="apresentation-sub-container">
        <div className="apresentation-title">
          <h1>Miwa Cast</h1>
          <div className="apresentation-text">
            <p>Seja bem-vindo ao MiwaCast, o podcast oficial do Surf.
              <br></br>
              A Miwa reúne seu próprio time trazendo toda semana
              convidados de peso para um bate papo descontraído
              sobre temas relacionados ao surf, cultura e esportes.</p>
          </div>
        </div>
        <div className="apresentation-icons-social">
          <a href="https://www.facebook.com/miwabeachclub/" rel="noreferrer" target="_blank">
            <FaFacebook className="logos-sociais" />
          </a>
          <a href="https://www.instagram.com/miwacast/" rel="noreferrer" target="_blank">
            <FaInstagram className="logos-sociais" />
          </a>
          <a href="https://www.youtube.com/c/MiwaBeachClub/featured" rel="noreferrer" target="_blank">
            <FaYoutube className="logos-sociais" />
          </a>
          <a href="https://open.spotify.com/show/4i7myM2dBJMz60uVXLlPGg" rel="noreferrer" target="_blank">
            <FaSpotify className="logos-sociais" />
          </a>
        </div>
        <div className="apresentation-hour">
          <p className="apresentation-thursday">TODA SEGUNDA ÀS 20:00H</p>
          <p className="apresentation-live">Ao vivo no Youtube</p>
        </div>
      </div>
    </section>
  );
}

export default Apresentation;