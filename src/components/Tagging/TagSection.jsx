import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import ImageTag from '../../assets/img/Tagging/tag.webp'




function TagSection(){
    return(

    <Container fluid className='Section1_Dev' >
      <Row>
      <div>
        <div>
        <p>
        <strong>“Optimizamos tu presencia en línea</strong>, desde palabras clave hasta tráfico, para mejorar el rendimiento de tu sitio web y aumentar tu visibilidad”
        </p>
        
        </div>
      </div>
      </Row>
      
      <Row>
        <Col className='img_Dev'>
        <img src={ImageTag} alt="Circulo" />
        
        </Col>
        <Col>
      
        <p className='Dev_p2'>
        En la Unidad de Taggin, nuestro enfoque es garantizar que tu presencia en línea esté optimizada y que puedas obtener el máximo rendimiento de tus activos digitales. Nuestro equipo de especialistas verifica y audita tus sitios web para asegurar que estén funcionando correctamente y siguiendo las mejores prácticas. Desde la optimización de palabras clave y tráfico hasta el linkbuilding y el rendimiento general del sitio, nos aseguramos de que cada aspecto de tu presencia en línea esté en perfectas condiciones. Con nuestro enfoque en la calidad y la eficiencia, te proporcionamos las herramientas necesarias para maximizar el impacto de tu presencia en línea y lograr tus objetivos comerciales.
        </p>
        </Col>

      </Row>
      </Container>






    );
}

export default TagSection;