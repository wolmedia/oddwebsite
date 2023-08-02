import Container from 'react-bootstrap/Container';
import Banner from '../../components/Ddigital/banner'
import Ddigital from '../../components/Ddigital/Ddigitalsection'
import SolucionesDigitales from '../Ddigital/SolucionesDigital';
import Footer from '../../components/home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';
import Copy from '../../components/home/copy'





function PageDdigital (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <Ddigital />
      <SolucionesDigitales />
      <Dsection2 />
      <SliderDev />
      <Footer />
      <Copy />
      
      </Container>






    );
}

export default PageDdigital;