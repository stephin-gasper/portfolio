import { cx } from "@linaria/core";
import PropTypes from "prop-types";

import {
  projectImageSlideWrapperStyles,
  projectImageStyles,
} from "./ProjectImageSlider.style";
import { PROJECT_IMAGE_ALT } from "./ProjectImageSlider.constants";

const ProjectImage = ({ src, containerAccessibility }) => (
  <li className={projectImageSlideWrapperStyles} {...containerAccessibility}>
    <img
      src={src}
      alt={PROJECT_IMAGE_ALT}
      className={cx(projectImageStyles, "box-shadow")}
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
