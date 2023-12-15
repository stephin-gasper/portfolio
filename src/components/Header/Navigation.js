import PropTypes from "prop-types";
import Link from "next/link";

import {
  navListItemStyles,
  navLinkStyles,
  navListStyles,
} from "./Navigation.style";

const Navigation = ({ navigationLinks }) => (
  <ul className={navListStyles}>
    {navigationLinks.map(({ id, isExternal, href, label }) => (
      <li key={`nav-item-${id}`} className={navListItemStyles}>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={navLinkStyles}
          >
            {label}
          </a>
        ) : (
          <Link href={href} className={navLinkStyles}>
            {label}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

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
