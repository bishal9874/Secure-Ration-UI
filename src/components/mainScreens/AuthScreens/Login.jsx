import React from "react";
import "./Login.css";
import { useState } from 'react';
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert,Typography, CircularProgress} from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { useLogin_userMutation } from "../../../services/rationApi";
import { getToken, storeToken } from "../../../services/localStorage";
import { setUsertoken } from "../../../features/authSlice";
import { useEffect } from "react";
const Login = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLogin_userMutation()
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const loginData = {
      email: data.get('email'),
      rationId: data.get('rationId'),
      password: data.get('password'),
    }
    console.log(loginData);
    const res = await loginUser(loginData);
    if(res.error){
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)

    }if(res.data){
      storeToken(res.data.token)
      let {access_token} = getToken()
      dispatch(setUsertoken({access_token:access_token}))
      navigate('/logincam')
    }

    
  }

  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUsertoken({ access_token: access_token }))
  }, [access_token, dispatch])

  return (
    <>
      <section className="section">
        <div className="img_sec">
          
            <img className="loginIMage" src="src/assets/intro.png"  />
         
        </div>
        <div>
          <a href="/"><h3>
            <span className="login_logo_text">Secure</span>-Ration
          </h3></a>
          {server_error.none_field_errors ? <Alert severity='error'>{server_error.none_field_errors[0]}</Alert> : ''}
          <form onSubmit={handleLogin}>
            <div className="inputs_container">
              <input type="email" id='email' name='email' placeholder="Email" />
              {server_error.email ? <Typography style={{fontSize:12,color:'red'}}> {server_error.email[0]}</Typography> : " "}
              <input type="text" id='rationId' name='rationId' placeholder="Ration ID" />
              {server_error.rationId ? <Typography style={{fontSize:12,color:'red'}}> {server_error.rationId[0]}</Typography> : " "}
              <input type="password" id='password' name='password'placeholder="Password" />
              {server_error.password ? <Typography style={{fontSize:12,color:'red'}}> {server_error.password[0]}</Typography> : " "}
            </div>
            <p>
              Not registered yet?{" "}
              <a href="/Signup" className="register_button">
               KYC Sign Up
              </a>{" "}
            </p>
            {isLoading ? <CircularProgress/> : <button type="submit" className="login_button">log in</button>}
            
            
          </form>
        </div>
        
      </section>
    </>
  );
};

export default Login;
