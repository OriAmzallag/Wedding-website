import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Are the Architects of Your Love Story: <br />Crafting Your Perfect Wedding Experience</h1>
        <p>We listen attentively to your vision, understanding every detail and preference, to bring your <b> dream wedding </b> to life.

          With creativity, passion, and dedication, we transform your ideas into <b> magical moments </b> that will be cherished forever.</p>
        <button className= 'btn'>Explore More <img src={dark_arrow} 
        alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
