import React, { useState } from 'react';
import imagen1 from '../../../assets/img/figure/development_black.png';
import imagen2 from '../../../assets/img/figure/seo_black.png';
import imagen3 from '../../../assets/img/figure/tagging_black.png';
import imagen4 from '../../../assets/img/figure/it_black.png';
import imagen5 from '../../../assets/img/figure/digital_black.png';
import imagen6 from '../../../assets/img/figure/atl_black.png';
import { Container, Row } from 'react-bootstrap';









const Services = () => {



  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {

      id: 1,
      image: imagen1,
      title: 'DEVELOPMENT',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com'
    },
    {
      id: 2,
      image: imagen2,
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
    <div className="carousel">
      <div className="card-container">
        {visibleCards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.paragraph}</p>
            <a href={card.link}>Ir</a>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Anterior
        </button>
        {showNextButton && (
          <button onClick={handleNext}>
            Siguiente
          </button>
        )}
      </div>
    </div>
    </Row>
    </Container>
  );
};

export default Services;

