const RetainPosOrJumpToTop = (initVidBlwRef, videosBelowNumber) => {

// REFACTOR INTO TWO FILES!!!!!!
// TAKE OUT (MAYBE) window.innerHeight + scrollTop >= document.documentElement.offsetHeight

  const myPromise = new Promise((resolve, reject) => {
    resolve(initVidBlwRef.current);
  });
  myPromise
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = (element, behavior) => {
    const scrollTop = document.documentElement.scrollTop;
    if (videosBelowNumber === 1 || videosBelowNumber === 0 || window.innerHeight + scrollTop >= document.documentElement.offsetHeight) {
      console.log("in if");
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain Position
      console.log("in else");
      const containerElementHeight = window.parent.document.getElementsByClassName('container')[0].clientHeight
      const finalOffset = element.getBoundingClientRect().top + scrollTop + containerElementHeight - element.offsetHeight;
      window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'instant'
      })
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;