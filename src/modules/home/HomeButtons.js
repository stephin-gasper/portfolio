import PropTypes from "prop-types";
import { css } from "@linaria/core";

export const containerStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.938rem;
  justify-content: center;
`;

const HomeButtons = ({ children }) => (
  <div className={containerStyles}>{children}</div>
);

HomeButtons.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
};

export default HomeButtons;
