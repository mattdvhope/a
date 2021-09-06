import React, { useState, useEffect, useRef } from "react";
import { detect } from "detect-browser";

import { ScrollToSmoothly } from "./ScrollToSmoothly"

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {

    const myPromise = new Promise((resolve, reject) => {
      resolve('foo');
    });

    const browser = detect();
    const scrollSpeed = browser.name === "chromium-webview" ? 3000 : 1400;

    myPromise
    .then(res => setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top))
    .then(res => ScrollToSmoothly(firstVideoPosition, scrollSpeed))
    .catch(err => console.log("error: ", err));

    window.sessionStorage.setItem('slug', slug);

  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



