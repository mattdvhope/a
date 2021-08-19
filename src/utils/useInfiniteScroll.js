import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (callback, callback2) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    callback(() => {
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
    callback2();
  }, [isFetching]);

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;