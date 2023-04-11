import React, { useRef,useEffect,useState } from "react";
import Webcam from "react-webcam";
import "./Camera.css";
import * as faceapi from "face-api.js";

const videoConstraints = {
  width: 340,
  facingMode: "user",
};

const Camera = () => {
 const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
 
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);
 
  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <h3>You have to capture only your face</h3>
        <Webcam
          ref={webcamRef}
          // audio={true}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
      </div>
      <div>
        <button className="Capture" onClick={capturePhoto}>
          Capture
        </button>
        <button className="Refresh" onClick={() => setUrl(null)}>
          Refresh
        </button>
        {url && (
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        )}
      </div>
    </>
  );
};

export default Camera;
