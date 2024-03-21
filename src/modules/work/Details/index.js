import { Children } from "react";
import PropTypes from "prop-types";
import { cx } from "@linaria/core";

import { linkStyles } from "@/styles/globals";

import {
  DetailTitle,
  detailValueStyles,
  detailWrapperStyles,
  linkStatusStyles,
} from "./Details.style";

const Details = ({ name, isDetailVisible, hasCaution, children }) =>
  isDetailVisible && Children.toArray(children).length ? (
    <dl className={detailWrapperStyles}>
      <DetailTitle hasCaution={hasCaution}>{name}</DetailTitle>
      {children}
    </dl>
  ) : null;

Details.propTypes = {
  name: PropTypes.string.isRequired,
  isDetailVisible: PropTypes.bool,
  hasCaution: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
};

Details.defaultProps = {
  isDetailVisible: true,
  hasCaution: false,
};

const DetailsContent = ({ children }) => (
  <dd className={detailValueStyles}>{children}</dd>
);

DetailsContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
};

Details.Content = DetailsContent;

const DetailsLink = ({ url, isActive }) => (
  <>
    <a href={url} className={cx(linkStyles, !isActive && "inactive")}>
      {url}
    </a>
    {!isActive ? (
      <span className={linkStatusStyles}> (inactive/deleted) </span>
    ) : null}
  </>
);

DetailsLink.propTypes = {
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

DetailsLink.defaultProps = {
  isActive: true,
};

Details.Link = DetailsLink;

export default Details;
