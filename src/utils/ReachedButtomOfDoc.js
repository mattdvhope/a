import { detect } from "detect-browser";
import InRangeOfDocHeight from './InRangeOfDocHeight'


const ReachedButtomOfDoc = () => {

	// maybe use Math.ceil??? if Android doesn't work????
  const heightAboveWindowScreen = Math.ceil(document.documentElement.scrollTop);
  const windowScreenHeight = Math.ceil(window.innerHeight);
  const heightOfDocument = Math.ceil(document.documentElement.offsetHeight);

  const browser = detect();

  if (browser.name === "chromium-webview") {
		return InRangeOfDocHeight(heightAboveWindowScreen, windowScreenHeight, heightOfDocument); 	
  } else {
  	return heightAboveWindowScreen + windowScreenHeight >= heightOfDocument;
  }

}


export default ReachedButtomOfDoc;

// Various browsers:
// browser.name === "node"
// browser.name === "facebook"
// browser.name === "safari"
// browser.name === "ios"
// browser.name === "chromium-webview")