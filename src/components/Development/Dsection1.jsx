import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImageDev from '../../assets/img/Dev/img.png'




function Dsection1(){
    return(

    <Container fluid className='Section1_Dev' >
      <Row>
      <div>
        <div>
        <p>
        <strong>“Creamos soluciones tecnológicas a medida</strong>, desde páginas web hasta inteligencia artificial, para llevar a cabo tu negocio al siguiente nivel”
        </p>
        
        </div>
      </div>
      </Row>
      
      <Row>
        <Col className='img_Dev'>
        <img src={ImageDev} alt="Circulo" />
        
        </Col>
        <Col>
        <h1>titular Dev</h1>
        <p className='Dev_p2'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default Dsection1;