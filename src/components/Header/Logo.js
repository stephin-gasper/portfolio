import { useAppSettings } from "@headstartwp/next";
import Link from "next/link";
import { css, cx } from "@linaria/core";

import { media } from "@/styles/breakpoints";

import { headerLinkStyles } from "./Header.style";

const titleLinkStyles = css`
  font-size: 1.3rem;
  text-align: center;
  grid-column: 1 / span 3;
  ${media.sm} {
    text-align: left;
    grid-column: 1 / span 1;
  }
`;

const NAME = "Stephin Gasper";

const Logo = () => {
  const { data, loading } = useAppSettings();

  if (loading) {
    return null;
  }

  return (
    <Link
      href={data?.settings?.site_url || "/"}
      className={cx(headerLinkStyles, titleLinkStyles)}
    >
      {NAME}
    </Link>
  );
};

export default Logo;
