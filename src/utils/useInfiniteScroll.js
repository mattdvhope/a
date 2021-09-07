import { useState, useEffect } from 'react';
import { detect } from "detect-browser";
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

      const browser = detect();

      if (browser.name === "chromium-webview") {
        if (!InRangeOfDocHeight(scrollTop, winHt, docHt)) return;
      } else {
        if (scrollTop + winHt !== docHt) return;
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

// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview")