import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {
      const topOfWindowNow = document.documentElement.scrollTop
      if (window.innerHeight + topOfWindowNow !== document.documentElement.offsetHeight && topOfWindowNow !== 0) return;
      if (topOfWindowNow !== 0) {
        setIsFetching(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    if (!isFetching) return;
    elementsFromScrolling();
  }, [isFetching]);

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;