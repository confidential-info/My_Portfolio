import React from 'react';

//CSS Import
import "./ContactMe.css";

//Component Import
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex: 1}}>
              <a href="#" className="contact-content-link">
                <ContactInfoCard iconUrl="../assets/mail.svg" text="cnikhil1000@gmail.com" />
              </a>
              <a href="https://github.com/confidential-info" className="contact-content-link" target="_blank" rel="noopener noreferrer">
                <ContactInfoCard iconUrl="../assets/github.svg" text="https://github.com/confidential-info" />
              </a>
            </div>
            <div style={{flex: 1}}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe;