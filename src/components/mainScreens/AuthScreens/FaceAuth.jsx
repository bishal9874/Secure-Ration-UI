import React from 'react'
import LoginCam from './login_camera/LoginCam'
import './FaceAuth.css'
const FaceAuth = () => {
  return (
    <section className='container'>
        <div>
        <a href="/"><h3>
            <span className="login_logo_text">Secure</span>-Ration
          </h3></a>
          <img className="reg-loginIMage" src="src/assets/auth-img-7.png" alt="" />
          <button type="submit" className='face_check_from_DB'>Submit</button>
        </div>
        
          <div> <LoginCam/> </div>
         
    </section>
  )
}

export default FaceAuth