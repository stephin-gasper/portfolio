import { memo } from "react";
import PropTypes from "prop-types";
import { css, cx } from "@linaria/core";

import { detailValueStyles } from "./Details/Details.style";

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
    <dd key={item.id} className={cx(detailValueStyles, techStackStyles)}>
      <img
        src={item.image_url}
        alt={`${item.name} Logo`}
        className={techStackImageStyles}
      />
      {item.name}
    </dd>
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
