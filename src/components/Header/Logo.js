import Link from "next/link";
import { css } from "@linaria/core";

import { media } from "@/styles/breakpoints";

import LogoIcon from "./LogoIcon";

const titleLinkStyles = css`
  &,
  &:active {
    color: var(--text-primary);
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
  display: inline-flex;
  justify-self: center;
  grid-column: 1 / span 3;
  ${media.sm} {
    justify-self: flex-start;
    grid-column: 1 / span 1;
  }
`;

const Logo = () => (
  <Link href="/" className={titleLinkStyles}>
    <LogoIcon />
    <span className="visually-hidden">
      Visit stephin gasper&apos;s homepage
    </span>
  </Link>
);

export default Logo;
