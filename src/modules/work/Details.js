import { Children } from "react";
import { css } from "@linaria/core";
import PropTypes from "prop-types";

import { linkStyles } from "@/styles/globals";

const detailsWrapperStyles = css`
  align-items: center;
  display: flex;
  text-indent: initial;
  flex-wrap: wrap;
  gap: 0.569em;
`;

const detailNameStyles = css`
  background-color: var(--color-tertiary);
  border-radius: 0.49em;
  color: var(--color-secondary);
  font-size: 0.7em;
  font-weight: 600;
  line-height: 1;
  margin-right: 0.406em;
  padding: 0.65em 0.812em;
  text-transform: uppercase;
`;

const Details = ({ name, value, isLink, children }) =>
  value || Children.toArray(children).length ? (
    <p className={detailsWrapperStyles}>
      <small className={detailNameStyles}>{name}</small>
      {isLink ? (
        <a href={value} className={linkStyles}>
          {value}
        </a>
      ) : (
        value
      )}
      {children}
    </p>
  ) : null;

Details.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isLink: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
};

Details.defaultProps = {
  isLink: false,
};

export default Details;
