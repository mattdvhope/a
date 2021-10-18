import React from "react"
import "./BlogPost.css";

const ButtonForPrompt = ({onClick, buttonWords}) => {
	return (
		<button
      id="button-for-youtube-survey"
      type="button"
      className="btn btn-outline-success green-button"
      onClick={onClick}
    >
      {buttonWords}
    </button>
  )
}

export default ButtonForPrompt
