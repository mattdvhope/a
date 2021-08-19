import React, { useState, useEffect, useRef } from "react";

  // To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  useEffect(() => {
    let myPromise = new Promise(function(resolve, reject) {
      resolve(setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top))
    });

    myPromise.then(
      function(value) { PositionVideo() },
      function(error) { console.log("error") }
    );

    function PositionVideo() {
        setTimeout(function(){
          window.scrollTo({
            top: firstVideoPosition,
            behavior: "smooth"
          })
        }, 1200);
    };
  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



