import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [borderColor, setBorderColor] = useState('');

  const handleButtonClick = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (inputValue.trim() === '' || !emailPattern.test(inputValue)) {
      setShowDiv(true);
      setBorderColor('red');
    } else {
      setShowDiv(false);
      setBorderColor('');
    }
  };

  return (
    <>
      <img className='logo' src="../images/logo.svg" alt="" />
      <h1>We are launching <span>soon!</span>
      </h1>  

      <p>Subscribe and get notified</p>

      <div className='input-container'>

        <input
          type="email"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setShowDiv(false);
            setBorderColor('');
          }}
          style={{ borderColor: borderColor }}
          placeholder='Your email address'
        />
        <button onClick={handleButtonClick}>Notify Me</button>
        {showDiv && (
        <div className="error-message">
          {inputValue.trim() === ''
            ? 'Input cannot be empty.'
            : 'Please provide a valid email'}
        </div>
        )}
      </div>

      <img className='illustration' src="./images/illustration-dashboard.png"/>

      <div className='socials'>
        <img src="/images/icon8-facebook-48.png"/>
        <img src="/images/icon8-twitter-squared-48.png"/>
        <img src="/images/icon8-instagram-48.png"/>
      </div>

      <h6>
        &copy; Copyright Ping. All rights reserved.
      </h6> 

      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">David Omonehin</a>.
        </p>
      </footer>
    </>
  )
}

export default App
