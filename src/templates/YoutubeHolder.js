import React, { useEffect, useState } from "react";
import { fbq } from '@hutsoninc/gatsby-plugin-facebook-pixel';
import { youtubeEmbeddable } from "../utils/youtubeEmbeddable";
import YoutubeVideo from "./YoutubeVideo";
import ButtonForPrompt from "./ButtonForPrompt";

import "./BlogPost.css";

const YoutubeHolder = ({data}) => {
  const prompts = data.promptsForResponse;
  const [promptsElementNum, setPrompt] = useState(0);
  const [buttonName,setButtonName] =useState("")
  useEffect(() => {
    setButtonName(prompts[promptsElementNum].buttonInvitation);
  },[])
  const scrollToTopOfBlog = () => window.innerWidth < 500 ? window.scrollTo(0, 0) : null
console.log(promptsElementNum,"promptsElementNum")
  const ButtonProvidedIfNeeded = () => {
    if (promptsElementNum === 0) {
      return (
        <div>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedFirstButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompt(promptsElementNum + 1);
              scrollToTopOfBlog();
            }}
            buttonName={buttonName}
             />
        </div>)
    } else if (promptsElementNum !== prompts.length-1) {
      return (
        <div>
          <h2
            onClick={() => {
              setPrompt(promptsElementNum - 1);
              scrollToTopOfBlog();
            }}
          >⬅️&nbsp;</h2>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedNextButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompt(promptsElementNum + 1);
              scrollToTopOfBlog();
            }}
            buttonName={buttonName} 
            />
        </div>)
    } else if (promptsElementNum === prompts.length-1) {
      return (
        <div>
          <br/>
          <h1
            onClick={() => {
              setPrompt(promptsElementNum - 1);
              scrollToTopOfBlog();
            }}
          >⬅️&nbsp;</h1>
        </div>)
    }
  }
  

  const promptss = data.promptsForResponse;
  const [promptsEleNum, setPrompts] = useState(0);
  
  const buttonWord = promptss[promptsEleNum]?.buttonInvitation;

  const scrollToTopOOfBlogs = () => window.innerWidth < 500 ? window.scrollTo(0, 0) : null

  const ButtonProvidedNeeded = () => {
    if (promptsEleNum === 1) {
      return (
        <div>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedLastButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompts(promptsEleNum + 1);
              scrollToTopOOfBlogs();
            }}
            buttonName={buttonName}
             />
        </div>)
    } else if (promptsEleNum !== promptss.length - 1) {
      return (
        <div>
          <h2
            onClicks={() => {
              setPrompts(promptsEleNum - 1);
              scrollToTopOOfBlogs();
            }}
          >⬅️&nbsp;</h2>
          <ButtonForPrompt
            onClick={() => {
              fbq('trackCustom', 'ClickedNextButton'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
              setPrompts(promptsEleNum + 1);
              // scrollToTopOfBlogs();
            }}
            buttonName={buttonName} 
            />
        </div>)
    } else if (promptsEleNum === promptss.length - 1) {
      return (
        <div>
          <br/>
          <h1
            onClicks={() => {
              setPrompts(promptsEleNum - 1);
              // scrollToTopOfBlog();
            }}
          >⬅️&nbsp;</h1>
        </div>)
    }
  }

  return (
    <div className="container-fluid blog-container">
      <div className="blog-content">
        <YoutubeVideo src={youtubeEmbeddable(data.youtubeUrl)} title={data.title} />
        <div className="text-and-button">
          <div
            className="text-under-video"
            dangerouslySetInnerHTML={{
              __html: prompts[promptsElementNum].promptContent.promptContent
            }}
          />
          {ButtonProvidedIfNeeded(),
          ButtonProvidedNeeded()}
        </div>
      </div>
    </div>
  )

} 

export default YoutubeHolder;