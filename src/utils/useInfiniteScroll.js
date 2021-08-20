import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (initialElements, elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    initialElements(() => {
      console.log('called back');
    });

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