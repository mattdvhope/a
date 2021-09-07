import ReachedButtomOfDoc from './ReachedButtomOfDoc'

const RetainPosOrJumpToTop = (initVidBlwRef, numberOfVideosBelow) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve(initVidBlwRef.current);
  });
  myPromise
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = (element, behavior) => {
    const windowScreenHeight = window.innerHeight
    const initVidBlwHeight = initVidBlwRef.current.offsetHeight;

    // Jump to top of document when bottom reached
    if (numberOfVideosBelow === 1 || numberOfVideosBelow === 0 || ReachedButtomOfDoc()) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain window screen Position when 'more' above/below videos are appended
      const diff = windowScreenHeight - initVidBlwHeight;
      const gap = diff >= 0 ? diff : 0;
      window.parent.scrollTo({
        top: initVidBlwRef.current.offsetTop - gap,
        behavior: behavior || 'instant'
      })
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;