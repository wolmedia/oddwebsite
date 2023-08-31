import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImageDev from '../../assets/img/Dev/dev.webp'




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
        <Col xs={12} md={6} className='img_Dev'>
        <img src={ImageDev} alt="Circulo" />
        
        </Col>
        <Col xs={12} md={6}>
      
        <p className='Dev_p2'>
        En la Unidad de DevOps, nos enorgullecemos de ser el equipo de desarrollo creativo y versátil que transforma tus ideas en soluciones tecnológicas innovadoras. Desde el desarrollo de páginas web y landing pages hasta la implementación de chatbots, inteligencia artificial y realidad virtual, nuestro equipo de desarrolladores full stack trabaja de manera ágil y efectiva para brindarte productos a la medida de tus necesidades. Nuestra pasión por la innovación y la tecnología nos lleva a explorar constantemente nuevas herramientas y técnicas para ofrecerte soluciones a la vanguardia. Ya sea que necesite un comercio electrónico personalizado, un CRM o una aplicación móvil, estamos listos para dar vida a sus proyectos y llevar a cabo su negocio al siguiente nivel.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default Dsection1;