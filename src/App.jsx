import React, { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <img src="../images/logo.svg" alt="" />
      <h1>We are launching <span>soon!</span>
      </h1>  

      <p>Subscribe and get notified</p>

      <div>
        <input type="text" />
        <button>Notify Me</button>
      </div>

      <img className='illustration' src="./images/illustration-dashboard.png"/>

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
