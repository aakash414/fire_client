import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleFocus = () => {
      video.pause();
    };

    const handleBlur = () => {
      video.play();
    };

    const inputElement = document.querySelector("input[type='text']");
    inputElement.addEventListener("focus", handleFocus);
    inputElement.addEventListener("blur", handleBlur);

    return () => {
      inputElement.removeEventListener("focus", handleFocus);
      inputElement.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <video ref={videoRef} autoPlay muted loop controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        <input type="text" placeholder="Type something..." />
      </header>
    </div>
  );
}

export default App;
