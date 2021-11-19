import React from "react"
import "./Contact.css"
import "../../../Contact2/globals.css"
import "../../../Contact2/styleguide.css"

const Contact = props => {
  const { title, text1, messengerLogo} = props

  return (
    <div className="container-center-horizontal">
      <div className="contact screen">
        <div className="overlap-group">
          <img
            className="vector"
            alt=""
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/vector@1x.svg"
          />
          <img
            alt=""
            className="big-dark-rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/613ef1fcd9c4d2c5e96f0e0f/img/rectangle-1@1x.svg"
          />
          <img
            alt=""
            className="rectangle-37"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-37@2x.svg"
          />
          <img
            alt=""
            className="rectangle-48"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-48@2x.svg"
          />
          <img
            alt=""
            className="rectangle-38"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-38@2x.svg"
          />
          <img
            alt=""
            className="rectangle-47"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-47@2x.svg"
          />
          <img
            alt=""
            className="rectangle-46"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-46@2x.svg"
          />
          <img
            alt=""
            className="rectangle-42"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-42@2x.svg"
          />
          <img
            alt=""
            className="rectangle-39"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-39@2x.svg"
          />
          <img
            alt=""
            className="rectangle-49"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-49@2x.svg"
          />
          <img
            alt=""
            className="rectangle-45"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-45@2x.svg"
          />
          <img
            alt=""
            className="rectangle-44"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-44@2x.svg"
          />
          <img
            alt=""
            className="rectangle-40"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-40@2x.svg"
          />
          <img
            alt=""
            className="rectangle-43"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-43@2x.svg"
          />
          <img
            alt=""
            className="rectangle-41"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-41@2x.svg"
          />
          <img
            alt=""
            className="rectangle-51"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/rectangle-51@2x.svg"
          />
          <img
            className="group-5"
            alt=""
            src="https://anima-uploads.s3.amazonaws.com/projects/61392976e87edf415321004d/releases/61392a07173bee6db2de22b4/img/group-5-1@2x.png"
          />
          <img
            alt=""
            className="green-rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/green-rectangle@1x.svg"
          />
          <h1 className="title-of-template notosans-bold-white-26px">
            {title}
          </h1>
          <div className="text-1-template">{text1}</div>

          <div className="overlap-group1">
            <a href="http://m.me/relationshipsthailand">
              <img alt=""className="messengerLogo" src={messengerLogo} />
            </a>
          </div>

          <div className="jesus-icon">
            <a href="http://m.me/relationshipsthailand">
              <img
                alt=""
                src="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/jesus-icon@2x.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
