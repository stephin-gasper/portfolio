import { css } from "@linaria/core";

export const resumeDownloadContainerStyles = css`
  margin-top: 1.875rem;
  text-align: center;
`;

export const resumeDownloadStyles = css`
  border-radius: 0.5em;
  border: 0.125em solid var(--border-primary);
  box-shadow: var(--border-primary) 0 0.3125em 0 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  padding: 0.9375em 1.5em;
  &:focus,
  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }
`;
