import React from "react";
import LogoNavgar from "../../assets/img/footer/isotipo_odd.svg";
import Nav from "react-bootstrap/Nav";
import NavbarGeneral from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Nav className="Navbar_odd desktop-flex">
        <div className="navbar-logo">
          <a href="/">
            <img src={LogoNavgar} alt="Logo" />
          </a>
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#enfoque">Quienes somos</a>
          </li>
          <li>
            <a href="#exp">Experiencia</a>
          </li>
          {/* <li><a href="/Development">Soluciones</a>
        
        </li> */}
          <NavDropdown title="soluciones" className="navbar-language">
            <NavDropdown.Item >
            <Link to="/development">Development</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to="/seo">Seo</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
            <Link to="/tagging">Tagging</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
            <Link to="/atl">ATL</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/data-digital">
            <Link to="/data-digital">data digital</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
            <Link to="/informatica">TI</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <li>
            
            <Link to="#contact">Contacto</Link>
            
          </li>
        </ul>

        <NavDropdown title="español" className="navbar-language">
          <NavDropdown.Item value="en">English</NavDropdown.Item>
          <NavDropdown.Item value="es">Español</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <NavbarGeneral collapseOnSelect expand="lg" className="bg-body-tertiary mobile">
        <Container>
          <NavbarGeneral.Brand href="#home">
            <a href="/">
              <img className="logo-navbar" src={LogoNavgar} alt="Logo" />
            </a>
          </NavbarGeneral.Brand>
          <NavbarGeneral.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarGeneral.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#enfoque">Quienes Somos</Nav.Link>
              <Nav.Link href="#exp">Experiencia</Nav.Link>
              <NavDropdown
                title="Soluciones"
                id="collasible-nav-dropdown"
                className="navbar-language"
              >
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
    </>
  );
}

export default Navbar;
