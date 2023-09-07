import React from "react";
import LogoNavgar from "../../assets/img/footer/isotipo_odd.svg";
import Nav from "react-bootstrap/Nav";
import NavbarGeneral from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <NavbarGeneral collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarGeneral.Brand href="#home">
          <a href="/">
            <img  className="logo-navbar" src={LogoNavgar} alt="Logo" />
          </a>
        </NavbarGeneral.Brand>
        <NavbarGeneral.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarGeneral.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Quienes Somos</Nav.Link>
            <Nav.Link href="#pricing">Experiencia</Nav.Link>
            <NavDropdown title="Soluciones" id="collasible-nav-dropdown" className="navbar-language">
              <NavDropdown.Item href="/development">
                development
              </NavDropdown.Item>
              <NavDropdown.Item href="/seo">seo</NavDropdown.Item>
              <NavDropdown.Item href="/tagging">tagging</NavDropdown.Item>
              <NavDropdown.Item href="/atl">atl</NavDropdown.Item>
              <NavDropdown.Item href="/data-digital">
                data digital
              </NavDropdown.Item>
              <NavDropdown.Item href="/informatica">ti</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="español" className="navbar-language">
              <NavDropdown.Item value="en">English</NavDropdown.Item>
              <NavDropdown.Item value="es">Español</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarGeneral.Collapse>
      </Container>
    </NavbarGeneral>
  );
}

export default Navbar;
