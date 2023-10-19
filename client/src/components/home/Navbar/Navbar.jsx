import React from 'react'
import './navbar.css'
import {navData} from "../../../constants/data";
function Navbar() {
  return (
    <div className='component'>
        {
        navData.map(data =>(
            <div className='container'>
                <img src={data.url} alt="img" style={{width:"64px"}}/>
                <p>{data.text}</p>
            </div>
        ))
        }
    </div>
  )
}


export default Navbar
