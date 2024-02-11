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
        ({ id, isExternal, href, label, title, singleRoutePath }) => {
          const isActive = checkMenuActive(href, singleRoutePath);
          return (
            <li key={`nav-item-${id}`} className={navListItemStyles}>
              {isExternal ? (
                <a href={href} title={title} className={navLinkStyles}>
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  title={title}
                  className={cx(navLinkStyles, isActive && "active")}
                  {...(isActive
                    ? {
                        "aria-current": "page",
                      }
                    : {})}
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
