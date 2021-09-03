const RetainPosOrJumpToTop = (initVidBlwRef, numberOfVideosBelow) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve(initVidBlwRef.current);
  });
  myPromise
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = (element, behavior) => {
    const heightAboveWindowScreen = document.documentElement.scrollTop;
    const windowScreenHeight = window.innerHeight
    const heightOfDocument = document.documentElement.offsetHeight;

    // Jump to top after scrolling below either of the last two (firstVid) videos OR when the full feed hits bottom...
    if (numberOfVideosBelow === 1 || numberOfVideosBelow === 0 || heightAboveWindowScreen + windowScreenHeight >= heightOfDocument) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain window screen Position when 'more' above/below videos are appended
      const containerElementHeight = window.parent.document.getElementsByClassName('container')[0].clientHeight

      console.log(heightOfDocument)
      console.log(containerElementHeight)

      const finalOffset = element.getBoundingClientRect().top + heightAboveWindowScreen + containerElementHeight - element.offsetHeight;
      window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'instant'
      })
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;