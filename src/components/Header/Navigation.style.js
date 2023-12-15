import { css, cx } from "@linaria/core";

import { headerLinkStyles } from "./Header.style";

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

const navLinkFont = css`
  font-size: 1.1rem;
`;

export const navLinkStyles = cx(headerLinkStyles, navLinkFont);
