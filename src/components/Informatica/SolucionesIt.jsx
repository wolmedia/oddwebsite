import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Servidores from "../../assets/img/Informatica/servidores.webp";
import Bd from "../../assets/img/Informatica/bd.webp";
import Backups from "../../assets/img/Informatica/backups.webp";
import Firewall from "../../assets/img/Informatica/seguridad.webp";
import Soporte from "../../assets/img/Informatica/it.webp";
import Webservices from "../../assets/img/Informatica/webservice.webp";

function SolucionesIt() {
  return (
    <Container fluid className="SectionInformatica">
      <Row>
        <Col>
          <div className="title_odd_enfoque">
            <h1>
              {" "}
              <span className="bullet_dev">•</span> Soluciones{" "}
              <span className="bullet_dev">•</span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <p>Conoce las diferentes soluciones que colocamos a tu disposición</p>
      </Row>

      <div className="desktop">
        <Row lg={6} className=" Cnt_solutions">
          <Col xs={4} md={12}>
            <img src={Servidores} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Bd} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Backups} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Firewall} alt="Circulo" />
          </Col>
        </Row>

        <Row className=" Cnt_solutions">
          <Col xs={4} md={12}></Col>
          <Col xs={4} md={12}>
            <img src={Soporte} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Webservices} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}></Col>
        </Row>
      </div>

      <div className="mobile">
        <Row className=" Cnt_solutions">
          <Col xs={6} md={12}>
            <img src={Servidores} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Bd} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Backups} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Firewall} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Soporte} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Webservices} alt="Circulo" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SolucionesIt;
