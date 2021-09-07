import ReachedButtomOfDoc from './ReachedButtomOfDoc'

const RetainPosOrJumpToTop = (initVidBlwRef, numberOfVideosBelow) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve();
  });

console.log("ReachedButtomOfDoc??...", ReachedButtomOfDoc());

  myPromise
  .then(res => ScrollElementIntoView())
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = () => {
    const windowScreenHeight = window.innerHeight;

    // Jump to top of document when bottom reached
    if (numberOfVideosBelow === 1 || numberOfVideosBelow === 0 || ReachedButtomOfDoc()) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain window screen Position when 'more' above/below videos are appended
      const initVidBlwHeight = initVidBlwRef.current.offsetHeight;
      const diff = windowScreenHeight - initVidBlwHeight;
      const gap = diff >= 0 ? diff : 0;
      window.parent.scrollTo({
        top: initVidBlwRef.current.offsetTop - gap,
        behavior: 'instant'
      })
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;