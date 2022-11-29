import {useEffect} from "react"
import "../styles/globals.css";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WLMMSC8",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
