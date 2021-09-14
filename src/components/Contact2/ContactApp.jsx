import "./App.css";
import React from "react";
import Contact from "./components/Contact";

function ContactApp() {
  return (
    <Contact
      group5="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392a07173bee6db2de22b4/img/group-5-1@2x.png"
      chat="Chat"
      text1="Let's chat! We care about your feedback and questions."
      followUs="Follow us"
      title="Contact Us"
      messenger="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/messenger@2x.png"
      facebookCircularLogo="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/facebook-circular-logo@2x.png"
    />
  );
}

export default ContactApp;
