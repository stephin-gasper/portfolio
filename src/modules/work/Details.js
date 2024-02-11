import { css } from "@linaria/core";
import PropTypes from "prop-types";

import { linkStyles } from "@/styles/globals";

const detailsWrapperStyles = css`
  text-indent: 0;
`;

const detailNameStyles = css`
  background-color: var(--color-tertiary);
  border-radius: 0.49em;
  color: var(--color-secondary);
  font-size: 0.7em;
  font-weight: 600;
  line-height: 1;
  margin-right: 0.812em;
  padding: 0.65em 0.812em;
  text-transform: uppercase;
`;

const Details = ({ name, value, isLink }) =>
  value ? (
    <p className={detailsWrapperStyles}>
      <small className={detailNameStyles}>{name}</small>
      {isLink ? (
        <a href={value} className={linkStyles}>
          {value}
        </a>
      ) : (
        value
      )}
    </p>
  ) : null;

Details.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
};

Details.defaultProps = {
  isLink: false,
};

export default Details;
