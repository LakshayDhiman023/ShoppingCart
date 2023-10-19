import React from 'react'
import Carousel from 'react-multi-carousel'
import {bannerData} from '../../../constants/data'
import './banner.css'
import "react-multi-carousel/lib/styles.css";
function Banner() {

  const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      infinite={true}
      ssr={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      responsive={responsive}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data) => (
        <img className="bannerImg" src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
}

export default Banner