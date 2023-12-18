import { css } from "@linaria/core";

import { media } from "@/styles/breakpoints";

export const navStyles = css`
  align-items: center;
  display: grid;
  gap: 0.625rem 1.25rem;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: auto auto;
  justify-content: center;
  margin-top: 1.25rem;
  ${media.sm} {
    grid-template-columns: 1fr repeat(2, min-content);
    grid-template-rows: 1fr;
    justify-content: start;
  }
`;
