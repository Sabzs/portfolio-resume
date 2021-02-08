import React from 'react';
import ContactList from '../Components/ContactList';
import Title from "../Components/Title"
import phone from "../assets/images/phone-icon.svg";
import email from "../assets/images/email-icon.svg";
import location from "../assets/images/location-icon.svg";

function ContactPage() {
  return (
    <div className="contactPage" >

      <div className="contactPage__contact-title" >
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>


      <div className="contactPage__map-info-container" >
        <div className="contactPage__map-section">
          <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20853.419697131198!2d-122.68614715000001!3d49.206677899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1612659361663!5m2!1sen!2sca" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        <div className="contactPage__details-section">
          <ContactList title={"Phone"} icon={phone} text={"+1 778 512 8464"} />
          <ContactList title={"Email"} icon={email} text={"sabojise@gmail.com"} />
          <ContactList title={"Address"} icon={location} text={"Pit Meadows"} />
        </div>
      </div>


    </div>
  )
}

export default ContactPage;
