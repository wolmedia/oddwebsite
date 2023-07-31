
import React from 'react';
import LogoNavgar from '../../assets/img/footer/isotipo_odd.svg';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Navbar() {
  return (
    <Nav className='Navbar_odd'>
      
      <div className="navbar-logo">
      <a href="/">
      <img src ={LogoNavgar} alt="Logo"/>
        </a>

      </div>
      
      
      <ul className="navbar-links">
        <li><a  href="/">Quienes somos</a></li>
        <li><a href="/">Experiencia</a></li>
        {/* <li><a href="/Development">Soluciones</a>
        
        </li> */}
         <NavDropdown title="soluciones" className="navbar-language">
        
        <NavDropdown.Item href="/development"> development</NavDropdown.Item>
        <NavDropdown.Item href="/seo">seo</NavDropdown.Item>
        <NavDropdown.Item href="/tagging">tagging</NavDropdown.Item>
        <NavDropdown.Item href="/atl">atl</NavDropdown.Item>
        <NavDropdown.Item href="/data-digital">data digital</NavDropdown.Item>
        <NavDropdown.Item href="/ti">ti</NavDropdown.Item>



      
    </NavDropdown>
        <li><a href="/">Contactos</a></li>
      </ul>
      

      <NavDropdown title="español" className="navbar-language">
        
          <NavDropdown.Item value="en">English</NavDropdown.Item>
          <NavDropdown.Item value="es">Español</NavDropdown.Item>
        
      </NavDropdown>

    
    
    </Nav>
  );
}

export default Navbar;
