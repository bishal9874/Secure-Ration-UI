import React from "react";
import Card from "../../Card";
import FaceAuth from "./FaceAuth";
import "./Login.css";
import LoginCam from "./login_camera/LoginCam";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/logincam');
  };
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
          
          <form onSubmit={handleLogin}>
            <div className="inputs_container">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Ration ID" />
              <input type="password" placeholder="Password" />
            </div>
            <p>
              Not registered yet?{" "}
              <a href="/Signup" className="register_button">
               KYC Sign Up
              </a>{" "}
            </p>
            <button type="submit" className="login_button">log in</button>

          </form>
        </div>
        <div>
          
        </div>
      </section>
    </>
  );
};

export default Login;
