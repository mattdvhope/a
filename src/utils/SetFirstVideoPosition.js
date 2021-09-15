import React, { useState, useEffect } from "react";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => { // MAYBE TEST 'async' & 'await' here......
  const [firstVidIsInPosition, setFirstVidIsInPosition] = useState(false);
  useEffect(() => {
    // To set default video post for the session
    window.sessionStorage.setItem('slug', slug);

    // To scroll to first video's position (after initialVideosAbove & initialVideosBelow render)
    const aPromise = new Promise((resolve, reject) => {
      resolve();
    });
    aPromise
    .then(res => {
      if (firstVidIsInPosition) return; // this may not be necessary, but is there for good measure
      const topOfFirstVid = firstVideoRef.current.getBoundingClientRect().top;
      ScrollToSmoothly(topOfFirstVid, 1200);
      setFirstVidIsInPosition(true);
    })
  }, []);
};

export default SetFirstVideoPosition;


// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview"