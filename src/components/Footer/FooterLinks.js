import PropTypes from "prop-types";

import {
  footBtnStyles,
  footBtnIconStyles,
  footerLinksStyles,
} from "./FooterLinks.style";

const FooterLinks = ({ navigationLinks }) => (
  <ul className={footerLinksStyles}>
    {navigationLinks.map(({ id, href, label, icon: Icon }) => (
      <li key={`footer-li-${id}`}>
        <a href={href} className={footBtnStyles}>
          <Icon
            aria-hidden="true"
            focusable="false"
            role="img"
            className={footBtnIconStyles}
          />
          <span className="visually-hidden">{label}</span>
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
