"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@linaria/core";
import Image from "next/image";

const imageWrapperStyles = css`
  text-align: center;
`;

const FeaturedImage = ({ src, alt, staticImageSrc }) => {
  const [imageSrc, setImageSrc] = useState(staticImageSrc);

  const onImageLoad = () => {
    setImageSrc(src);
  };

  return (
    <div className={imageWrapperStyles}>
      <Image
        width="300"
        height="259"
        alt={alt}
        src={imageSrc}
        priority
        onLoad={onImageLoad}
      />
    </div>
  );
};

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  staticImageSrc: PropTypes.string.isRequired,
};

export default FeaturedImage;
