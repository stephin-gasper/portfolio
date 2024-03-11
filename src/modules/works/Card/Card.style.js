import { css } from "@linaria/core";

export const cardWrapperStyles = css`
  display: block;
  list-style: none;
`;

export const cardInnerStyles = css`
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px var(--shadow-color),
    0 4px 6px -4px var(--shadow-color);
  background-color: var(--card-background);
  color: var(--card-text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }
`;

export const cardContentStyles = css`
  flex-grow: 1;
  order: 1;
  padding: 1.25rem 0.938rem;
`;

export const cardImageStyles = css`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  display: block;
  max-height: 21.875rem;
  min-height: 75%; // 4:3 Aspect Ratio
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

export const cardTitleStyles = css`
  margin: 0;
  font-size: 1.25rem;
`;

export const cardTitleLinkStyles = css`
  color: inherit;
  &:focus {
    outline: none;
  }
`;

export const cardDescriptionStyles = css`
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0 0;
  text-indent: 0;
`;

export const techStackHighlightStyles = css`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  justify-content: flex-end;
  line-height: 1.84;
  margin: 0;
  padding-top: 0.625rem;
  text-indent: 0;
`;

export const teckStackHighlightItems = css`
  text-decoration: underline var(--color-underline) 0.17em;
  text-underline-offset: 0.34em;
`;
