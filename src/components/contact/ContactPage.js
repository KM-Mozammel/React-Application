// ContactPage.js
import React from 'react';
import ContactForm from './ContactForm';

function style() {
  return {
    textAlign: "center",
  }
}

function ContactPage() {
  return (
    <div style={style()}>
      <h2>Contact Us</h2>
      <p>Please fill out the form below to get in touch with us.</p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
