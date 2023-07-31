import Container from 'react-bootstrap/Container';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Row, Col} from 'react-bootstrap';

import SlideImag1 from '../../assets/img/Dev/slide1.png';
import SlideImag2 from '../../assets/img/Dev/slide2.png';






const Carouseldev = () => {



	
	return (
    <Container fluid className='Section4_Dev'>
        <Row>
      <div>
        <div>
        <p>
        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
        </p>
        
        </div>
      </div>

      <div>
      <Row>
          <Col>
          <div className='title_odd_enfoque'>
		    <h1>  <span className='bullet_dev'>•</span> Nuestros Clientes <span className='bullet_dev'>•</span></h1>
            </div>
          </Col>
      </Row>
      </div>
    
	  <Carousel>
        <div>
        <Row>
        <Col>
        <img src={SlideImag1} alt="SlideImag1" />
        </Col>
        <Col>
        <img src={SlideImag2} alt="SlideImag1" />
        </Col>
        
        </Row>
        </div>

        <div>
        <Row>
        <Col>
        <img src={SlideImag1} alt="SlideImag1" />
        </Col>
        <Col>
        <img src={SlideImag2} alt="SlideImag1" />
        </Col>
        
        </Row>
        </div>

     
      </Carousel>
      
      </Row>
      
      </Container>
	);
  };
  export default Carouseldev;


  