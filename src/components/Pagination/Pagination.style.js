import { css } from "@linaria/core";

export const paginationContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.341em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const paginationItemStyles = css`
  display: inline-flex;
`;

export const paginationItemDotsStyles = css`
  align-items: center;
`;

export const paginationItemBtnStyles = css`
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  font-size: 1.25em;
  height: 2em;
  justify-content: center;
  line-height: 1;
  padding: 0 0.78em;
  text-align: center;
  &:hover {
    background-color: var(--pagination-hover);
    cursor: pointer;
  }

  &.selected {
    background-color: var(--pagination-selected);
  }

  &.disabled {
    pointer-events: none;

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const paginationArrowStyles = css`
  &:before {
    position: relative;
    content: "";
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid var(--border-primary);
    border-top: 0.12em solid var(--border-primary);
  }
  .disabled &:before {
    opacity: 0.6;
    border-right: 0.12em solid var(--border-secondary);
    border-top: 0.12em solid var(--border-secondary);
  }
`;

export const paginationArrowLeftStyles = css`
  &:before {
    transform: rotate(-135deg);
  }
`;

export const paginationArrowRightStyles = css`
  &:before {
    transform: rotate(45deg);
  }
`;
