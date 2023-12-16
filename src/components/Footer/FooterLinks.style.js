import { css } from "@linaria/core";

export const footerLinksStyles = css`
  column-gap: 1rem;
  cursor: default;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const footBtnStyles = css`
  border-radius: 50%;
  border: 2px solid var(--color-secondary);
  display: flex;
  height: 20px;
  padding: 10px;
  width: 20px;

  .light &:hover,
  &:hover {
    border-color: var(--color-highlight);
  }

  .light & {
    border-color: var(--color-primary);
  }

  & > .github-icon {
    content: url("/github-mark-white.svg");
  }

  & > .mail-icon {
    content: url("/mail-white.svg");
  }

  & > .linkedin-icon {
    content: url("/li-in-white.png");
  }

  .light & > .github-icon {
    content: url("/github-mark.svg");
  }

  .light & > .mail-icon {
    content: url("/mail.svg");
  }

  .light & > .linkedin-icon {
    content: url("/li-in.png");
  }
`;
