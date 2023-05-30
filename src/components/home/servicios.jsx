import React, { useState } from 'react';

const Servicios = () => {
  const [selectedService, setSelectedService] = useState(0);
  const services = [
    {
      id: 1,
      title: 'Servicio 1',
      text: 'Descripción del servicio 1',
      image: 'imagen1.jpg',
      gif: 'gif1.gif',
    },
    {
      id: 2,
      title: 'Servicio 2',
      text: 'Descripción del servicio 2',
      image: 'imagen2.jpg',
      gif: 'gif2.gif',
    },
    {
      id: 3,
      title: 'Servicio 3',
      text: 'Descripción del servicio 3',
      image: 'imagen3.jpg',
      gif: 'gif3.gif',
    },
    {
      id: 4,
      title: 'Servicio 4',
      text: 'Descripción del servicio 4',
      image: 'imagen4.jpg',
      gif: 'gif4.gif',
    },
    {
      id: 5,
      title: 'Servicio 5',
      text: 'Descripción del servicio 5',
      image: 'imagen5.jpg',
      gif: 'gif5.gif',
    },
    {
      id: 6,
      title: 'Servicio 6',
      text: 'Descripción del servicio 6',
      image: 'imagen6.jpg',
      gif: 'gif6.gif',
    },
  ];

  const handlePrev = () => {
    setSelectedService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div className="cards-container">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`card ${selectedService === index ? 'selected' : ''}`}
            onClick={() => setSelectedService(index)}
          >
            <img src={selectedService === index ? service.gif : service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Servicios;
