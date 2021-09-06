import { useState, useEffect } from 'react';
import InRangeOfDocHeight from './InRangeOfDocHeight'

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.ceil(document.documentElement.scrollTop);
      const winHt = Math.ceil(window.innerHeight);
      const docHt = Math.ceil(document.documentElement.offsetHeight);

      if (!InRangeOfDocHeight(scrollTop, winHt, docHt)) return;
      setIsFetching(true);
    };

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