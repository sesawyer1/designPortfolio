import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import {pedalCaro} from '../images/images';

const imageList = Object.values(pedalCaro); 

const CarouselContainer = styled.div`
  width: 748px;
  margin: 0 auto;
`;
const ImageContainer = styled.div`
  display: flex !important; /* Important to override slick default styles */
  justify-content: center;
  align-items: center;
  height: 500px; /* Adjust height as needed */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ensures the image maintains its aspect ratio */
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} alt={index}/>
          </ImageContainer>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
