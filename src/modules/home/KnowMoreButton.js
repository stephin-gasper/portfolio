import PropTypes from "prop-types";
import { css } from "@linaria/core";

import LinkButton from "@/components/LinkButton";

export const containerStyles = css`
  text-align: center;
`;

const KnowMoreButton = ({ text, url }) => (
  <div className={containerStyles}>
    <LinkButton text={text} url={url} />
  </div>
);

KnowMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default KnowMoreButton;
