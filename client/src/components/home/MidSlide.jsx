import { Box } from "@mui/material";
import Slide from "./Slide";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const Container = styled(Box)`
  display: flex;
`;

const Left = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Right = styled(Box)(({ theme }) => ({
  width: "17%",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "10px",
  background: "#FFFFFF",
  textAlign: "center",
  [theme.breakpoints.down("md")]:{
    display:'none',
  }
}));

function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const theme = useTheme(); // Get the theme using useTheme hook
  return (
    <Container>
      <Left theme={theme}>
        <Slide products={products} title={title} timer={timer} />
      </Left>
      <Right theme={theme}>
        <img src={adURL} alt="ad" width={"217px"} />
      </Right>
    </Container>
  );
}

export default MidSlide;
