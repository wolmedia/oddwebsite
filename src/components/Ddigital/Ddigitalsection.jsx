import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImgDigital from '../../assets/img/Ddigital/data.webp'




function DdigitalSection(){
    return(

    <Container fluid className='Section1_Dev' >
      <Row>
      <div>
        <div>
        <p>
        <strong>“Nuestra estrategia de SEO te posiciona en los primeros lugares de los motores de búsqueda</strong>, revelando mayor visibilidad y 
        atrayendo a tu objetivo público”
        </p>
        
        </div>
      </div>
      </Row>
      
      <Row>
        <Col xs={12} md={6} className='img_Dev'>
        <img src={ImgDigital} alt="Circulo" />
        
        </Col>
        <Col xs={12} md={6}>
      
        <p className='Dev_p2'>
        En la Unidad de First Party Data, nos dedicamos a analizar, interpretar y aprovechar los datos digitales generados por su empresa en diversas plataformas. Nuestro equipo de expertos en análisis de datos y campañas digitales se enfoca en brindarle información valiosa para mejorar sus conversiones, análisis, clientes potenciales, compras y métricas en general. Trabajamos con datos tanto orgánicos como publicitarios, y utilizamos API, JSON y otras conexiones para recopilar y procesar la información relevante. Nuestra pasión por entender tus necesidades y objetivos comerciales nos lleva a ofrecerte estrategias personalizadas y efectivas que te ayudarán a alcanzar el éxito en un mundo digital en constante cambio.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default DdigitalSection;