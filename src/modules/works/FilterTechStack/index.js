import PropTypes from "prop-types";
import { cx } from "@linaria/core";

import { filterTagStyles, filterWrapperStyles } from "./FilterTechStack.style";

const FilterTechStack = ({
  filterTitles,
  currentTechStackFilter,
  setCurrentTechStackFilter,
}) => (
  <ul className={filterWrapperStyles}>
    {filterTitles.map((item) => (
      <li key={item.id}>
        <button
          type="button"
          onClick={() => setCurrentTechStackFilter(item.text)}
          className={cx(
            "btn-reset",
            filterTagStyles,
            currentTechStackFilter === item.text && "active",
          )}
        >
          {item.text}
        </button>
      </li>
    ))}
  </ul>
);

FilterTechStack.propTypes = {
  filterTitles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrentTechStackFilter: PropTypes.func.isRequired,
  currentTechStackFilter: PropTypes.string.isRequired,
};

export default FilterTechStack;
