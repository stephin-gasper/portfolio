import { css } from "@linaria/core";

export const resumeDownloadContainerStyles = css`
  margin-top: 1.25rem;
  text-align: center;
`;

export const resumeDownloadStyles = css`
  border-radius: 0.5em;
  border: 0.125em solid var(--color-secondary);
  box-shadow: var(--color-secondary) 0 0.3125em 0 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  padding: 0.9375em 1.5em;
  .light & {
    border-color: var(--color-primary);
    box-shadow: var(--color-primary) 0 0.3125em 0 0;
  }
  &:focus,
  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }
`;
