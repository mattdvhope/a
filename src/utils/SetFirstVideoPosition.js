import React, { useState, useEffect, useRef } from "react";
import { ScrollToSmoothly } from "./ScrollToSmoothly"

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, slug) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {

    const myPromise = new Promise((resolve, reject) => {
      resolve('foo');
    });

    myPromise
    .then(res => setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top))
    .then(res => ScrollToSmoothly(firstVideoPosition, 1400))
    .catch(err => console.log("error: ", err));

    window.sessionStorage.setItem('slug', slug);

  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



