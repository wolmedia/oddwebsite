import React, { useState } from 'react';
import imagen1 from '../../../assets/img/figure/development_black.png';
import gif1 from '../../../assets/img/Gif/dev.gif';
import imagen2 from '../../../assets/img/figure/seo_black.png';
import gif2 from '../../../assets/img/Gif/seo0.gif';
import imagen3 from '../../../assets/img/figure/tagging_black.png';
import imagen4 from '../../../assets/img/figure/it_black.png';
import imagen5 from '../../../assets/img/figure/digital_black.png';
import imagen6 from '../../../assets/img/figure/atl_black.png';
import { Container, Row,Col } from 'react-bootstrap';



const Services = () => {



  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {

      id: 1,
      image: imagen1,
      gif: gif1,
      title: 'DEVELOPMENT',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style1'
    },
    {
      id: 2,
      image: imagen2,
      gif: gif2,
      title: 'SEO',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style2'

    },
    {
      id: 3,
      image: imagen3,
      title: 'TAGGING',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style3'

    },
    {
      id: 4,
      image: imagen4,
      title: 'IT',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style4'

    },
    {
      id: 5,
      image: imagen5,
      title: 'REPORTING DIGITAL',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style5'

    },
    {
      id: 6,
      image: imagen6,
      title: 'REPORTING ATL',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      link: 'https://ejemplo.com',
      look: 'style6'

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
        
        <div className="carousel_solutions">
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
              <p></p>
            </button>
            </Col> 

            {showNextButton && (

              <Col>
              <button onClick={handleNext}>
              <p></p>

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

