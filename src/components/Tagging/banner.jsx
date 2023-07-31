import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Circ from '../../assets/img/Gif/circ.gif'


function BannerTagging (){
    return(
      <Container fluid className='Tag_Banner' >
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

export default BannerTagging;