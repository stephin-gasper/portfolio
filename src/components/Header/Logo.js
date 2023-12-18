import PropTypes from "prop-types";
import { useAppSettings } from "@headstartwp/next";
import Link from "next/link";
import { css } from "@linaria/core";

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

const Logo = ({ currentTheme }) => {
  const { data, loading } = useAppSettings();

  if (loading) {
    return null;
  }

  return (
    <Link href={data?.settings?.site_url || "/"} className={titleLinkStyles}>
      <img
        src={`/logo-${currentTheme}-theme.svg`}
        alt="logo"
        width={70}
        height={45}
      />
    </Link>
  );
};

Logo.propTypes = {
  currentTheme: PropTypes.string.isRequired,
};

export default Logo;
