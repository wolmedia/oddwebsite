import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';




const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_m22let8', 'template_7z58ym9', Form.current, '2JK4Ze3XzYL-aq7kW')
    .then((result) => {
      swal({
        title: "¡Gracias!",
        text: "Nos pondremos en contacto contigo",
        icon: "https://odd.digital/circ.gif",
        button: "#Be Distinctive!",
        })
      // console.log(Form.current);
      //   console.log(result.text);
    }, (error) => {
        console.log(error.text);
        console.log(Form.current);

    });
};


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
      

       <Form className='form-container border-gradient-purple' ref={Form} onSubmit={sendEmail}>
        <Row>
          <Col>
            <Form.Group controlId="nombre">
              <Form.Label >Nombre</Form.Label>
              <input type="text" placeholder ="Ingresa tu nombre" name="nombre" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu apellido " name="apellido"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" name="email"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="asunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el asunto" name="asunto" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Ingresa tu mensaje" name="mensaje" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center btn_contact ">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Row>
      </Form>
     
     </Container>

     






    );
}

export default Contacto;