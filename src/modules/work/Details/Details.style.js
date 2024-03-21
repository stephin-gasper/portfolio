import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const detailWrapperStyles = css`
  align-items: center;
  display: flex;
  text-indent: initial;
  flex-wrap: wrap;
  gap: 0.569em;
`;

export const DetailTitle = styled.dt`
  background-color: ${(props) =>
    props.hasCaution ? "var(--color-caution)" : "var(--color-tertiary)"};
  border-radius: 0.49em;
  color: var(--color-secondary);
  display: inline;
  font-size: 0.7em;
  font-weight: 600;
  line-height: 1;
  margin-right: 0.406em;
  padding: 0.65em 0.812em;
  text-transform: uppercase;
`;

export const detailValueStyles = css`
  display: inline;
  margin: 0;
  padding: 0;
`;

export const linkStatusStyles = css`
  color: var(--color-caution);
`;
