import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import '../styles/Header.css';
import logomiwacast from '../images/logomiwacast.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <header>
        <Navbar variant="dark" expand="lg">
          <Container>
            <div className="header-title">
              <Navbar.Brand href="#home"><img src={logomiwacast} alt="Logotipo Douglas" width="180px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">Podcast</Nav.Link>
                <Nav.Link href="#contact">Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
          </Container>
        </Navbar>

      </header>
    );
  }
}

export default Header;
