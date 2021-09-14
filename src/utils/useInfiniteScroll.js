import { useState, useLayoutEffect } from 'react';
import ReachedBottomOfDoc from './ReachedBottomOfDoc'

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!ReachedBottomOfDoc()) return;
      setIsFetching(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // useLayoutEffect

  useLayoutEffect(() => {
    if (!isFetching) return;
    elementsFromScrolling();
  }, [isFetching]);

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;