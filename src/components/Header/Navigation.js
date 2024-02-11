import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { cx } from "@linaria/core";

import {
  navListItemStyles,
  navLinkStyles,
  navListStyles,
} from "./Navigation.style";

const Navigation = ({ navigationLinks }) => {
  const router = useRouter();

  const checkMenuActive = (href, singleRoutePath) => {
    const paths = [href, singleRoutePath];
    return paths.some((path) => router.asPath.indexOf(path) > -1);
  };

  return (
    <ul className={navListStyles}>
      {navigationLinks.map(
        ({ id, isExternal, href, label, singleRoutePath }) => {
          return (
            <li key={`nav-item-${id}`} className={navListItemStyles}>
              {isExternal ? (
                <a
                  href={href}
                  className={cx(
                    navLinkStyles,
                    checkMenuActive(href, singleRoutePath) && "active",
                  )}
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={cx(
                    navLinkStyles,
                    checkMenuActive(href, singleRoutePath) && "active",
                  )}
                >
                  {label}
                </Link>
              )}
            </li>
          );
        },
      )}
    </ul>
  );
};

Navigation.propTypes = {
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
