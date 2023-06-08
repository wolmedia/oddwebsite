import { Container, Row, Col, Form, Button } from 'react-bootstrap';




function Contacto (){
    return(

        <Container fluid className='section_contact bg_contact'>
       
       <Row>
         <Col>
         <div className='bullet_contact'>
         •
         </div>
         </Col>
         <Col>
         <div className='title_odd_contact'>
           <h1>Contacto</h1>
           
           </div>
         </Col>
         <Col>
         <div className='bullet_contact'>
         •
         </div>
         </Col>

       </Row>
      

       <Form className='form-container'>
        <Row>
          <Col>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="asunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el asunto" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Ingresa tu mensaje" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Row>
      </Form>
     
     </Container>

     






    );
}

export default Contacto;