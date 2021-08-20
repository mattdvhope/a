import React, { useState, useEffect, useRef } from "react";
import { ScrollToSmoothly } from "./ScrollToSmoothly"

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {
    let myPromise = new Promise(function(resolve, reject) {
      resolve(setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top))
    });

    myPromise
    .then(res => {console.log(firstVideoPosition)})
    .then(
      function(value) { ScrollToSmoothly(firstVideoPosition, 1400) },
      function(error) { console.log("error") }
    );
  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



