import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function Experiencia (){
    return(

        <Container fluid className='section_experiencia bg_experiencia'>
        <Row className='taggin'>
       
        

       
         </Row> 
       <Row>
         <Col>
         <div className='bullet_experiencia bg_bullet'>
         •
         </div>
         </Col>
         <Col>
         <div className='title_odd_enfoque'>
           <h1>experiencia y</h1>
           <h1>trayectoria</h1>
           </div>
         </Col>
         <Col>
         <div className='bullet_experiencia'>
         •
         </div>
         </Col>

       </Row>
       <Row className='txt_odd_experiencia'>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.s</p>
       </Row>
     
     </Container>






    );
}

export default Experiencia;