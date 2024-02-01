import PropTypes from "prop-types";
import { css } from "@linaria/core";
import { media } from "@/styles/breakpoints";

const figureStyles = css`
  margin: 0;
  line-height: 0;
`;

const skillImageStyles = css`
  width: 3.438rem;
  height: 3.438rem;
  ${media.sm} {
    width: 4.688rem;
    height: 4.688rem;
  }
`;

const Skill = ({ src, alt }) => {
  return (
    <figure className={figureStyles}>
      <img alt={alt} title={alt} src={src} className={skillImageStyles} />
    </figure>
  );
};

Skill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Skill;
