import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Keyword from "../../assets/img/Seo/keywords.webp";
import Index from "../../assets/img/Seo/index.webp";
import Traffic from "../../assets/img/Seo/trafico.webp";
import LinkB from "../../assets/img/Seo/linkbuilding.webp";
import Performance from "../../assets/img/Seo/performance.webp";
import Optimization from "../../assets/img/Seo/optimizacion.webp";
import "animate.css";

function SolucionesSeo() {
  return (
    <Container fluid className="Section2_Seo">
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
        <Row
          lg={6}
          className=" Cnt_solutions animate__animated animate__backInDown animate__slower"
        >
          <Col xs={4} md={12}>
            <img src={Keyword} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Index} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Traffic} alt="Circulo" className="mtt-5" />
          </Col>
          <Col xs={4} md={12}>
            <img src={LinkB} alt="Circulo" className="mtt-5" />
          </Col>
        </Row>

        <Row
          lg={6}
          className=" Cnt_solutions animate__animated animate__backInDown animate__slower "
        >
          <Col></Col>
          <Col xs={4} md={12}>
            <img src={Performance} alt="Circulo" />
          </Col>
          <Col xs={4} md={12}>
            <img src={Optimization} alt="Circulo" />
          </Col>
          <Col></Col>
        </Row>
      </div>

      <div className="mobile">
        <Row
          className=" Cnt_solutions animate__animated animate__backInDown animate__slower"
        >
          <Col xs={6} md={12}>
            <img src={Keyword} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Index} alt="Circulo" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Traffic} alt="Circulo" className="mtt-5" />
          </Col>
          <Col xs={6} md={12}>
            <img src={LinkB} alt="Circulo" className="mtt-5" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Performance} alt="Circulo" className="mtt-5" />
          </Col>
          <Col xs={6} md={12}>
            <img src={Optimization} alt="Circulo" className="mtt-5" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SolucionesSeo;
