import React, { useState, useEffect, useRef } from "react";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVidPosNode = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {
    ScrollToSmoothly(500, 1000);
    // Set default video post for the session
    window.sessionStorage.setItem('slug', slug);
  }, [firstVideoPosition]); // Need this dependency to have the scrolling
 
};

export default SetFirstVidPosNode;


// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview"

