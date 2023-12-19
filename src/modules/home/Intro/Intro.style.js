import { css } from "@linaria/core";

export const introSubTextStyles = css`
  margin-top: 1.25em;
  font-weight: 600;
`;

export const jobTitlesStyles = css`
  text-decoration: underline var(--color-highlight);
  text-decoration-thickness: 0.17em;
  text-underline-offset: 0.455em;
`;

export const blinkStyles = css`
  animation: typedBlink 0.7s infinite;

  @keyframes typedBlink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const typedCursorStyles = css`
  opacity: 1;
`;
