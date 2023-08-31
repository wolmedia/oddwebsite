import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImgInformatica from '../../assets/img/Informatica/ti.webp'




function InformaticaSection(){
    return(

    <Container fluid className='Section1_Dev' >
      <Row>
      <div>
        <div>
        <p>
       <strong>Brindamos servidores, bases de datos, seguridad y asesoría de TI</strong> para potenciar tu negocio en la era digital.
        </p>
        
        </div>
      </div>
      </Row>
      
      <Row>
        <Col xs={12} md={6} className='img_Dev'>
        <img src={ImgInformatica} alt="Circulo" />
        
        </Col>
        <Col xs={12} md={6}>
      
        <p className='Dev_p2'>
        Nuestra Unidad de TI es el pilar fundamental que impulsa el desarrollo tecnológico en todas las áreas de la empresa. Contamos con un equipo altamente capacitado en infraestructura, seguridad y servicios web para brindarte soluciones a medida que potencian tu negocio en la era digital. Desde la implementación de servidores cloud hasta la gestión de bases de datos y la seguridad de tu información, nos enfocamos en proporcionarte una infraestructura sólida y segura para asegurar el correcto funcionamiento y la confiabilidad de tus sistemas. Además, ofrecemos asesoramiento y soporte técnico para garantizar que su empresa esté siempre a la vanguardia tecnológica y pueda enfrentar cualquier desafío con éxito.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default InformaticaSection;