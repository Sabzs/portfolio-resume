import React from 'react';
import ProfileAbout from "../../assets/images/hiring-website1 (2).jpg"

function ProfileDetails() {
  return (
    <div className="profileDetails" >
      <div className="profileDetails__profile-img" >
        <img src={ProfileAbout} alt="profile-img" />
      </div>
      <div className="profileDetails__about-info" >
        <h4>I am<span> Sabo Jise</span></h4>
        <p className="profileDetails__info-text" >
          More relevant info about me....
          maybe a continuetion from the brief about me on the Home Page
        </p>

        <div className="profileDetails__about-details ">
          <div className="profileDetails__left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Post Code</p>
            <p>Countries</p>
          </div>
          <div className="profileDetails__right-section">
            <p>: Sabo Jise</p>
            <p>: 45</p>
            <p>: Nigeria, Canada(PR)</p>
            <p>: English, Hausa, Nigerian Pigeo English</p>
            <p>: 59-19572 Fraser Way, Pitt Meadows, BC,   </p>
            <p>: V3Y 0A9</p>
            <p>: Nigeria, Canada, Australia</p>
          </div>
        </div>
        <button className="profileDetails__CV-btn">Download CV</button>
      </div>


    </div>

  )
}

export default ProfileDetails;
