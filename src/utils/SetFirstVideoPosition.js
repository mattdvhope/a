import React, { useState, useEffect, useRef } from "react";
import { detect } from "detect-browser";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {

    const browser = detect();

    if (browser.name === "node") {
      ScrollToSmoothly(500, 1000);
    } else {

      const myPromise = new Promise((resolve, reject) => {
        resolve(setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top));
      });

      const scrollSpeed = browser.name === "chromium-webview" ? 1400 : 700;

      myPromise
      // .then(res => firstVideoPosition || firstVideoPosition === 0 ? ScrollToSmoothly(firstVideoPosition, scrollSpeed) : null)
      .then(res => {
        if (firstVideoPosition || firstVideoPosition === 0) {
          ScrollToSmoothly(firstVideoPosition, scrollSpeed);
          console.log("in then");
        }
      })
      .catch(err => console.log("error: ", err));

    } // if-else

 
    // To set default video post for the session
    window.sessionStorage.setItem('slug', slug);

  }, [firstVideoPosition]); // Need this dependency to have the scrolling
 
};

export default SetFirstVideoPosition;



