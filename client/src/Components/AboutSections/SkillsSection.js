
import React from 'react'

function SkillsSection({ skillslist }) {
  return (
    <div className="skillsSection" >
      {skillslist.map((skills) => {
        return (
          <div className="skillsSection__skills-type" key={skills.id}>

            <div className="skillsSection__skills-list" >
              <h2 className="skillsSection__skills-list-header">{skills.category}</h2>
              <p className="skillsSection__skills-content">{skills.lang1}</p>
              <p className="skillsSection__skills-content">{skills.lang2}</p>
              <p className="skillsSection__skills-content">{skills.lang3}</p>
              <p className="skillsSection__skills-content">{skills.lang4}</p>
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default SkillsSection
