import { HeadlessApp } from "@headstartwp/next";
import Router from "next/router";
import NProgress from "nprogress";

import "../styles/globals.css";
import "nprogress/nprogress.css";

import Link from "@/components/Link";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  // only HeadlessApp needs fallback and themeJson, so we remove them from the props we pass down to the pages

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { fallback = {}, themeJson = {}, ...props } = pageProps;

  return (
    <HeadlessApp
      pageProps={pageProps}
      swrConfig={{
        /**
         * Setting this to true will refetch content whenever the tab is refocused
         */
        revalidateOnFocus: false,
        /**
         * Settings this to true will refetch content whenever the connection is reestablished
         */
        revalidateOnReconnect: false,
        /**
         * Setting this to true will refetch content after initial load
         */
        revalidateOnMount: false,
      }}
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
