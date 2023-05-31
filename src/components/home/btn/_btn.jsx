import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Btnsee (){
    return(

    <Container className='Cnt_btn_see'>
      <Row>
      <Col></Col>
   
      <Col className='Cnt_btn_see'>
      <Button className='btn_oddsee gradient-border'>Ver más</Button> 
      </Col>
      <Col></Col>
    
       </Row>
      </Container>






    );
}

export default Btnsee;