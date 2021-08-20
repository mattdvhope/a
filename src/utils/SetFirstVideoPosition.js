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
    .then(
      function(value) { ScrollToSmoothly(firstVideoPosition, 2200) },
      function(error) { console.log("error") }
    )
    .then(
      function(value) { ScrollToSmoothly(firstVideoPosition, 2200) },
      function(error) { console.log("error") }
    )
    .then(
      function(value) { ScrollToSmoothly(firstVideoPosition, 2200) },
      function(error) { console.log("error") }
    )
    .then(
      function(value) { ScrollToSmoothly(firstVideoPosition, 2200) },
      function(error) { console.log("error") }
    );
  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



