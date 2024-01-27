import { css } from "@linaria/core";

export const cardWrapperStyles = css`
  display: block;
  list-style: none;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const cardInnerStyles = css`
  border-radius: 0.75rem;
  color: var(--text-primary);
  display: block;
  text-align: center;
  padding-bottom: 1rem;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:active {
    color: var(--text-primary);
  }
`;

export const cardImageStyles = css`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  max-height: 350px;
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

export const cardtitleStyles = css`
  margin: 0.584em 0 0;
`;

export const cardDescriptionStyles = css`
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0 0;
  text-indent: 0;
`;
