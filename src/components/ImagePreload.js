"use client";

import PropTypes from "prop-types";
import Head from "next/head";

const ImagePreload = ({
  src,
  srcSet,
  sizes,
  crossOrigin,
  referrerPolicy,
  fetchPriority,
}) => {
  const opts = {
    as: "image",
    imageSrcSet: srcSet,
    imageSizes: sizes,
    crossOrigin,
    referrerPolicy,
    fetchpriority: fetchPriority,
  };

  return (
    <Head>
      <link
        key={`__nimg-${src}${srcSet}${sizes}`}
        rel="preload"
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href={srcSet ? undefined : src}
        {...opts}
      />
    </Head>
  );
};

ImagePreload.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  crossOrigin: PropTypes.string,
  referrerPolicy: PropTypes.string,
  fetchPriority: PropTypes.string,
};

export default ImagePreload;
