import React, { useRef, useState } from 'react';


const ServicesContainer = () => {
  const servicesData = [
    {
      image: 'service1.jpg',
      title: 'Servicio 1',
      description: 'Descripción del Servicio 1',
      url: 'https://ejemplo.com/servicio1',
    },
    {
      image: 'service2.jpg',
      title: 'Servicio 2',
      description: 'Descripción del Servicio 2',
      url: 'https://ejemplo.com/servicio2',
    },
    {
      image: 'service3.jpg',
      title: 'Servicio 3',
      description: 'Descripción del Servicio 3',
      url: 'https://ejemplo.com/servicio3',
    },
    // Agrega más servicios aquí
  ];

  const servicesContainerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setScrollLeft(servicesContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 3; // Controla la velocidad del deslizamiento
    servicesContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="services-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        setStartX(0);
        setScrollLeft(0);
      }}
    >
      <h2>Servicios Principales</h2>
      <div className="services" ref={servicesContainerRef}>
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href={service.url} className="service-link">
              Ver más
            </a>
          </div>
        ))}
      </div>
      <button className="scroll-button left" onClick={() => servicesContainerRef.current.scrollLeft -= 200}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="scroll-button right" onClick={() => servicesContainerRef.current.scrollLeft += 200}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ServicesContainer;
