import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Rectagle from '../../assets/img/Dev/rectangle.png'




function Dsection3(){
    return(

    <Container fluid className='Section3_Dev' >
      
      
      <Row>
        <Col className='img_rectangle'>
        <img src={Rectagle} alt="Circulo" />
        
        </Col>
        

      </Row>
      
      </Container>






    );
}

export default Dsection3;