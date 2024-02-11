import { css } from "@linaria/core";

export const linkStyles = css`
  display: inline-block;
  line-height: 1;
  padding: 0 0.057em 0.114em;
  position: relative;
  text-indent: 0;

  &::before,
  &::after {
    content: "";
    animation-fill-mode: both;
    background-color: var(--link-underline);
    bottom: 0;
    height: 0.057em;
    left: 0;
    position: absolute;
    transform-origin: left center;
    width: 100%;
    z-index: -1;
  }

  @keyframes scale-in {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  &::before {
    animation-name: scale-in;
    animation-duration: 0.2s;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(100%) scaleX(0);
    }
    100% {
      transform: translateX(0) scaleX(1);
    }
  }

  &::after {
    animation-name: slide-in;
    animation-duration: 0.6s;
  }

  @keyframes scale-out {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0) scaleX(1);
    }
    100% {
      transform: translateX(100%) scaleX(0);
    }
  }

  &:hover,
  &:focus {
    &::before {
      animation-name: scale-out;
      animation-duration: 0.4s;
    }

    &::after {
      animation-name: slide-out;
      animation-duration: 0.2s;
    }
  }
`;
