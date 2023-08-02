import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import FlashReport from '../../assets/img/Atl/flashreport.webp'
import ReporteCompe from '../../assets/img/Atl/competencia.webp'
import ConsumerLooker from '../../assets/img/Atl/consumerlook.webp'





function SolucionesAtl(){
    return(

    <Container fluid className='Section_Atl' >
      <Row>
          <Col>
          <div className='title_odd_enfoque'>
		    <h1>  <span className='bullet_dev'>•</span> Soluciones <span className='bullet_dev'>•</span></h1>
            </div>
          </Col>
      </Row>
      <Row>
        <p>
        Conoce las diferentes soluciones 
        que colocamos a tu disposición 
        </p>
      </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        
        </ Col>
        <Col>
        <img src={FlashReport} alt="Circulo" />
        </ Col>
        <Col>
        <img src={ReporteCompe} alt="Circulo" />
        </ Col>
        <Col>
        <img src={ConsumerLooker} alt="Circulo" />
        </ Col>
        <Col>
        
        </ Col>
    </Row>

    

    
      </Container>






    );
}

export default SolucionesAtl;