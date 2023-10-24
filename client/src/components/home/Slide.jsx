import {Box, Typography,Button, styled, Divider} from '@mui/material'
import Carousel from 'react-multi-carousel'
import React from 'react'
import "react-multi-carousel/lib/styles.css"; 
import Countdown from "react-countdown";

function Slide({products, title, timer}) {
    const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const timerURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";


  const renderer = ({ hours, minutes, seconds, left }) => {
    return <Box variant = "span"> {hours}: {minutes}: {seconds} Left</Box>
  };

  const Component = styled(Box)`
    margin-top: 10px ;
    background-color: #ffffff;
  `
  const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
    
  `
  const Timer = styled(Box)`
    display: flex;
    margin-left : 10px;
    align-items: center;
    color: 7f7f7f; 

    
  `

  const ViewAllButton = styled(Button)`
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    background-color: #2874f0;
  `;

  const DealText = styled(Typography)`

    font-weight: 600;
    font-size: 22px;
    margin-right: 25px;
    line-height: 32px;
    `

    const Img = styled('img')({
      width :'auto',
      height : '150px'

    })

    const Text = styled(Typography)`
      font-size: 14px;
      margin-top: 5px;
    `
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" width={24} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        
        <ViewAllButton variant="contained"> View All </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Box textAlign={"center"} padding={"25px 15px"}>
            <Img src={product.url} alt="product" />
            <Text style={{ color: "#212121", fontWeight: 600 }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product.discount}</Text>
            <Text style={{ color: "#212121", opacity: "0.6" }}>
              {product.tagline}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Component>
  );
}

export default Slide;