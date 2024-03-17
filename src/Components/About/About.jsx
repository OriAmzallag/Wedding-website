import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'
            onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>OUR STORY</h2>
            <p> We are Raday and Noga, the founders of Raday and Noga Wedding Arrangements,
            a boutique wedding planning company inspired by our own love story.
            Meeting on Tinder and falling in love during a magical trip to Greece,
            we realized the power of creating unforgettable moments. </p>
            <p> Our company is dedicated to turning couples' dreams into reality,
            offering personalized services tailored to each love story.
            From venue selection to decor planning and vendor coordination,
            we pour our creativity and attention to detail into every aspect of the wedding. </p>
            <p> Our goal is to make each celebration unique, reflecting the couple's style and personality.
            With Raday and Noga Wedding Arrangements, every wedding day becomes a cherished memory crafted with love and dedication.</p>
        </div>
    </div>
  )
}

export default About
