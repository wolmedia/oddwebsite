import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import shape  from '../../assets/img/Svg/shape.svg'




const Card = () => {
  return (
    <Container className='animate__animated animate__fadeInDownBig animate__delay-2s'>
        <Row lg={6} className='gap Cnt_card  '  >
        <Col>
    <div className="card">
      <div className="circle"><h1>+ 2</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2 >Proveedores de Infraestructura</h2>
      <div className="hidden-content">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
      </div>
    </div>
    </ Col>

    <Col>
    <div className="card">
      <div className="circle"><h1>+50</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2>Desarrollos Web</h2>
      <div className="hidden-content">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
      </div>
    </div>
    </ Col>

    <Col>
    <div className="card">
      <div className="circle"><h1>+10</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2>Servidores de DB</h2>
      <div className="hidden-content">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
      </div>
    </div>
    </ Col>

    <Col>
    <div className="card">
      <div className="circle"><h1>+15</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2>Soluciones</h2>
      <div className="hidden-content">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
      </div>
    </div>
    </ Col>

    <Col>
    <div className="card">
      <div className="circle"><h1>+15</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2>Automatizaciones</h2>
      <div className="hidden-content">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
      </div>
    </div>
    </ Col>

   

    </Row>
    
    
    </Container>
  );
}

export default Card;
