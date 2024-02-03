import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import Image from "next/image";

import {
  projectImageSlideWrapperStyles,
  projectImageStyles,
} from "./ProjectImageSlider.style";
import { PROJECT_IMAGE_ALT } from "./ProjectImageSlider.constants";

const ProjectImage = ({ src, containerAccessibility }) => (
  <li
    className={cx(projectImageSlideWrapperStyles, "dyamic-image-wrapper")}
    {...containerAccessibility}
  >
    <Image
      fill
      sizes="100vw"
      placeholder="blur"
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      src={src}
      alt={PROJECT_IMAGE_ALT}
      unoptimized
      className={cx(projectImageStyles, "dyamic-image")}
    />
  </li>
);

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
  containerAccessibility: PropTypes.shape({}),
};

ProjectImage.defaultProps = {
  containerAccessibility: {},
};

export default ProjectImage;
