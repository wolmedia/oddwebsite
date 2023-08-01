import Container from 'react-bootstrap/Container';
import Banner from '../../components/Atl/banner'
import AtlSection from '../../components/Atl/AtlSection'
import Solucionesdev from '../Development/SolucionesDev';
import Footer from '../../components/home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';




function PageAtl (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <AtlSection />
      <Solucionesdev />
      <Dsection2 />
      <SliderDev />
      <Footer />
      
      </Container>






    );
}

export default PageAtl;