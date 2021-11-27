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

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar')
    header.classList.toggle('header-scroll', window.scrollY > 0)
  })

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <div className="header-title">
          <Navbar.Brand href="/"><img src={logomiwacast} alt="Logotipo Douglas" width="150px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" id="opt" onClick={() => addBorder()}>Home</Nav.Link>
            <Nav.Link href="/#podcast" id="opt">Podcast</Nav.Link>
            <Nav.Link href="/episodios" id="opt">Episódios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
