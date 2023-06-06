import Image1 from '../../../assets/img/figure/development_black.png';


import React, { useState } from 'react';

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      imageUrl: {Image1},
      title: 'Título 1',
      description: 'Descripción de la tarjeta 1',
      buttonUrl:  'https://www.ejemplo.com/2',
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
      title: 'Título 3',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 4,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 4',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 5,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 5',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    },
    {
      id: 6,
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      title: 'Título 6',
      description: 'Descripción de la tarjeta 2',
      buttonUrl: 'https://www.ejemplo.com/2',
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === carouselData.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Anterior</button>
      <div className="card-container">
        {carouselData.slice(startIndex, startIndex + 3).map((card) => (
          <div key={card.id} className="card">
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
