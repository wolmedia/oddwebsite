import Container from 'react-bootstrap/Container';
import BannerSeo from '../Seo/banner'
import SeoSection from '../Seo/SectionSeo';
import SolucionesSeo from '../Seo/SolucionesSeo';
import Footer from '../home/footer'
import Dsection2 from '../Development/Dsection2';
import SliderDev from '../Development/Sliderdev';
import Copy from '../home/copy'





function Seo (){
    return(

    <Container  fluid >
      <BannerSeo />
      <SeoSection />
      <SolucionesSeo />
      <Dsection2 />
      <SliderDev />
      <Footer />
      <Copy />
      
      </Container>






    );
}

export default Seo;