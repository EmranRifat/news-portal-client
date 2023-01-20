import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../Assets/Photos/Brand1.png";
import brand2 from "../../Assets/Photos/Brand2.png";

const Carousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
