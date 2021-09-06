import { useState, useEffect } from 'react';

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {
    const handleScroll = () => {
      const winHt = Math.ceil(window.innerHeight);
      const scrollTop = Math.ceil(document.documentElement.scrollTop);
      const docHt = Math.ceil(document.documentElement.offsetHeight);

      // console.log(Array(7).fill(winHt + scrollTop).map((x, y) => x + y).includes(docHt))

      // if (winHt + scrollTop !== docHt) {
      if (!(Array(7).fill(winHt + scrollTop).map((x, y) => x + y).includes(docHt))) {
        return;
      } 
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