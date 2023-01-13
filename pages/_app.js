import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TagManager from "react-gtm-module";
import { parseCookies, setCookie } from "nookies";

import "../styles/globals.css";
import { useRouter } from "next/router";

const user_id_key = "test_user_id";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  let uuid = parseCookies().test_user_id;

  if (uuid == null) {
    uuid = uuidv4();
    setCookie(null, user_id_key, uuid, { maxAge: 60 * 60 * 24 });
  }

  const tagManagerArgs = useMemo(() => {
    return {
      gtmId: "GTM-WLMMSC8",
      dataLayer: {
        user_id: pathname.includes("without_userid") ? undefined : uuid,
      },
    };
  }, [pathname, uuid]);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [pathname, tagManagerArgs]);

  return <Component {...pageProps} />;
}

export default MyApp;
