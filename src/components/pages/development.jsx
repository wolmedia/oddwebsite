import Container from 'react-bootstrap/Container';
import Banner from '../../components/Development/banner'
import Dsection1 from '../../components/Development/Dsection1'
import Solucionesdev from '../Development/SolucionesDev';



function PageDevelopment (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <Dsection1 />
      <Solucionesdev />
      </Container>






    );
}

export default PageDevelopment;