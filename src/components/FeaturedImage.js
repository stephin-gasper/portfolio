import PropTypes from "prop-types";
import { css } from "@linaria/core";
import Image from "next/image";

const gifWrapperStyles = css`
  margin-top: 1.25rem;
  text-align: center;
`;

const FeaturedImage = ({ src, alt }) => (
  <div className={gifWrapperStyles}>
    <Image
      width="300"
      height="259"
      alt={alt}
      src={src}
      placeholder="blur"
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    />
  </div>
);

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FeaturedImage;
