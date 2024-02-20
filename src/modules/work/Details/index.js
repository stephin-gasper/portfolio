import { Children } from "react";
import PropTypes from "prop-types";

import { linkStyles } from "@/styles/globals";

import {
  detailNameStyles,
  detailValueStyles,
  detailWrapperStyles,
} from "./Details.style";

const Details = ({ name, value, isLink, children }) =>
  value || Children.toArray(children).length ? (
    <dl className={detailWrapperStyles}>
      <dt className={detailNameStyles}>{name}</dt>
      {value ? (
        <dd className={detailValueStyles}>
          {isLink ? (
            <a href={value} className={linkStyles}>
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      ) : null}
      {children}
    </dl>
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
