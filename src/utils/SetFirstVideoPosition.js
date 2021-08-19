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

  if (firstVideoPosition !== null) {
    setTimeout(function(){
      window.scrollTo({
        top: firstVideoPosition,
        behavior: "smooth"
      })
    }, 1800);
  };

};

export default SetFirstVideoPosition;



