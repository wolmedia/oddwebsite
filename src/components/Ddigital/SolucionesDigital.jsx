import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Conversiones from "../../assets/img/Ddigital/conversiones.webp";
import Sesiones from "../../assets/img/Ddigital/sesiones.webp";
import Leads from "../../assets/img/Ddigital/leads.webp";
import Purchases from "../../assets/img/Ddigital/purchases.webp";
import Campaigns from "../../assets/img/Ddigital/campaigns.webp";
import Metricas from "../../assets/img/Ddigital/metricas.webp";
import Transacciones from "../../assets/img/Ddigital/transacciones.webp";

function SolucionesDigital() {
  return (
    <Container fluid className="SectionDigitial">
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
            <img src={Conversiones} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Sesiones} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Leads} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Purchases} alt="Circulo" />
          </Col>
        </Row>

        <Row lg={6} className=" Cnt_solutions">
          <Col xs={4} md={12}></Col>
          <Col xs={4} md={12}>
            <img src={Campaigns} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Metricas} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Transacciones} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}></Col>
        </Row>
      </div>

      <div className="mobile">
        <Row className=" Cnt_solutions">
          <Col xs={6} md={12}>
            <img src={Conversiones} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Sesiones} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Leads} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Purchases} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Campaigns} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Metricas} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Transacciones} alt="Circulo" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SolucionesDigital;
