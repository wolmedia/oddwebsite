import React, { useState } from "react";
import imagen1 from "../../../assets/img/figure/development_black.png";
import gif1 from "../../../assets/img/Gif/dev.gif";
import gif2 from "../../../assets/img/Gif/seo0.gif";
import gif3 from "../../../assets/img/Gif/tagg.gif"
import gif4 from "../../../assets/img/Gif/it0.gif"
import gif5 from "../../../assets/img/Gif/dig0.gif"
import gif6 from "../../../assets/img/Gif/atl0.gif"
import imagen2 from "../../../assets/img/figure/seo_black.png";
import imagen3 from "../../../assets/img/figure/tagging_black.png";
import imagen4 from "../../../assets/img/figure/it_black.png";
import imagen5 from "../../../assets/img/figure/digital_black.png";
import imagen6 from "../../../assets/img/figure/atl_black.png";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      id: 1,
      image: imagen1,
      gif: gif1,
      title: "DEVELOPMENT",
      paragraph:
        "Creamos soluciones tecnológicas a la medida, con amplia gama de soluciones, responsives sitios web con integraciones a e-comerce hasta implementando inteligencia artificial para impulsar negocios a niveles superiores adaptando soluciones integrales con CRM customizado.",
      link: "/Development",
      look: "style1",
    },
    {
      id: 2,
      image: imagen2,
      gif: gif2,
      title: "SEO",
      paragraph:
        "Nuestra estrategia de SEO nos permite alcanzar alto posicionamiento web en los motores de búsqueda, revelando mayor visibilidad y atrayendo a publco objetivo.",
      link: "https://ejemplo.com",
      look: "style2",
    },
    {
      id: 3,
      image: imagen3,
      gif: gif3,
      title: "TAGGING",
      paragraph:
        " Optimizamos la presencia on-line, desde palabras clave hasta tráfico, para mejorar el rendimiento de tu sitio web y aumentar tu visibilidad.",
      link: "https://ejemplo.com",
      look: "style3",
    },
    {
      id: 4,
      image: imagen4,
      gif: gif4,
      title: "IT",
      paragraph:
        "Brindamos soluciones con alcance para implementación de servidores, bases de datos, seguridad y asesoría de TI para potenciar negocios en la era digital.",
      link: "https://ejemplo.com",
      look: "style4",
    },
    {
      id: 5,
      image: imagen5,
      gif: gif5,
      title: "REPORTING DIGITAL",
      paragraph:
        "Analizamos y aprovechamos los datos digitales para mejorar conversiones, métricas y resultados en campañas, impulsando el crecimiento de marcas y activos digitales.",
      link: "https://ejemplo.com",
      look: "style5",
    },
    {
      id: 6,
      image: imagen6,
      gif: gif6,
      title: "REPORTING ATL",
      paragraph:
        "Convertimos información compleja en informes clara, versatil y comprensible, brindando una visión completa de medios y competencia de marca.",
      link: "https://ejemplo.com",
      look: "style6",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const visibleCards = data.slice(currentIndex, currentIndex + 3);
  const showNextButton = currentIndex < data.length - 0;

  return (
    <>
      <Container className="desktop">
        <Row className="justify-content">
          <div className="carousel_solutions ">
            <Col>
              <div className="card-container">
                {visibleCards.map((card) => (
                  <div className={card.look} key={card.id}>
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.paragraph}</p>
                    <a href={card.link}>Más información</a>
                  </div>
                ))}
              </div>
            </Col>
            <div className="navigation">
              <Col>
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                  <p className="Prev"></p>
                </button>
              </Col>

              {showNextButton && (
                <Col>
                  <button onClick={handleNext}>
                    <p className="Next"></p>
                  </button>
                </Col>
              )}
            </div>
          </div>
        </Row>
      </Container>

      <div className="mobile mt-10">
        <Carousel>
          {data.map((card) => (
            <Carousel.Item className={"mobile-gif"+card.id}>
              <div className="text-center">
                <img className={"image-mobile-principal"+" "+"mobile-gif"+card.id} src={card.gif} alt="gif" />
                <h2 className="title-mobile-principal">{card.title}</h2>
                <p className="paragraph-mobile-principal">{card.paragraph}</p>
                <button className="button-mobile-principal">Más información</button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Services;
