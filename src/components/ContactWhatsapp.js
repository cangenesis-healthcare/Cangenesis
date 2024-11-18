import React from "react";
import './ContactWhatsapp.scss';


const ContactWhatsapp = ({label}) => {
    const phoneNumber = "+918698693636";
  
    return (
      <a href={`https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services`}className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon"/>
        {label && <span className="whatsapp-label">{label}</span>}
      </a>
    );
  };

export default ContactWhatsapp;