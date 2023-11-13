import React from 'react'
import { Button } from './Button'
import video1 from '../videos/video-2.mp4'
import '../App.css'
import './HeroSection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted /> 
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
            <Link to="https://youtu.be/9vN_htf-05w?si=197bT1KWyMb1S4DP" target="_blank">
              <button className='trailer-btn'>WATCH TRAILER</button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection
