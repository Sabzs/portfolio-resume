import React from 'react'

function SkillsSection({ skill, progress, width }) {
  return (
    <div className="skillsSection" >
      <div className="skillsSection__skill-container" >
        <h5 className="skillsSection__skill-title">{skill}</h5>
        <div className="skillsSection__skill-bar">
          <p className="skillsSection__skill-text">{progress}</p>
          <div className="skillsSection__skill-progress">
            <div className="skillsSection__progress" >
              <div className="skillsSection__inner-progress" style={{ width: width }} ></div> {/* //instead of before & after// */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillsSection;
