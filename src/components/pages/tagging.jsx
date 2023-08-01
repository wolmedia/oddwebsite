import Container from 'react-bootstrap/Container';
import BannerTagging from '../../components/Tagging/banner'
import TagSection from '../../components/Tagging/TagSection'
import Solucionestagging from '../Tagging/solucionestagging'
import Footer from '../../components/home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';




function PageTagging (){
    return(

    <Container  fluid className='Cnt_btn'>
      <BannerTagging/>
      <TagSection />
      <Solucionestagging />
      <Dsection2 />
      <SliderDev />
      <Footer />
      
      </Container>






    );
}

export default PageTagging;