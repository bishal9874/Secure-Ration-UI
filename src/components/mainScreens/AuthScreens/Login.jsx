import React from "react";
import Card from "../../Card";
import "./Login.css";
const Login = () => {
  return (
    <>
      <section className="section">
        <div className="img_sec">
          
            <img className="loginIMage" src="src/assets/intro.png" alt="" />
         
        </div>
        <div>
          <a href="/"><h3>
            <span className="login_logo_text">Secure</span>-Ration
          </h3></a>
          
          <form>
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

            <input type="submit" value="Log In" className="login_button" />
          </form>
        </div>
        <div>
          
        </div>
      </section>
    </>
  );
};

export default Login;
