import { HeadlessApp } from "@headstartwp/next";
import Link from "next/link";

import "../styles.css";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  // only HeadlessApp needs fallback and themeJson, so we remove them from the props we pass down to the pages

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { fallback = {}, themeJson = {}, ...props } = pageProps;

  return (
    <HeadlessApp
      pageProps={pageProps}
      settings={{
        // instruct the framework to use Next.js link component or your own version
        linkComponent: Link,
      }}
    >
      <Component {...props} />
    </HeadlessApp>
  );
};

export default MyApp;
