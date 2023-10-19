import React, { useState, useContext } from "react";
import './loginDialogue.css'
import { Dialog } from '@mui/material'
import { DataContext } from "../../context/DataProvider";
import { authenticateSignup, authenticateLogin } from "../../service/api";
function LoginDialogue({open, setOpen}) {
    const handleClose = ()=>{
        for(const key of Object.keys(signup)){
          signup[key] = '';
        }
        for(const key of Object.keys(login)){
          login[key] ='';
        }
        setOpen(false);
        setError(false);
        toggleAccount(accountInitialValues.login)
    }
    const signUpInitialValue = {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      email:'',
      phone:'',
    }
      
    const onInputChange = (e)=>{
      // console.log(e.target.value);
      // console.log({...signup});
      setSignup({...signup, [e.target.name]:e.target.value}) 
    }
    const { setAccount } = useContext(DataContext);
    const signupUser = async()=>{
      let respone = await authenticateSignup(signup);
      if(!respone)return
      handleClose();
      // console.log(signupUser.firstname);
      setAccount(signup.username);
      
    }


    const accountInitialValues = {
      login: {
        view: "login",
        heading: "Login",
        subHeading: "Get Access to your Orders, Wishlists, and Recommendations",
      },
      signup: {
        view: "signup",
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
      },
    };
    const loginInitialValues = {
      username:'', 
      password:''
    }

    const [ account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signUpInitialValue); 
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const toggleSignup = ()=>{
      toggleAccount(accountInitialValues.signup)
    }
    const onValueChange = (e) =>{
      setLogin({...login ,[e.target.name]: e.target.value})
    }

    const loginUser = async()=>{
      // console.log(login);
      let response = await authenticateLogin(login);
      if(response.status===200){
        handleClose();

        setAccount(response.data.data.username)
      }
      else{
        
        setError(true);
      }

    }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
      <div className="Component">
        <div className="image">
          <h5  style={{color:'white'}}>{account.heading}</h5>
          <p style={{ marginTop: "20px", color:'white'}}>
           {account.subHeading}
          </p>
        </div>
        {account.view === 'login' ? 
            <div className="wrapper">
              {/* <TextField variant="standard" label="Enter email/ mobile number"></TextField> */}
              <div style={{ marginTop: "20px" }}>
                {/* <label htmlFor="" style={{ display: "block" }}>
                  Email
                </label>
                <input type="email" width={"100px"} /> */}
                <input className="form-control" onChange={(e)=>onValueChange(e)} name="username" placeholder="Enter Email/Mobile no" value={login.username}/>
                {error&& <p className="error"> Please Enter valid username or password</p>}
                <input className="form-control" onChange={(e)=>onValueChange(e)} name="password" placeholder="Password" value={login.password}/>
                <p style={{ marginTop: "20px", fontSize:'14px', color:'#878787'}}>
                  By continuing you agree to flipkart terms and conditions
                </p>
                <button className="LoginBtn" onClick={()=>loginUser()}>Login</button>
                <h6 style={{ marginTop: "20px", marginBottom: "20px", textAlign:'center'}}>OR</h6>
                <button className="RequestOtpBtn">Request OTP</button>
                <p onClick= {()=>toggleSignup()} style={{ marginTop: "20px", fontSize:'14px', color:'#2874f0', textAlign:'center', cursor:"pointer"}}>
                  New to flipkart? Create an account
                </p>
              </div>
            </div>
            :
            <div className="wrapper">
              {/* <TextField variant="standard" label="Enter email/ mobile number"></TextField> */}
              <div style={{ marginTop: "20px" }}>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="firstname" placeholder="Enter Firstname" value={signup.firstname}/>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="lastname"  placeholder="Enter Lastname" value={signup.lastname}/>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="username"  placeholder="Enter Username" value={signup.username}/>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="password"  placeholder="Enter Password" value={signup.password}/>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="email"  placeholder="Enter Email" value={signup.email}/>
              <input className="form-control" onChange={(e)=>onInputChange(e)} name="phone"  placeholder="Enter Phone" value={signup.phone}/>
                 
                <button className="LoginBtn" onClick={()=>signupUser()} style={{marginTop:'20px'}}>Continue</button>
                
              </div>
            </div>
        }
      </div>
    </Dialog>
  );
}

export default LoginDialogue;
