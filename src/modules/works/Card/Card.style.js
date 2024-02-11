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
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
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

export const cardTitleStyles = css`
  margin: 0;
  font-size: 1.25rem;
`;

export const cardTitleLinkStyles = css`
  color: inherit;
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
  text-decoration: underline var(--color-highlight) 0.17em;
  text-underline-offset: 0.34em;
`;
