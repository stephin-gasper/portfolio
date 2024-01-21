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
      content: `url("/li-in${pathPrefix}.png")`,
    },
  };
  return icons;
};

export const footBtnStyles = css`
  border-radius: 50%;
  border: 2px solid var(--border-primary);
  display: flex;
  height: 20px;
  padding: 10px;
  width: 20px;

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
