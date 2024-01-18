import { css } from "@linaria/core";

export const typingTextWrapperStyles = css`
  font-weight: 600;
  margin: 0;
  padding: 1.375rem 0 0.313rem;
`;

export const typingTextStyles = css`
  text-decoration: underline var(--color-highlight) 0.17em;
  text-underline-offset: 0.455em;
`;

export const blinkStyles = css`
  animation: typed-blink 0.7s infinite;

  @keyframes typed-blink {
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

export const typingTextCursorStyles = css`
  opacity: 1;
  &.hide {
    display: none;
  }
`;
