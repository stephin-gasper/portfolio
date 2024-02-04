import { cx } from "@linaria/core";
import PropTypes from "prop-types";

import {
  footBtnStyles,
  footBtnIconStyles,
  footerLinksStyles,
} from "./FooterLinks.style";

const FooterLinks = ({ navigationLinks }) => (
  <ul className={footerLinksStyles}>
    {navigationLinks.map(({ id, href, label }) => (
      <li key={`footer-li-${id}`}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={footBtnStyles}
        >
          <span className={cx(`${id}-icon`, footBtnIconStyles)}>{label}</span>
        </a>
      </li>
    ))}
  </ul>
);

FooterLinks.propTypes = {
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FooterLinks;
