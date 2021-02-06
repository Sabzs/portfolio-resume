import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homePage" >
      <div className="homePage__hero" >
        <h1 className="homePage__hero-header" >Hi, I am <span>Sabo Jise</span></h1>
        <p className="homePage__brief-about" >
          I am a Full Stack Web Developer with a background in music.
          I am passionate about the ability to create and bring imaginations to life through visual representation,
          creating something unique that people can feel, interact and work with.
        </p>
      </div>
      <div className="homePage__icons-container" >
        <Link to="/" className="homePage__icons" ><i className="fab fa-linkedin"></i></Link>
        <Link to="/" className="homePage__icons" ><i className="fab fa-github"></i></Link>
      </div>


    </div>
  )
}

export default HomePage;
