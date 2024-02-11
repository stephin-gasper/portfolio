import PropTypes from "prop-types";
import { defaultElement } from "@headstartwp/core/react";
import { isAnchorTag } from "@headstartwp/core";

import { linkStyles } from "@/styles/globals";

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
