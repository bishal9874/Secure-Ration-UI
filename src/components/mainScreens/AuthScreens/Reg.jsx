import React from 'react'
import Camera from './camera/Camera'
import "./Reg.css"
const Reg = () => {
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
        
        <form>
          <div className="reg-inputs_container">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Ration ID" />
            <input type="password" placeholder="Password" />
            <input type="password2" placeholder="confirm Password" />
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
        <Camera/>
      </div>
    </section>
  </>
  )
}

export default Reg