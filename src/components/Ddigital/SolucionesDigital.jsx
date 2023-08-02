import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Conversiones from '../../assets/img/Ddigital/conversiones.webp'
import Sesiones from '../../assets/img/Ddigital/sesiones.webp'
import Leads from '../../assets/img/Ddigital/leads.webp'
import Purchases from '../../assets/img/Ddigital/purchases.webp'
import Campaigns from '../../assets/img/Ddigital/campaigns.webp'
import Metricas from '../../assets/img/Ddigital/metricas.webp'
import Transacciones from '../../assets/img/Ddigital/transacciones.webp'



function SolucionesDigital(){
    return(

    <Container fluid className='SectionDigitial' >
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
        <img src={Conversiones} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Sesiones} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Leads} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Purchases} alt="Circulo" />
        </ Col>
    </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
       
        </ Col>
        <Col>
        <img src={Campaigns} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Metricas} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Transacciones} alt="Circulo" />
        </ Col>
        <Col>
        
        </ Col>
    </Row>

    
      </Container>






    );
}

export default SolucionesDigital;