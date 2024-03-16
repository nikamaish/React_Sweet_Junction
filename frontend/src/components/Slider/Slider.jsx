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
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Winter_GW_PC_Unrec._CB570776754_.jpg"

            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

     


    </div>
    </div>
  )
}

export default Slider
