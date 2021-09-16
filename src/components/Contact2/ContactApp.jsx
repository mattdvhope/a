import React from "react";
import Contact from "./ContactComponents/Contact";

function ContactApp({ pageType }) {
  return (
    <Contact
      pageType={pageType}
      chat="Chat"
      text1="Let's chat! We care about your feedback and questions."
      followUs="Follow us"
      title="Contact Us"
      messengerLogo="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/messenger@2x.png"
      facebookCircularLogo="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/facebook-circular-logo@2x.png"
    />
  );
}

export default ContactApp;
