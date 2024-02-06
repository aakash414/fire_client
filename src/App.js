/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react"; // Import useEffect
import { Button, Toast } from "react-bootstrap"; // Remove unused imports
import "bootstrap/dist/css/bootstrap.min.css";
import { requestForToken } from "./firebase"; // Import getToken function from firebase.js

function App() {
  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    // Use useEffect to call getToken once the component mounts
    requestForToken(setTokenFound);
  }, []); // Pass an empty dependency array to run this effect only once

  return (
    <div className="App">
      {/* Conditional rendering for notification permission */}
      {isTokenFound ? (
        <p>Notification permission enabled 👍🏻</p>
      ) : (
        <p>Need notification permission ❗️</p>
      )}
      {/* Toast component */}
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Notification</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>There are some new updates that you might love!</Toast.Body>
      </Toast>
      {/* Button to show toast */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </div>
  );
}

export default App;
