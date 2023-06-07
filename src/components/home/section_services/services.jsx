import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import imagen1 from '../../../assets/img/figure/development_black.png';
import gif1 from '../../../assets/img/Gif/tria 2.gif';
import imagen2 from '../../../assets/img/figure/seo_black.png';
import gif2 from '../../../assets/img/Gif/seo0.gif';
import imagen3 from '../../../assets/img/figure/tagging_black.png';
import imagen4 from '../../../assets/img/figure/it_black.png';
import imagen5 from '../../../assets/img/figure/digital_black.png';
import imagen6 from '../../../assets/img/figure/atl_black.png';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      id: 1,
      image: imagen1,
      gif: gif1,
      title: 'DEVELOPMENT',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 2,
      image: imagen2,
      gif: gif2,
      title: 'SEO',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 3,
      image: imagen3,
      title: 'TAGGING',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 4,
      image: imagen4,
      title: 'IT',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 5,
      image: imagen5,
      title: 'REPORTING DIGITAL',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 6,
      image: imagen6,
      title: 'REPORTING ATL',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    }
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
  const showNextButton = currentIndex < data.length - 3;

  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="carousel_solution">
          <Col>
            <Carousel
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              emulateTouch
              swipeable
            >
              {visibleCards.map((card) => (
                <div className="boxes" key={card.id}>
                  <img src={card.image} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.paragraph}</p>
                  <a href={card.link}>Ir</a>
                </div>
              ))}
            </Carousel>
          </Col>
          <div className="navigation_arrow">
            <Col>
              <button
                className="carousel-navigation-btn"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <BsChevronLeft />
              </button>
            </Col>
            {showNextButton && (
              <Col>
                <button
                  className="carousel-navigation-btn"
                  onClick={handleNext}
                >
                  <BsChevronRight />
                </button>
              </Col>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Services;
