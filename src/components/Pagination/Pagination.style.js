import { css } from "@linaria/core";

export const paginationContainerStyles = css`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 10px;
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
  font-size: 1em;
  height: 2em;
  justify-content: center;
  line-height: 1;
  padding: 0 0.78em;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    cursor: pointer;
    .light & {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  &.selected {
    background-color: rgba(255, 255, 255, 0.08);
    .light & {
      background-color: rgba(0, 0, 0, 0.08);
    }
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
    border-right: 0.12em solid var(--color-secondary);
    border-top: 0.12em solid var(--color-secondary);
    .light & {
      border-color: var(--color-primary);
    }
  }
  .disabled &:before {
    opacity: 0.6;
    border-right: 0.12em solid var(--color-secondary-lighter);
    border-top: 0.12em solid var(--color-secondary-lighter);
    .light & {
      border-color: var(--color-primary-lighter);
    }
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
