import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardSlider = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Tarjeta 1',
      image: '../../../assets/img/figure/development_black.png',
      description: 'Descripción de la tarjeta 1',
      url: 'https://www.example.com'
    },
    {
      id: 2,
      title: 'Tarjeta 2',
      image: 'imagen2.jpg',
      description: 'Descripción de la tarjeta 2',
      url: 'https://www.example.com'
    },
    {
      id: 3,
      title: 'Tarjeta 3',
      image: 'imagen3.jpg',
      description: 'Descripción de la tarjeta 3',
      url: 'https://www.example.com'
    }
  ]);

  const [visibleCards, setVisibleCards] = useState(3);

  const handleHover = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          isHovered: true
        };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleMouseOut = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          isHovered: false
        };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleNext = () => {
    setVisibleCards(visibleCards + 1);
  };

  const handlePrev = () => {
    setVisibleCards(visibleCards - 1);
  };

  return (
    <Container >
      <div className="card-slider">
        <div className="slider-container">
          <div className="card-wrapper" style={{ transform: `translateX(-${(visibleCards - 3) * 33.33}%)` }}>
            {cards.map((card) => (
              <Card
                key={card.id}
                className={`card ${card.isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => handleHover(card.id)}
                onMouseLeave={() => handleMouseOut(card.id)}
              >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button href={card.url} variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <div className="slider-controls">
          {visibleCards > 3 && (
            <button className="prev-button" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
          )}
          {visibleCards < cards.length && (
            <button className="next-button" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;
