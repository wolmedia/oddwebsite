import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Circ from '../../assets/img/Gif/circ.gif'


function Banner_Dev (){
    return(

    <Container fluid className='Dev_Banner' >
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

export default Banner_Dev;