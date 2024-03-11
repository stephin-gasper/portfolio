import PropTypes from "prop-types";

import LinkButton from "@/components/LinkButton";

const KnowMoreButton = ({ text, url }) => <LinkButton text={text} url={url} />;

KnowMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default KnowMoreButton;
