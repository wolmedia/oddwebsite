
import React, { useState } from 'react';

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      imageUrl: '',
      title: 'Título 1',
      description: 'Descripción de la tarjeta 1',
      buttonUrl: 'https://www.ejemplo.com/1',
    },
    {
      id: 2,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 2',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 3,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 2',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 4,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 2',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 5,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 2',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 3,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 2',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    }
  ];



  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Anterior</button>
      <div className="card-container">
        {carouselData.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={card.imageUrl} alt="Imagen principal" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.buttonUrl} target="_blank" rel="noopener noreferrer">
              Botón de redireccionamiento
            </a>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Carousel;
