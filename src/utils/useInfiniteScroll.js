import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (elementsFromScrolling, firstVideoRef, initVidAbvRef, initVidBlwRef) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      console.log(window.innerHeight)

      if (window.innerHeight + scrollTop !== document.documentElement.offsetHeight) return;


      setIsFetching(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    if (!isFetching) return;

    if (firstVideoRef.current.offsetHeight + initVidAbvRef.current.offsetHeight + initVidBlwRef.current.offsetHeight > document.documentElement.offsetHeight - 1000) {
      elementsFromScrolling();
    }

  }, [isFetching]);

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;