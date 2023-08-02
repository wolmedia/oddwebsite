import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Circ from '../../assets/img/Gif/circ.gif'


function Banner_Ddigital (){
    return(

    <Container fluid className='Digital_banner' >
      <div>
        <div>
        <Row className='sphera_dev'>
         <img src={Circ} alt="Circulo" />
          </Row> 
        </div>
      </div>
      </Container>






    );
}

export default Banner_Ddigital;