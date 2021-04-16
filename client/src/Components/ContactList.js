import React from 'react'

function ContactList({ icon, text, title }) {
  return (
    <div className="contactList" >
      <img className="contactList__item-icon" src={icon} alt="" />
      <div className="contactList__title-text-container">
        <h4 className="contactList__item-title" >{title}</h4>
        <p className="contactList__item-text" >{text}</p>
      </div>
    </div>
  )
}

export default ContactList;
