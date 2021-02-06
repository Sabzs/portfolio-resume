import React from 'react'

function ServicesSection({ image, title, text }) {
  return (
    <div className="servicesSection" >
      <div className="servicesSection__service-type" >
        <div className="servicesSection__service-content" >
          <img src={image} alt="" />
          <h5 className="servicesSection__service-title" >{title}</h5>
          <p className="servicesSection__service-text" >{text}</p>
        </div>

      </div>
    </div>
  )
}

export default ServicesSection;
