import PropTypes from "prop-types";
import { css } from "@linaria/core";

const gifWrapperStyles = css`
  margin-top: 1.25rem;
  text-align: center;
`;

const FeaturedImage = ({ src, alt }) => (
  <div className={gifWrapperStyles}>
    <img width="300" height="259" alt={alt} src={src} />
  </div>
);

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FeaturedImage;
