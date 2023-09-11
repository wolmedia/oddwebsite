import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import shape from "../../assets/img/Svg/shape.svg";
import "animate.css";

const Card = () => {
  return (
    <>
      <Container className="animate__animated animate__backInDown animate__slower desktop">
        <Row lg={6} className=" Cnt_card">
          <Col>
            <div className="card">
              <div className="circle">
                <h1>+ 5</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Servidores cloud</h2>
              <div className="hidden-content">
                <p>
                  Impulsamos la innovación protegiendo datos e información con
                  nuestra sólida infraestructura en la nube.{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card">
              <div className="circle">
                <h1>+30</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Clientes</h2>
              <div className="hidden-content">
                <p>
                  Nuestro éxito se basa en la confianza de nuestros clientes
                  para satisfacer sus necesidades tecnológicas.{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card">
              <div className="circle">
                <h1>+10</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Automatizaciones</h2>
              <div className="hidden-content">
                <p>
                  Optimizamos y automatizamos procesos empresariales,
                  permitiendo agilizar operaciones y mejor aprovechamiento de
                  tiempo en cualquier giro de negocio
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card">
              <div className="circle">
                <h1>+50</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Páginas Web</h2>
              <div className="hidden-content">
                <p>
                  {" "}
                  Diseñamos experiencias web atractivas y funcionales que
                  cautivan a usuarios generando resultados efectivos.
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card">
              <div className="circle">
                <h1>+15</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Soluciones</h2>
              <div className="hidden-content">
                <p>
                  Nuestra experiencia nos permite desarrollar soluciones
                  tecnológicas personalizadas que impulsan negocios hacia el
                  éxito.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="animate__animated animate__backInDown animate__slower mobile transfer o-mt">
        <Row>
          <Col xs={6}>
            <div className="card">
              <div className="circle">
                <h1>+ 5</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Servidores cloud</h2>
              <div className="hidden-content">
                <p>
                  Impulsamos la innovación protegiendo datos e información con
                  nuestra sólida infraestructura en la nube.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="card">
              <div className="circle">
                <h1>+30</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Clientes</h2>
              <div className="hidden-content">
                <p>
                  Nuestro éxito se basa en la confianza de nuestros clientes
                  para satisfacer sus necesidades tecnológicas.{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="card">
              <div className="circle">
                <h1>+10</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Automatizaciones</h2>
              <div className="hidden-content">
                <p>
                  Optimizamos y automatizamos procesos empresariales,
                  permitiendo agilizar operaciones y mejor aprovechamiento de
                  tiempo en cualquier giro de negocio
                </p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="card">
              <div className="circle">
                <h1>+50</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Páginas Web</h2>
              <div className="hidden-content">
                <p>
                  {" "}
                  Diseñamos experiencias web atractivas y funcionales que
                  cautivan a usuarios generando resultados efectivos.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="card">
              <div className="circle">
                <h1>+15</h1>
              </div>
              <div className="shape">
                <img src={shape} alt="Shape" />
              </div>
              <h2>Soluciones</h2>
              <div className="hidden-content">
                <p>
                  Nuestra experiencia nos permite desarrollar soluciones
                  tecnológicas personalizadas que impulsan negocios hacia el
                  éxito.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
