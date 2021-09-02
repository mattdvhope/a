const RetainInitVidBlwPos = (initVidBlwRef) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve(initVidBlwRef.current);
  });

  myPromise
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = (element, behavior) => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("in if");
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else {
      console.log("in else");
      let scrollTop = window.pageYOffset || element.scrollTop

      // Furthermore, if you have for example a 'container' outside the element 
      // you need to factor in its dimensions when calculating the position to scroll to
      const headerOutsideIframe = window.parent.document.getElementsByClassName('container')[0].clientHeight

      const finalOffset = element.getBoundingClientRect().top + scrollTop + headerOutsideIframe - element.offsetHeight;

      window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'instant'
      })
    }

  } // ScrollElementIntoView
 
};

export default RetainInitVidBlwPos;