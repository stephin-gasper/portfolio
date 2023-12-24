import PropTypes from "prop-types";
import { css } from "@linaria/core";
import { media } from "@/styles/breakpoints";

const figureStyles = css`
  margin: 0;
  line-height: 0;
`;

const skillImageStyles = css`
  width: 1.875rem;
  height: 1.875rem;
  ${media.sm} {
    width: 2.875rem;
    height: 2.875rem;
  }
`;

const Skill = ({ src, alt }) => {
  return (
    <figure className={figureStyles}>
      <img alt={alt} src={src} className={skillImageStyles} />
    </figure>
  );
};

Skill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Skill;
