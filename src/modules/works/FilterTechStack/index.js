import PropTypes from "prop-types";
import { cx } from "@linaria/core";

import { filterTagStyles, filterWrapperStyles } from "./FilterTechStack.style";

const FilterTechStack = ({ filters, currentFilter, setCurrentFilter }) => (
  <ul className={filterWrapperStyles}>
    {filters.map((filter) => (
      <li key={`${filter.id}-${filter.slug}`}>
        <button
          type="button"
          onClick={() => setCurrentFilter(filter.slug)}
          className={cx(
            "btn-reset",
            filterTagStyles,
            currentFilter === filter.slug && "active",
          )}
        >
          {filter.name}
        </button>
      </li>
    ))}
  </ul>
);

FilterTechStack.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrentFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default FilterTechStack;
