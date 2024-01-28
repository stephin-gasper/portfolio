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
  text-align: left;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:active {
    color: var(--text-primary);
  }
`;

export const cardContentStyles = css`
  padding: 1.25rem 0.938rem;
`;

export const cardImageStyles = css`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  display: block;
  max-height: 21.875rem;
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

export const cardtitleStyles = css`
  margin: 0;
  font-size: 1.25rem;
`;

export const cardDescriptionStyles = css`
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0 0;
  text-indent: 0;
`;

export const techStackHighlightStyles = css`
  font-size: 0.75rem;
  line-height: 1;
  margin: 0;
  text-indent: 0;
  padding-top: 0.625rem;
  text-align: right;
`;

export const teckStackHighlightItems = css`
  text-decoration: underline var(--color-highlight) 0.17em;
  text-underline-offset: 0.34em;
`;
