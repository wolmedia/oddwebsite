import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import shape  from '../../assets/img/Svg/shape.svg';
import 'animate.css';




const Card = () => {
  return (
    <Container className="animate__animated animate__backInDown animate__slower">
     
        <Row lg={6} className=' Cnt_card'  >
        <Col>
    <div className="card" >
      <div className="circle"><h1>+ 5</h1></div>
      <div className='shape'>
      <img src={shape} alt="Shape" />
      </div>
      <h2 >Infraestructura</h2>
      <div className="hidden-content">
        <p>Impulsamos la innovación protegiendo datos e información con nuestra sólida infraestructura en la nube. </p>
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
      <div className="circle"><h1>+25</h1></div>
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
