const RetainPosOrJumpToTop = (initVidBlwRef, numberOfVideosBelow) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve(initVidBlwRef.current);
  });
  myPromise
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = (element, behavior) => {
    const scrollTop = document.documentElement.scrollTop;

    // Jump to top...
    if (numberOfVideosBelow === 1 || numberOfVideosBelow === 0 || window.innerHeight + scrollTop >= document.documentElement.offsetHeight) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain Position
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