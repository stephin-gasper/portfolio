import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppSettings } from "@headstartwp/next";

const PageSEO = ({ title, description }) => {
  const { data } = useAppSettings();
  const router = useRouter(); // Get the router instance

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const siteDescription = description || data.settings.site_desc;
  const siteName = data.settings.site_name;

  return (
    <Head>
      <meta
        name="robots"
        content="max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
      <title>{`${title} - ${siteName}`}</title>
      <meta name="description" content={siteDescription} />
      {/* Open Graph metatags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_EN" />
    </Head>
  );
};

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

PageSEO.defaultProps = {
  description: "",
};

export default PageSEO;
