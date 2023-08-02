import Container from 'react-bootstrap/Container';
import Banner from '../Informatica/banner'
import SecInformatica from '../Informatica/SecInformatica'
import SolucionesIt from '../Informatica/SolucionesIt';
import Footer from '../home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';
import Copy from '../../components/home/copy'





function PageInformatica (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <SecInformatica />
      <SolucionesIt />
      <Dsection2 />
      <SliderDev />
      <Footer />
      <Copy />
      
      </Container>






    );
}

export default PageInformatica;