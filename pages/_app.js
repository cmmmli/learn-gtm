import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TagManager from "react-gtm-module";
import { parseCookies, setCookie } from "nookies";

import "../styles/globals.css";

const user_id_key = "test_user_id";

function MyApp({ Component, pageProps }) {
  let uuid = parseCookies().test_user_id;

  if (uuid == null) {
    uuid = uuidv4();
    setCookie(null, user_id_key, uuid, { expires: 60 * 60 * 24 });
  }

  const tagManagerArgs = useMemo(() => {
    return {
      gtmId: "GTM-WLMMSC8",
      dataLayer: {
        userId: uuid,
      },
    };
  }, [uuid]);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [tagManagerArgs]);

  return <Component {...pageProps} />;
}

export default MyApp;
