import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Btnodd (){
    return(

    <Container className='Cnt_btn'>
      <Row>
      <Col></Col>
   
      <Col className='Cnt_btn'>
      <Button className='btn_odd gradient-border'>Conoce más</Button> 
      </Col>
      <Col></Col>
    
       </Row>
      </Container>






    );
}

export default Btnodd;