import PropTypes from "prop-types";
import { css } from "@linaria/core";
import Image from "next/image";

import { media } from "@/styles/breakpoints";

const figureStyles = css`
  margin: 0;
  line-height: 0;
  position: relative;
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
      <Image
        alt={alt}
        title={alt}
        src={src}
        fill
        unoptimized
        sizes="100vw"
        loading="lazy"
      />
    </figure>
  );
};

Skill.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Skill;
