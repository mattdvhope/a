import { useState, useEffect } from 'react';
import ReachedButtomOfDoc from './ReachedButtomOfDoc'

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {
      if (!ReachedButtomOfDoc()) return;
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