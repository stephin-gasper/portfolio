import PropTypes from "prop-types";
import { css } from "@linaria/core";
import { defaultElement } from "@headstartwp/core/react";
import { isAnchorTag } from "@headstartwp/core";

const linkStyles = css`
  display: inline-block;
  padding: 0 0.057em 0.114em;
  position: relative;
  text-indent: 0;
  line-height: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: var(--link-underline);
    z-index: -1;
    height: 0.057em;
    left: 0;
    bottom: 0;
  }

  &::before {
    width: 0%;
    transition: width ease 0.4s;
  }

  &::after {
    width: 100%;
    transition: all ease 0.6s;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    &::before {
      width: 100%;
    }

    &::after {
      left: 100%;
      width: 0%;
      transition: all ease 0.2s;
    }
  }
`;

const ExternalLinkBlock = ({ domNode = defaultElement, children }) => (
  <a className={linkStyles} {...domNode.attribs}>
    {children}
  </a>
);

ExternalLinkBlock.propTypes = {
  domNode: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  test: PropTypes.func,
};

ExternalLinkBlock.defaultProps = {
  test: (node, site) => isAnchorTag(node, { isInternalLink: false }, site),
};

export default ExternalLinkBlock;
