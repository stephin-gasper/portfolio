import { css } from "@linaria/core";

export const navLinkStyles = css`
  color: var(--text-primary);
  display: inline-block;
  font-family: var(--font-secondary);
  font-size: 1.1rem;
  padding: 0.5rem 0.313rem;
  position: relative;
  text-decoration: none;

  &:not(.active):hover {
    text-decoration: underline;
    text-decoration-skip-ink: auto;
  }

  &.active,
  &:focus {
    &::after {
      background-color: var(--color-underline);
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      height: 0.188rem;
      left: 0;
      width: 100%;
    }
  }

  &:focus {
    background-color: var(--color-highlight);
    color: var(--text-primary-invert);
    outline: none;
  }
`;

export const navListStyles = css`
  display: flex;
  gap: 0.625rem;
  grid-column: 2 / span 1;
  margin: 0 -0.313rem;
  margin: 0;
  padding: 0;
`;

export const navListItemStyles = css`
  display: inline-block;
  line-height: 1;
  list-style: none;
  padding: 0;
`;
