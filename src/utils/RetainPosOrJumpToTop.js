import { detect } from 'detect-browser';

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
      const browser = detect();
      const initVidBlwHeight = initVidBlwRef.current.offsetHeight;
      const diff = windowScreenHeight - initVidBlwHeight;

      if (browser.name === "node" || browser.name === "facebook" || browser.name === "safari" || browser.name === "ios") {
        const gap = diff >= 0 ? diff : 0;
        window.parent.scrollTo({
          top: initVidBlwRef.current.offsetTop - gap,
          behavior: behavior || 'instant'
        })
      } else if (browser.name === "chromium-webview") {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        })
      }
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;