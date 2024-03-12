import { css } from "@linaria/core";

export const filterWrapperStyles = css`
  display: flex;
  gap: 0.341em;
  list-style-type: none;
  margin: 0;
  overflow-x: auto;
  padding: 1.875rem 0 0;
`;

export const filterTagStyles = css`
  background-color: transparent;
  border-radius: 0.285em;
  border: 1px solid var(--border-primary);
  line-height: 1;
  padding: 0.341em 0.796em;
  white-space: nowrap;

  &.active {
    background-color: var(--color-highlight);
    border-color: var(--color-highlight);
    color: var(--text-primary-invert);
  }
`;
