import { css } from "@linaria/core";

import { media } from "@/styles/breakpoints";

export const navStyles = css`
  align-items: center;
  display: grid;
  gap: 0.625rem 1.25rem;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: auto auto;
  justify-content: center;
  margin-top: 1.25rem;
  ${media.sm} {
    grid-template-columns: 1fr repeat(2, min-content);
    grid-template-rows: 1fr;
    justify-content: start;
  }
`;

export const headerLinkStyles = css`
  color: var(--color-secondary);
  font-family: var(--font-primary);
  text-decoration: none;
  .light & {
    color: var(--color-primary);
  }
  &:hover,
  &:focus {
    text-decoration: underline var(--color-underline);
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }
`;
