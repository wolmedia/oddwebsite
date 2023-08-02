import Container from 'react-bootstrap/Container';
import Banner from '../../components/Atl/banner'
import AtlSection from '../../components/Atl/AtlSection'
import SolucionesAtl from '../Atl/SolucionesAtl';
import Footer from '../../components/home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';
import Copy from '../../components/home/copy'





function PageAtl (){
    return(

    <Container  fluid className='Cnt_btn'>
      <Banner />
      <AtlSection />
      <SolucionesAtl />
      <Dsection2 />
      <SliderDev />
      <Footer />
      <Copy />
      </Container>






    );
}

export default PageAtl;