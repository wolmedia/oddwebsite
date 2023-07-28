import Slide from '../../components/home/slide';
import Enfoque from '../../components/home/seccion_enfoque';
import Btnodd from '../../components/_btnodd';
import Experiencia from '../../components/home/experiencia';
import Card from '../../components/sectionexperiencia/card';
import Btnsee from '../../components/home/btn/_btn';
import Services from '../../components/home/section_services/services';
import Contacto from '../../components/home/contact';
import Footer from '../../components/home/footer';
import Copy from '../../components/home/copy';



export default function Inicio() {
  return (
    <div>
    <Slide  />
    <Enfoque />
    <Btnodd />
    <Experiencia />
    <Card />
    <Btnsee />
    <Services />
    <Contacto />
    <Footer />
    <Copy />
    
    </div>
  )
}
