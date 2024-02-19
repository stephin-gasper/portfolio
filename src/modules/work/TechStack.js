import { memo } from "react";
import PropTypes from "prop-types";
import { css } from "@linaria/core";

const techStackStyles = css`
  display: inline-flex;
  gap: 0.17em;
`;

const techStackImageStyles = css`
  width: 1.137em;
  height: 1.137em;
`;

const TechStack = memo(function ({ items }) {
  return items.map((item) => (
    <span key={item.id} className={techStackStyles}>
      <img src={item.image_url} alt="" className={techStackImageStyles} />
      {item.name}
    </span>
  ));
});

TechStack.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image_url: PropTypes.string,
    }),
  ).isRequired,
};

export default TechStack;
