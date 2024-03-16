import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Slider.css';
import { useState } from 'react';

const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };

  return (
    <div>
      <div className="carousel-container">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://s1.1zoom.me/b5050/841/Strawberry_Black_background_Cream_Bowl_589568_1920x1080.jpg'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media01.stockfood.com/largepreviews/Mzg0OTY3Nzk2/12418316-Indian-sweets-on-a-black-background.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/desserts.2.png"

            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

     


    </div>
    </div>
  )
}

export default Slider
