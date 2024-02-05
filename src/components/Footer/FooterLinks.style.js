import { css } from "@linaria/core";

export const footerLinksStyles = css`
  column-gap: 1rem;
  cursor: default;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const footBtnStyles = css`
  color: var(--text-primary);
  border-radius: 50%;
  border: 0.125rem solid var(--text-primary);
  display: flex;
  padding: 0.625rem;

  &:hover {
    color: var(--color-highlight);
    border-color: var(--color-highlight);
  }
`;

export const footBtnIconStyles = css`
  height: 1.25rem;
  width: 1.25rem;
`;
