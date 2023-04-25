import React from 'react'
import Camera from './camera/Camera'
import "./Reg.css"
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Reg = () => {
  const [error, setError] = useState({
    status:false,
    msg:"",
    type:""
  })
  const [errorMessages, setErrorMessages] = useState({});
  const [imageData, setImageData] = useState(null); // define state variable to hold captured image data
  const [isCameraReady, setIsCameraReady] = useState(false);
  const onCapturePhoto = (imageData) => {
    setImageData(imageData);
    setIsCameraReady(true); // update the state with the captured image data
  };
  console.log(imageData);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const registationData = {
      email: data.get('email'),
      name:data.get('name'),
      rationId:data.get('rationId'),
      password: data.get('password'),
      password_confirmation: data.get('password2'),
      tc: data.get('tc'),
      image: imageData,
    }
    if (registationData.name && registationData.email && registationData.password && registationData.password_confirmation && registationData.tc !== null) {
     if(registationData.image !== null){
      if (registationData.password === registationData.password_confirmation) {
        console.log(registationData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
     }else{
      setError({ status: true, msg: "face image is required", type: 'error' })
     }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return (
    <>
    <section className="reg-section">
      <div className="reg-img_sec">
        
          <img className="reg-loginIMage" src="src/assets/auth-img-7.png" alt="" />
       
      </div>
      <div>
        <a href="/"><h3>
          <span className="reg-login_logo_text">Secure</span>-Ration
        </h3></a>
        <div>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}</div>
        <form id='registration-form' onSubmit={handlesubmit}>
          <div className="reg-inputs_container">
            <input type="email" required name="email" id='email' placeholder="Email" />
            <input type="text" required name="name" id='name'  placeholder="Name" />
            <input type="text"  required name="rationId" id='rationId'  placeholder="Ration ID" />
            <input type="password" name="password"  required id='password' placeholder="Password" />
            <input type="password2" name="password2"  required id='password2'  placeholder="confirm Password" />
            <div className='tc'><FormControlLabel  control={<Checkbox value="true" required color="primary" name="tc" id="tc" />} label="I agree to term and condition." /> </div>
           
          </div>
          <p className='already_register'>
            I have already register?{" "}
            <a href="/login" >
             login
            </a>{" "}
          </p>

          <input type="submit" value="Sign Up " className="login_button" />

        </form>
      </div>
      <div>
        <Camera onCapturePhoto={onCapturePhoto}/>
      </div>
    </section>
  </>
  )
}

export default Reg