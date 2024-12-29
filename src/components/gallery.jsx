import React, { useState, useEffect } from "react";

// Importa tus imágenes
import logoImage1 from "../assets/img/image1.png";
import logoImage2 from "../assets/img/image2.png";
import logoImage3 from "../assets/img/image3.png";
import logoImage4 from "../assets/img/image4.png";
import logoImage5 from "../assets/img/image5.png";
import logoImage6 from "../assets/img/image6.png";

function Gallery() {
  // Lista de imágenes
  const images = [logoImage1, logoImage2, logoImage3, logoImage4, logoImage5, logoImage6];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Movimiento automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  // Cambiar a un slide específico
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container-gallery">
      {/* Contenedor de imágenes */}
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Mueve el carrusel
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)} // Cambia al slide seleccionado
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
