import React from 'react'

function ContactList({ icon, text, title }) {
  return (
    <div className="contactList" >
      <div className="contactList__contact-details">
        <img className="contactList__item-icon" src={icon} alt="" />
        <div className="contactList__title-text-container">
          <h6 className="contactList__item-title" >{title}</h6>
          <p className="contactList__item-text" >{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactList;
