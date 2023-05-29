
import './assets/main.css'
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import Slide from './components/home/slide';
import Enfoque from './components/home/seccion_enfoque';
import Btnodd from './components/_btnodd';
import Experiencia from './components/home/experiencia';
// import Navbarodd from './components/navbar/navbar'

function App() {
  return (
    <>
    {/* <Navbarodd />  */}
    <Slide />
    <Enfoque />
    <Btnodd />
    <Experiencia />


    
    </>
    
    
  );
}

export default App;
