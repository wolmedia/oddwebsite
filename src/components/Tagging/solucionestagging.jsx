import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Landing from '../../assets/img/Tagging/landingpages.webp'
import Form from '../../assets/img/Tagging/formularios.webp'
import Eventos from '../../assets/img/Tagging/formularios.webp'
import Pixel from '../../assets/img/Tagging/formularios.webp'
import Ecommerce from '../../assets/img/Tagging/ecommerce.webp'







function Solucionestagging(){
    return(

    <Container fluid className='Section_tagging' >
      <Row>
          <Col>
          <div className='title_odd_enfoque'>
		    <h1>  <span className='bullet_dev'>•</span> Soluciones <span className='bullet_dev'>•</span></h1>
            </div>
          </Col>
      </Row>
      <Row>
        <p>
        Conoce las diferentes soluciones que colocamos a tu disposición
        </p>
      </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        <img src={Landing} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Form} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Eventos} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Pixel} alt="Circulo" />
        </ Col>
    </Row>
    
    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        
        </ Col>
        <Col>
        
        </ Col>
        <Col>
        <img src={Ecommerce} alt="Circulo" />
        </ Col>
        <Col>
        
        </ Col>
        <Col>
        
        </ Col>
    </Row>

   

   
      </Container>






    );
}

export default Solucionestagging;