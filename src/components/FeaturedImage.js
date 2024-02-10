"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@linaria/core";
import { getImageProps } from "next/image";
import ImagePreload from "./ImagePreload";

const gifWrapperStyles = css`
  margin-top: 1.25rem;
  text-align: center;
`;

const FeaturedImage = ({ src, alt, staticImageSrc }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const commonProps = {
    width: 300,
    height: 259,
    alt,
    priority: true,
  };

  const {
    props: { src: staticImageSrcProp, ...staticImageAttributes },
  } = getImageProps({
    ...commonProps,
    src: staticImageSrc,
  });

  const {
    props: { fetchPriority, src: imageSrcProp, ...imageAttributes },
  } = getImageProps({
    ...commonProps,
    src,
  });

  const onImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <ImagePreload src={staticImageSrcProp} {...staticImageAttributes} />
      <ImagePreload
        src={imageSrcProp}
        fetchPriority={fetchPriority}
        {...imageAttributes}
      />
      <div className={gifWrapperStyles}>
        {
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            {...imageAttributes}
            // eslint-disable-next-line react/no-unknown-property
            fetchpriority={fetchPriority}
            src={imageLoaded ? imageSrcProp : staticImageSrcProp}
            onLoad={onImageLoad}
          />
        }
      </div>
    </>
  );
};

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  staticImageSrc: PropTypes.string.isRequired,
};

export default FeaturedImage;
