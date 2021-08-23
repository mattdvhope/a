const RetainInitVidBlwPos = (initVidBlwRef) => {


  initVidBlwRef.current.scrollIntoView();

  console.log(initVidBlwRef.current)

  // window.addEventListener("scroll", handleScroll);

  // const blogElement = initVidBlwRef.current;

  // eventFire(blogElement, 'click');

  // function eventFire(el, etype){

  //   console.log(el);

  //   if (el.fireEvent) {
  //     el.fireEvent('on' + etype);
  //   } else {
  //     var evObj = document.createEvent('Events');
  //     evObj.initEvent(etype, true, false);
  //     el.dispatchEvent(evObj);
  //   }
  // }


 
};

export default RetainInitVidBlwPos;



