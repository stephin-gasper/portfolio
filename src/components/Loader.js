import { css } from "@linaria/core";

const loaderContainer = css`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-secondary);
`;

const loader = css`
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: var(--text-primary);

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  &::after {
    color: var(--color-highlight);
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0.2em 0px 0 0px currentcolor;
    }
    12% {
      box-shadow: 0.2em 0.2em 0 0 currentcolor;
    }
    25% {
      box-shadow: 0 0.2em 0 0px currentcolor;
    }
    37% {
      box-shadow: -0.2em 0.2em 0 0 currentcolor;
    }
    50% {
      box-shadow: -0.2em 0 0 0 currentcolor;
    }
    62% {
      box-shadow: -0.2em -0.2em 0 0 currentcolor;
    }
    75% {
      box-shadow: 0px -0.2em 0 0 currentcolor;
    }
    87% {
      box-shadow: 0.2em -0.2em 0 0 currentcolor;
    }
  }
`;
const Loader = () => {
  return (
    <div className={loaderContainer}>
      <div className={loader} />
    </div>
  );
};

export default Loader;
