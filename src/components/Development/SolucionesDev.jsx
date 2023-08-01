import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Crm from '../../assets/img/Dev/crm.webp'
import Website from '../../assets/img/Dev/website.webp'
import Landing from '../../assets/img/Dev/landingpage.webp'
import Ecommerce from '../../assets/img/Dev/ecommerce.webp'
import ML from '../../assets/img/Dev/machinelearning.webp'
import Ar from '../../assets/img/Dev/ar.webp'
import Webmaster from '../../assets/img/Dev/webmaster.webp'
import Apps from '../../assets/img/Dev/webmaster.webp'
import Chatbot from '../../assets/img/Dev/chatbot.webp'
import IA from '../../assets/img/Dev/ai.webp'
import Vr from '../../assets/img/Dev/rv.webp'
import Minijuegos from '../../assets/img/Dev/juegos.webp'


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
        Conoce las diferentes soluciones 
        que colocamos a tu disposición 
        </p>
      </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        <img src={Crm} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Website} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Landing} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Ecommerce} alt="Circulo" />
        </ Col>
    </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        <img src={ML} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Ar} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Webmaster} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Apps} alt="Circulo" />
        </ Col>
    </Row>

    <Row lg={6} className=' Cnt_solutions' >
        <Col>
        <img src={Chatbot} alt="Circulo" />
        </ Col>
        <Col>
        <img src={IA} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Vr} alt="Circulo" />
        </ Col>
        <Col>
        <img src={Minijuegos} alt="Circulo" />
        </ Col>
    </Row>
      </Container>






    );
}

export default Solucionesdev;