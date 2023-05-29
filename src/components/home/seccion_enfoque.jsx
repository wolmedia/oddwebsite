import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Circ from '../../assets/img/Gif/circ.gif'

function Enfoque (){
    return(

        <Container fluid className='section_enfoque bg_enfoque'>
         <Row className='sphera'>
         <img src={Circ} alt="Circulo" />
          </Row> 
        <Row>
          <Col>
          <div className='bullet'>
          •
          </div>
          </Col>
          <Col>
          <div className='title_odd_enfoque'>
		    <h1>enfoque odd</h1>
            </div>
          </Col>
          <Col>
          <div className='bullet'>
          •
          </div>
          </Col>

        </Row>
        <Row className='txt_odd_enfoque'>
          <p>Nos enfocamos en salir de lo convencional, en innovar</p>
          <p>constantemente para que nuestros clientes vean en nosotros un</p>
          <p>aliado estratégico en análisis de datos y desarrollo de</p> <p>soluciones.</p>
        </Row>
      
      </Container>





    );
}

export default Enfoque;