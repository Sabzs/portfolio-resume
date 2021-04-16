import React from 'react';
import ImageSection from '../Components/AboutSections/ImageSection';
import SkillsSection from '../Components/AboutSections/SkillsSection';
import Title from '../Components/Title';
import DownloadResume from '../Components/DownloadResume';
import SkillList from "../Components/AboutSections/SkillsList"


function AboutPage() {

  return (
    <div className="aboutPage">
      <div className="aboutPage__services-skills-title" >
        <Title title={"About Me"} span={"About Me"} />
      </div>

      <div className="aboutPage__image-sec-container" >
        <ImageSection />
      </div>

      <div className="aboutPage__downloadResume" >
        <DownloadResume />
      </div>

      <div className="aboutPage__services-skills-title" >
        <Title title={"My Skills"} span={"My Skills"} />
      </div>

      <div className="aboutPage__skills-type-container" >
        <SkillsSection skillslist={SkillList} />
      </div>

    </div>
  )
}

export default AboutPage;
