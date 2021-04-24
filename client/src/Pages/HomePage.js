import React from 'react'
import Title from "../Components/Title"

function HomePage() {
  return (
    <div className="homePage" >

      <div className="homePage__first-wrapper" >
        <div className="homePage__home-title" >
          <Title title={"Welcome"} span={"Welcome"} />
        </div>
      </div>

      <div className="homePage__second-wrapper" >
        <div className="homePage__hero" >
          <h1 className="homePage__hero-header" >Hi, I am <span>Sabo Jise</span></h1>
          <p className="homePage__brief-about" >
            I am a Full Stack Web Developer with a background in music.
            I am passionate about the ability to create and bring imaginations to life through visual representation,
            creating something unique that people can feel, interact and work with.
        </p>
        </div>
        <div className="homePage__icons-container" >
          <a href="https://www.linkedin.com/in/sabojise"
            className="homePage__icons" >
            <i className="fab fa-linkedin">
            </i>
          </a>
          <a href="https://github.com/Sabzs"
            className="homePage__icons" >
            <i className="fab fa-github">
            </i>
          </a>
        </div>
      </div>




    </div>
  )
}

export default HomePage;
