import { detect } from "detect-browser";
import { ScrollToSmoothly } from "./ScrollToSmoothly";

// To set the first video's position AFTER the DOM loaded...////
const SetFirstVideoPosition = (firstVideoRef, firstVidIsInPosition) => {
    if (firstVidIsInPosition) return;
    const browser = detect();
    const scrollSpeed = browser.name === "chromium-webview" ? 1800 : 1200;
    const topOfFirstVid = firstVideoRef.current.getBoundingClientRect().top;
    ScrollToSmoothly(topOfFirstVid, scrollSpeed);
};

export default SetFirstVideoPosition;


// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview"