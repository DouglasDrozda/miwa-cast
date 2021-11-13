import React from 'react';
import '../styles/Header.css';
import logomiwacast from '../images/logomiwacast.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {

  const addBorder = () => {
    const button = document.querySelector('#opt')
    button.addEventListener('click', (event) => {
      event.target.classList.toggle('teste')
    })
  }

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <div className="header-title">
          <Navbar.Brand href="#home"><img src={logomiwacast} alt="Logotipo Douglas" width="180px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="opt" onClick={() => addBorder()}>Home</Nav.Link>
            <Nav.Link href="#about" id="opt">Podcast</Nav.Link>
            <Nav.Link href="#contact" id="opt">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
