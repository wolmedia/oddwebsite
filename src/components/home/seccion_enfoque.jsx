import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Circ from '../../assets/img/Gif/circ.gif'

function Enfoque (){
    return(

        <Container  className='section_enfoque bg_enfoque'>
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
          <p>La personalidad dinámica e innovadora de ODD nos impulsa a brindar soluciones tecnológicas vanguardistas, 
            nos retamos constantemente explorando nuevas tecnologías para ofrecer resultados excepcionales. Adaptamos nuestras soluciones 
            a necesidades específicas con disposición a solventar los desafios de manera dinámica y creativa que nuestros clientes requieren y necesitan, adaptado a cualquier tipo de negocio.</p>
        </Row>
      
      </Container>





    );
}

export default Enfoque;