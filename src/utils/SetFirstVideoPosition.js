import React, { useState, useEffect, useRef } from "react";

  // To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef) => {

  const [firstVideoPosition, setFirstVideoPosition] = useState(null);
  const [rerender, setRerender] = useState(); // or any state
  const [afterRender, setAfterRender] = useState();// internal state

  useEffect(() => {
    if (!afterRender) return;
    setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top);
    setAfterRender(false);
  }, [afterRender]);

  useEffect(() => {
    setAfterRender(true); // (1) will be called after DOM rendered
  }, [rerender]); // or don't set any if you want to listen to all re-render events


  useEffect(() => {
console.log("HEREEEEE")
    if (sessionStorage.getItem("videoPositioned") !== "true") {
console.log(firstVideoPosition)
      Promise.resolve(PositionVideo()).then(res => {
console.log("HERE2222")
        sessionStorage.setItem("videoPositioned", "true")
      })
    };

    function PositionVideo() {
      if (firstVideoPosition !== null) {
        setTimeout(function(){
          window.scrollTo({
            top: firstVideoPosition,
            behavior: "smooth"
          })
        }, 1200);
      };
    };
  }, [firstVideoPosition]);
 
};

export default SetFirstVideoPosition;



