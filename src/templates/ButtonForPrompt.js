import React from "react"
import "./BlogPost.css"

const ButtonForPrompt = ({ onClick, buttonName }) => {
  return (
    <button
      id="button-for-youtube-survey"
      type="button"
      className="btn btn-outline-success green-button"
      onClick={onClick}
    >
      {buttonName}
    </button>
  )
}

export default ButtonForPrompt
