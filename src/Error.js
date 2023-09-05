import React from 'react'
import Navbar from './navbar'

const Error = () => {
  return (
    <div>
      <Navbar />
      <div class="desc"><h2>JAWAN</h2></div>
      <div class = "line"><hr /></div>
      <div class="big-img">
        <img src="jawan_big.jpg" alt="Big img" />
      </div>
      <div class = "line"><hr /></div>
      <div class ="desc"><h3>Vikram Rathore is a former soldier who is determined to make amends for his past, where he also leads a team of six skilled women in a series of heists across the country and hijacks the Mumbai Metro. Vikram learns that his long-lost son Azad Rathore is an honest police officer who is being targeted by his nemesis Kalee, the fourth largest arms dealer in the world. Vikram embarks on a mission to obliterate Kalee and also presents the government with a set of demands, thus setting the stage for an electrifying and high-stakes showdown.</h3></div>
      <div class = "line"><hr /></div>
      <div class="show">SHOWS</div>
      <div class="show-btn">
        <button>12:00 PM</button>

        <button>3:00 PM</button>

        <button>6:00 PM</button>

        <button>9:00 PM</button>
        </div>    
    </div>
  )
}

export default Error