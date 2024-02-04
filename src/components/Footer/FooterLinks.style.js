import { css } from "@linaria/core";

export const footerLinksStyles = css`
  column-gap: 1rem;
  cursor: default;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const getIcons = (isLightTheme = false) => {
  const pathPrefix = !isLightTheme ? "-white" : "";
  const icons = {
    "> .github-icon": {
      content: `url("/github-mark${pathPrefix}.svg")`,
    },
    "> .mail-icon": {
      content: `url("/mail${pathPrefix}.svg")`,
    },
    "> .linkedin-icon": {
      content: `url("/linkedin${pathPrefix}.svg")`,
    },
  };
  return icons;
};

export const footBtnStyles = css`
  border-radius: 50%;
  border: 0.125rem solid var(--border-primary);
  display: flex;
  padding: 0.625rem;

  & {
    ${getIcons()};
  }

  .light &:hover,
  &:hover {
    border-color: var(--color-highlight);
  }

  .light & {
    ${getIcons(true)};
  }
`;

export const footBtnIconStyles = css`
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
`;
