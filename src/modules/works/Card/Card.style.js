import { css } from "@linaria/core";

export const cardWrapperStyles = css`
  display: block;
  list-style: none;
  &:hover {
    transform: scale(1.05);
  }
`;

export const cardInnerStyles = css`
  color: var(--color-secondary);
  display: block;
  text-align: center;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  .light & {
    color: var(--color-primary);
  }
`;

export const cardImageStyles = css`
  width: 100%;
  max-height: 350px;
  object-fit: contain;
`;

export const cardtitleStyles = css`
  margin: 0.5rem 0 0;
`;

export const cardDescriptionStyles = css`
  font-size: 1em;
  line-height: 1.5;
  text-indent: 0;
  margin: 0.5rem 0 0;
`;
