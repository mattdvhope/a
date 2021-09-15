import React, { useState, useEffect, useRef } from "react";
import { detect } from "detect-browser";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {
    const browser = detect();
    const scrollSpeed = browser.name === "chromium-webview" ? 1800 : 1200;

    const top = firstVideoRef.current.getBoundingClientRect().top;
    const scrollIntoPosition = () => firstVideoPosition > 0 ? ScrollToSmoothly(firstVideoPosition, scrollSpeed) : null


    const myPromise = new Promise((resolve, reject) => {
      resolve(setFirstVideoPosition(top));
      
      reject(scrollIntoPosition());

      // reject(setFirstVideoPosition(top));
      // reject(ScrollToSmoothly(600, 1000));
    });
    myPromise
    .then(res => scrollIntoPosition())
    // .then(res => {
    //   console.log(res);
    //   if (firstVideoPosition > 0) {
    //     ScrollToSmoothly(firstVideoPosition, scrollSpeed)
    //   };
    // })
    .catch(err => console.log("error: ", err));

 
    // To set default video post for the session
    window.sessionStorage.setItem('slug', slug);

  }, [firstVideoPosition]); // Need this dependency to have the scrolling
 
};

export default SetFirstVideoPosition;


// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview"

