// import { ScrollElementIntoView } from "../utils/ScrollElementIntoView";

const RetainInitVidBlwPos = (initVidBlwRef) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve('foo');
  });

  myPromise
  .then(res => initVidBlwRef.current)
  .then(res => ScrollElementIntoView(res, 'instant'))
  .catch(err => console.log("error: ", err));

  // Replacement for the now unusable JS method, 'ScrollIntoView()'
  const ScrollElementIntoView = (element, behavior) => {

    // let scrollTop = window.pageYOffset || element.scrollTop
    let scrollTop = element.scrollTop

    // Furthermore, if you have for example a 'container' outside the element 
    // you need to factor in its dimensions when calculating the position to scroll to
    const headerOutsideIframe = window.parent.document.getElementsByClassName('container')[0].clientHeight

    const finalOffset = element.getBoundingClientRect().top + scrollTop + headerOutsideIframe;

console.log(element.getBoundingClientRect().top)
console.log(scrollTop)
console.log(headerOutsideIframe)
console.log(document.documentElement.offsetHeight)

    window.parent.scrollTo({
      top: finalOffset,
      behavior: behavior || 'instant'
    })
  }
 
};

export default RetainInitVidBlwPos;



