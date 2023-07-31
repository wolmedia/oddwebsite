import Container from 'react-bootstrap/Container';
import Banner from '../../components/Development/banner'
import Dsection1 from '../../components/Development/Dsection1'
import Solucionesdev from '../Development/SolucionesDev';
import Footer from '../../components/home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';




function PageDevelopment (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <Dsection1 />
      <Solucionesdev />
      <Dsection2 />
      <SliderDev />
      <Footer />
      
      </Container>






    );
}

export default PageDevelopment;