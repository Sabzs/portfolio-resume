import React from 'react';
import ImageSection from '../Components/AboutSections/ImageSection';
import ServicesSection from '../Components/AboutSections/ServicesSection';
import SkillsSection from '../Components/AboutSections/SkillsSection';
import Title from '../Components/Title';
import design from "../assets/images/design.svg"
import DownloadResume from '../Components/DownloadResume';

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
        <SkillsSection skill={"JavaScript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Js"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"Node Js"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"MySQL"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Sequelize"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"CSS & SCSS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"HTML"} progress={"80%"} width={"80%"} />
      </div>


      <div className="aboutPage__services-skills-title" >
        <Title title={"Service"} span={"Service"} />
      </div>

      <div className="aboutPage__services-container" >
        <ServicesSection image={design} title={"Web design"}
          text={"Web design has continue to be a passion that motivates my to be more creative..."}
        />
        <ServicesSection image={design} title={"Web development"}
          text={"Web design has continue to be a passion that motivates my to be more creative..."}
        />
        <ServicesSection image={design} title={"UI/UX"}
          text={"Web design has continue to be a passion that motivates my to be more creative..."}
        />
      </div>

    </div>
  )
}

export default AboutPage;