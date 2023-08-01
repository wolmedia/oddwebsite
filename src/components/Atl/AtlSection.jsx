import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImgAtl from '../../assets/img/Atl/atl.webp'




function AtlSection(){
    return(

    <Container fluid className='Section1_Dev' >
      <Row>
      <div>
        <div>
        <p>
        <strong>“Convertimos información compleja en informes claros y comprensibles</strong>, brindándote una visión completa de tus medios y competencia”
        </p>
        
        </div>
      </div>
      </Row>
      
      <Row>
        <Col className='img_Dev'>
        <img src={ImgAtl} alt="Circulo" />
        
        </Col>
        <Col>
      
        <p className='Dev_p2'>
        Nuestra Unidad de ATL Data Manage se especializa en el análisis de sistemas ortodoxos y cliente-servidor, requiere una visión completa de sus medios y competencia. A través de reportes y dashboards personalizados, te ofrecemos una visión clara y detallada del rendimiento de tus anuncios en medios tradicionales. También analizamos la competencia y tu categoría en un periodo determinado para que puedas tomar decisiones informadas y mejorar tu posicionamiento en el mercado. Nuestro enfoque en la visualización y comprensión de la información te permite acceder a datos estratégicos y relevantes para tu negocio, lo que te ayudará a una ventaja competitiva y alcanzar tus objetivos comerciales.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default AtlSection;