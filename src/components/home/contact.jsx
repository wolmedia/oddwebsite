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
      console.log(Form.current);
        console.log(result.text);
        Form.current.reset();
    }, (error) => {
        console.log(error.text);
        console.log(Form.current);
       

    });
};


function Contacto (){
    return(

        <Container fluid className='section_contact bg_contact' id="contact">
       
       <Row>
         <Col>
         <div className='bullet_contact'>
         •
         </div>
         </Col>
         <Col>
         <div className='title_odd_contact'>
           <h1 className='contacto'>Contacto</h1>
           
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
    <Col md={6}>
      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" required />
        <div className="invalid-feedback">
          Por favor, ingresa tu nombre.
        </div>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu apellido" name="apellido" required />
        <div className="invalid-feedback">
          Por favor, ingresa tu apellido.
        </div>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col md={6} lg={12}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          name="email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Ingresa un correo electrónico válido"
        />
        <div className="invalid-feedback">
          Por favor, ingresa un correo electrónico válido.
        </div>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col md={6} lg={12}>
      <Form.Group controlId="asunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el asunto" name="asunto" required />
        <div className="invalid-feedback">
          Por favor, ingresa el asunto.
        </div>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col md={6} lg={12}>
      <Form.Group controlId="mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Ingresa tu mensaje" name="mensaje" required />
        <div className="invalid-feedback">
          Por favor, ingresa tu mensaje.
        </div>
      </Form.Group>
    </Col>
  </Row>
  <Row className="justify-content-center btn_contact">
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Row>
</Form>


     
     </Container>

     






    );
}

export default Contacto;