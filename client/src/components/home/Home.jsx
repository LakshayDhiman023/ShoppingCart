import React from 'react'
import './home.css'
import Navbar from './Navbar/Navbar'
import Banner from './banner/Banner';

function Home() {
  return (
    <>
      <Navbar />
      <div className='Container'>
        <Banner />
      </div>
    </>
  );
}

export default Home