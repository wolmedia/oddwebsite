import { Container, Row, Col  } from 'react-bootstrap';
import LogoFooter from '../../assets/img/footer/isotipo_odd.svg';
import fb from '../../assets/img/footer/fb.svg';
import IG from '../../assets/img/footer/ig.svg';
import In from '../../assets/img/footer/in.svg';
import Line from '../../assets/img/Gif/circ.gif'





function Footer (){
    return(

        <Container  className='section_footer bg_footer'>
       
       <Row>
       <Col>
       <div className="footer-logo">
       <img src ={LogoFooter} alt="Logo"/>
       </div>
       </Col>
       <Col>
       <div className="footer-sm">
       <img src ={fb} alt="Logo"/>
        <br></br>
       <img src ={IG} alt="Logo"/>
       <br></br>
       <img src ={In} alt="Logo"/>
       </div>

       </Col>
       </Row>
       <Row>
        <Col>
        <div className="footer-line">
       <img src ={Line} alt="Logo"/>
       </div>
        </Col>

       </Row>
       <Row >
        
        <Col className='direc'>
        <p>
        Dirección:
        <span>Guatemala, 5 Avenida 5-55. <br></br>
        Europlaza Torre IV Nivel 18, zona 14.</span>
        </p>
        </Col>
        

        <Col className='tel'>
        <p>
        
        Teléfono: (+502) <span>2382 2236 <br></br>
        Correo electrónico: <span>soluciones@odd.digital</span></span>
        </p>
        </Col>
       </Row>
      
      

       

       
     
     </Container>

     






    );
}

export default Footer;