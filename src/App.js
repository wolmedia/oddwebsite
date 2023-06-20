
import './assets/main.css'
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import Slide from './components/home/slide';
import Enfoque from './components/home/seccion_enfoque';
import Btnodd from './components/_btnodd';
import Experiencia from './components/home/experiencia';
import  Card from './components/sectionexperiencia/card';
import Services from './components/home/section_services/services';
import Navbarodd from './components/navbar/navbar'
import Btnsee from './components/home/btn/_btn';
import Contacto from './components/home/contact';
import Footer from './components/home/footer';
import Copy from './components/home/copy';
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";




function App() {
  return (
    <>
    <Navbarodd /> 
    <Slide />
    <Enfoque />
    <Btnodd />
    <Experiencia />
    <Card />
    <Btnsee />
    <Services />
    <Contacto />
    <Footer />
    <Copy />
    <Chatbot 
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    />
    


    
    </>
    
    
  );
}

export default App;
