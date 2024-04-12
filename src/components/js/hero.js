// Hero.js

import * as React from 'react'

import  '../css/hero.module.css'

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to my Website</h1>
        <p>Some introductory text...</p>
      </div>
    </header>
  )
}

export default Hero