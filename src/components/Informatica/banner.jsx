import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Circ from '../../assets/img/Gif/circ.gif'


function Banner_Informatica (){
    return(

    <Container fluid className='Informatica_banner' >
      <div>
        <div>
        <Row className='sphera_dev'>
         <img className='sphera_dev_mobile' src={Circ} alt="Circulo" />
          </Row> 
        </div>
      </div>
      </Container>






    );
}

export default Banner_Informatica;