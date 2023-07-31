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
      <Row>
      <div>
        <div>
        <p>
        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
        </p>
        
        </div>
      </div>
      </Row>
      </Container>






    );
}

export default Dsection3;