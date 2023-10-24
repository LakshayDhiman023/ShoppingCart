import React from 'react'
import {  Grid } from '@mui/material'
import {imageURL} from '../../constants/data.js'
import styled from '@emotion/styled'
const Wrapper = styled(Grid)`
    display: flex;
`
const Img = styled("img")(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  display: "flex",
  justifyContent: "space-between",
  
}));

function MidSecion() {
  return (
    <Wrapper container >
      {imageURL.map((img) => (
        <Grid item lg={4} md= {4} sm={12} xs={12}>
          <Img src={img} alt="image" width={"100%"} />
        </Grid>
      ))}
    </Wrapper>
  );
}

export default MidSecion;