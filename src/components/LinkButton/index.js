import PropTypes from "prop-types";
import { css } from "@linaria/core";
import Link from "next/link";

const linkButtonStyles = css`
  border-radius: 0.5em;
  border: 0.125em solid var(--border-primary);
  box-shadow: var(--border-primary) 0 0.3125em 0 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  padding: 0.9375em 1.5em;
  &:focus,
  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }
`;

const LinkButton = ({ url, icon: Icon, text, ...linkRestProps }) => (
  <Link href={url} className={linkButtonStyles} {...linkRestProps}>
    {Icon ? <Icon /> : null}
    &nbsp; <b>{text}</b>
  </Link>
);

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  text: PropTypes.string.isRequired,
};

export default LinkButton;
