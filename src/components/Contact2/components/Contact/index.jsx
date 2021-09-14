import React from "react";
import "./Contact.css";

function Contact(props) {
  const { group5, chat, text1, followUs, title, messenger, facebookCircularLogo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <div className="overlap-group">
          <img
            className="vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/vector@1x.svg"
          />
          <img
            className="rectangle-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-1@1x.svg"
          />
          <img
            className="rectangle-37"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-37@2x.svg"
          />
          <img
            className="rectangle-48"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-48@2x.svg"
          />
          <img
            className="rectangle-38"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-38@2x.svg"
          />
          <img
            className="rectangle-47"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-47@2x.svg"
          />
          <img
            className="rectangle-46"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-46@2x.svg"
          />
          <img
            className="rectangle-42"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-42@2x.svg"
          />
          <img
            className="rectangle-39"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-39@2x.svg"
          />
          <img
            className="rectangle-49"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-49@2x.svg"
          />
          <img
            className="rectangle-45"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-45@2x.svg"
          />
          <img
            className="rectangle-44"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-44@2x.svg"
          />
          <img
            className="rectangle-40"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-40@2x.svg"
          />
          <img
            className="rectangle-43"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-43@2x.svg"
          />
          <img
            className="rectangle-41"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/614084fc8a97c95820323a78/img/rectangle-41@2x.svg"
          />
          <img
            className="rectangle-51"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-51@2x.svg"
          />
          <img className="group-5" src={group5} />
          <img
            className="green-rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/green-rectangle@1x.svg"
          />
          <div className="chat">{chat}</div>
          <div className="text-1">{text1}</div>
          <div className="follow-us">{followUs}</div>
          <h1 className="title notosans-bold-white-26px">{title}</h1>
          <img className="messenger" src={messenger} />
          <img className="facebook-circular-logo" src={facebookCircularLogo} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
