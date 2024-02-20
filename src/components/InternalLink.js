import PropTypes from "prop-types";
import { removeSourceUrl } from "@headstartwp/core";
import { useSettings } from "@headstartwp/core/react";
import NextLink from "next/link";

const InternalLink = ({ href, rel, children, target }) => {
  const settings = useSettings();
  const link = removeSourceUrl({
    link: href,
    backendUrl: settings.sourceUrl || "",
  });

  return (
    <NextLink href={link} rel={rel} target={target}>
      {children}
    </NextLink>
  );
};

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  target: PropTypes.string,
};

InternalLink.defaultProps = {
  rel: "",
  target: "",
};

export default InternalLink;
