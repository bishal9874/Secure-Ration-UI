import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import "./LoginCam.css";
import * as faceapi from "face-api.js";

const videoConstraints = {
  width: 440,
  
  facingMode: "user",
};

const LoginCam = () => {
  const loginwebcamRef = useRef(null);
  const [checkurl, checksetUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = loginwebcamRef.current.getScreenshot({
      width: 640,
      height: 480
    });
    checksetUrl(imageSrc);
  }, [loginwebcamRef]);
  
  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    
      <div className="Container">
      <div className="cam">
          <h3>You have to capture only your face</h3>
            
          <Webcam
              className="webcam"
              ref={loginwebcamRef}
              // audio={true}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia} />
      </div>
      <div className="buttons">
              <button className="LoginCapture" onClick={capturePhoto}>
                  Capture
              </button>
              <button className="LoginRefresh" onClick={() => checksetUrl(null)}>
                  Refresh
              </button>
              
              {checkurl && (
                  <div className="screenshot">
                      <img src={checkurl} alt="Screenshot" />
                  </div>
              )}

           
          </div>
          </div>
   
  );
};

export default LoginCam;
