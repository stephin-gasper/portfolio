import PropTypes from "prop-types";
import Link from "next/link";
import { css } from "@linaria/core";
import Image from "next/image";

import { media } from "@/styles/breakpoints";

const titleLinkStyles = css`
  display: inline-flex;
  justify-self: center;
  grid-column: 1 / span 3;
  ${media.sm} {
    justify-self: flex-start;
    grid-column: 1 / span 1;
  }
`;

const Logo = ({ currentTheme }) => (
  <Link href="/" className={titleLinkStyles}>
    <Image
      src={`/logo-${currentTheme}-theme.svg`}
      alt="stephin portfolio home"
      width={70}
      height={45}
      unoptimized
    />
  </Link>
);

Logo.propTypes = {
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Logo;
