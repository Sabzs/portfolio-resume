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
          <iframe title="This is a unique-section"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83300.21509383063!2d-122.74151745825907!3d49.273901229572786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d43ee774b3f1%3A0x953de0e394d40c00!2sPitt%20Meadows%2C%20BC!5e0!3m2!1sen!2sca!4v1618539246383!5m2!1sen!2sca"
            loading="lazy">
          </iframe>
        </div>

        <div className="contactPage__details-section">
          <ContactList title={"Phone:"} icon={phone} text={"+1 778 512 8464"} />
          <a href="mailto:sajiyoonline@gmail.com">
            <ContactList title={"Email:"} icon={email} text={"sajiyoonline@gmail.com"} />
          </a>
          <ContactList title={"Address:"} icon={location} text={"Osprey Village, Pit Meadows"} />
        </div>
      </div>


    </div>
  )
}

export default ContactPage;
