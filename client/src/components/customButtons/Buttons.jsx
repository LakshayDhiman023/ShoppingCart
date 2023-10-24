import React, { useState, useContext } from 'react'
import './buttons.css'
import LoginDialogue from '../login/LoginDialogue';
import Profile from '../header/Profile';
import { DataContext } from '../../context/DataProvider';


function Buttons() {
  const [open, setOpen] = useState(false);
  const openDialog = ()=>{
    setOpen(true);
  }

  const {account, setAccount} = useContext(DataContext);

  return (

    <div className="ButtonCollection">
      {
        account? <Profile account={account} setAccount={setAccount}/> 
        // account? 'hello'
        :
        <>
        <button type="button" onClick = {()=>openDialog()} className="Login btn btn-primary">Login</button>
        <button className='logout btn btn-primary btn-sm'>Logout</button>
        </>
      }
      
      <p className="Seller">Become a Seller</p>
      <p className="Cart">Cart</p>
      <LoginDialogue open = {open} setOpen ={setOpen}/>
    </div>
  );
}

export default Buttons