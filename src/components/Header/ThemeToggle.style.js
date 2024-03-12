import { media } from "@/styles/breakpoints";
import { css } from "@linaria/core";

export const themeToggleBtnStyles = css`
  background: none;
  border: 0;
  grid-column: 3 / auto;
  grid-row: 1;
  padding: 0;
  &:hover {
    cursor: pointer;
    rotate: 10deg;
  }
  ${media.sm} {
    grid-column: 3 / span 1;
  }
`;

export const moonIconStyles = css`
  fill: var(--color-secondary);
  .light & {
    fill: transparent;
  }
`;

export const sunIconStyles = css`
  fill: transparent;
  .light & {
    fill: var(--color-primary);
  }
`;
