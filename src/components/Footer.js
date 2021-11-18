import React from 'react';
import '../styles/Footer.css';
import logoDouglas from '../images/logoDouglas.png'
import logomiwacast from '../images/logomiwacast.png'


class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-sub-container">
          <div>
            <img src={logomiwacast} alt="Logotipo Douglas" width="120px" />
          </div>
          <div className="footer-miwa">
            <p>Miwa Cast © 2021 Todos os direitos Reservados.</p>
          </div>
          <div className="footer-development">
            <p>Desenvolvido por</p>
            <a href="https://www.linkedin.com/in/douglasdrozda/" rel="noreferrer" target="_blank"><img src={logoDouglas} alt="logoDouglas" width="130px"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
