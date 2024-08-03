import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const images = [
    'https://ik.imagekit.io/clwpujdp2/gifts/banner/1.PNG?updatedAt=1720365585424',
    'https://ik.imagekit.io/clwpujdp2/gifts/banner/2.PNG?updatedAt=1720365585486',
    'https://ik.imagekit.io/clwpujdp2/gifts/banner/3.PNG?updatedAt=1720365585446',
    'https://ik.imagekit.io/clwpujdp2/gifts/banner/4.PNG?updatedAt=1720365585361',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="section">
      <div className="carousel-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
      </div>
    </div>
  );
};

export default Slider;
