import { css } from "@linaria/core";

export const navLinkStyles = css`
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-size: 1.1rem;
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

export const navListStyles = css`
  grid-column: 2 / span 1;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.25rem;
`;

export const navListItemStyles = css`
  list-style: none;
  padding: 0;
`;
