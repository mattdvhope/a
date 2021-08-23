import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (elementsFromScrolling, firstVideoRef, initVidAbvRef, initVidBlwRef) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {

      console.log(document.documentElement.scrollTop);

      if (document.documentElement.scrollTop === 0) {
        window.scrollTo({
          top: document.body.scrollHeight - 10,
          behavior: 'instant'
        });
      } else {
        const scrollTop = document.documentElement.scrollTop;
        if (window.innerHeight + scrollTop !== document.documentElement.offsetHeight) return;
        if (firstVideoRef.current.offsetHeight + initVidAbvRef.current.offsetHeight + initVidBlwRef.current.offsetHeight < document.documentElement.offsetHeight - 1000) {
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        } else {
          setIsFetching(true);
        }
      } // if - else
    }; // handleScroll

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // useEffect

  useEffect(() => {
    if (!isFetching) return;
    elementsFromScrolling();
  }, [isFetching]);

  return [isFetching, setIsFetching];


};

export default useInfiniteScroll;