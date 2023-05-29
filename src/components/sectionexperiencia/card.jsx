import React from 'react';
import { Container } from 'react-bootstrap';


const Card = () => {
  return (
    <Container>
    <div className="card">
      <div className="circle"><h1>+ 2</h1></div>
      <h2>Proveedores de Infraestructura</h2>
      <div className="hidden-content">
        <p>Contenido oculto</p>
      </div>
    </div>
    </Container>
  );
}

export default Card;
