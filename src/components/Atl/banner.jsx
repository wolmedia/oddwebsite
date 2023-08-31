import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Circ from '../../assets/img/Gif/circ.gif'


function Banner_Atl (){
    return(

    <Container fluid className='Atl_banner' >
      <div>
        <div>
        <Row className='sphera_dev'>
         <img className='sphera_dev_mobile'  src={Circ} alt="Circulo" />
          </Row> 
        </div>
      </div>
      </Container>






    );
}

export default Banner_Atl;