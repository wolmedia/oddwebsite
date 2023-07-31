import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Keyword from '../../assets/img/Seo/keywords.webp';
import Index from '../../assets/img/Seo/index.webp';
import Traffic from '../../assets/img/Seo/trafico.webp';
import LinkB from '../../assets/img/Seo/linkbuilding.webp';
import Performance from '../../assets/img/Seo/performance.webp';
import Optimization from '../../assets/img/Seo/optimizacion.webp';







function Solucionesdev(){
    return(

    <Container fluid className='Section2_Dev' >
      <Row>
          <Col>
          <div className='title_odd_enfoque'>
		    <h1>  <span className='bullet_dev'>•</span> Soluciones <span className='bullet_dev'>•</span></h1>
            </div>
          </Col>
      </Row>
      <Row>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
      </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        <img src={Keyword} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Index} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Traffic} alt="Circulo" />
        </ Col>
        <Col>
        <img src={LinkB} alt="Circulo" />
        </ Col>
    </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        
        </ Col>
        <Col>
        <img src={Performance} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Optimization} alt="Circulo" />
        </ Col>
        <Col>
        
        </ Col>
    </Row>

   
      </Container>






    );
}

export default Solucionesdev;