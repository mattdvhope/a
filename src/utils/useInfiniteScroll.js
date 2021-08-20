import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above when window top reached
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) return;
      setIsFetching(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Add elements above when window bottom reached
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setIsFetching(true);
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