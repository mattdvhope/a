import React, { useState, useEffect, useRef } from "react";
import { detect } from "detect-browser";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {

    const browser = detect();
    const node = /node/i;
    const fb = /facebook/i;

    if (JSON.stringify(node.test(browser.name.toString())) || JSON.stringify(fb.test(browser.name.toString()))) {
      ScrollToSmoothly(500, 1000);
    } else {
      const myPromise = new Promise((resolve, reject) => {
        resolve(setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top));
      });
      const scrollSpeed = browser.name === "chromium-webview" ? 1800 : 1200;
      myPromise
      .then(res => firstVideoPosition || firstVideoPosition === 0 ? ScrollToSmoothly(firstVideoPosition, scrollSpeed) : null)
      .catch(err => console.log("error: ", err));
    } // if-else

 
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

