import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImgSeo from '../../assets/img/Seo/seo.webp'




function SeoSection(){
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
        <Col className='img_Dev'>
        <img src={ImgSeo} alt="Circulo" />
        
        </Col>
        <Col>
      
        <p className='Dev_p2'>
        Nuestra Unidad de SEO se enfoca en mejorar la visibilidad y el posicionamiento de su empresa en los motores de búsqueda y plataformas digitales. Nuestro equipo de especialistas en SEO trabaja de manera proactiva para optimizar tu contenido, estructura y estrategias online, aumentando tu tráfico orgánico y descubriendo resultados duraderos. Desde la investigación de palabras clave y la optimización de contenido hasta la creación de enlaces y la mejora del rendimiento general del sitio, nos esforzamos por asegurar que tu empresa se destaque en línea. Con nuestro enfoque en la eficacia y el cumplimiento de las últimas tendencias de SEO, estamos listos para ayudarte a alcanzar un mayor reconocimiento de marca, aumentar tus conversiones y crecer en un mercado digital competitivo.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default SeoSection;