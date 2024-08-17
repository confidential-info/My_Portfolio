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
              <ContactInfoCard iconUrl="../assets/mail.svg" text="cnikhil1000@gmail.com" />
              <ContactInfoCard iconUrl="../assets/github.svg" text="https://github.com" />
            </div>
            <div style={{flex: 1}}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe;