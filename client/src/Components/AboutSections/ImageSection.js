import React from 'react';
// import ProfileImage from "../../assets/images/profile-sunny-day.jpg"

function ProfileDetails() {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `SABO-J-RESUME.pdf`;
    link.href = "/public/SABO-J-RESUME.pdf";
    link.click();
  };

  return (
    <div className="profileDetails" >

      <div className="profileDetails__profile-img" >
        {/* <img src={ProfileImage} alt="profileImage" /> */}
      </div>

      <div className="profileDetails__about-info" >
        <h4>I am<span> Sabo Jise</span></h4>
        <p className="profileDetails__info-text" >

          A Full Stack Web Developer with a background in music. I am passionate about the ability to create and bring imaginations to
          life through visual representation, creating something unique that people can feel, interact and work with.<br></br>
          As a musician, I was based at various locations overseas, working for an international non-profit organization as a music
          educator and mentor with a focus and emphasis on community development, humanitarian work, and project management.
          Being in a leadership role has honed leadership skills, communication and collaborative work which are crucial for working in teams.<br></br>
          I am open-minded and focused on learning, growing and multiplying.
          I aim to leverage my prior music insights in my career-transition as a web developer as it has provided me with keen attention to detail,
          the ability to persevere, to refine until excellence achieved, to be self-disciplined, and the skill to coordinate multiple tasks at once.
          I believe in the power of technology as a modern tool for transforming the status quo of our current generation.

        </p>

        {/* <div className="profileDetails__about-details ">
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
        </div> */}

        <button className="profileDetails__CV-btn" onClick={onDownload} download>Download Resume</button>
      </div>


    </div >

  )
}

export default ProfileDetails;
