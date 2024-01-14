import { cx } from "@linaria/core";
import useTypewriter from "../useTypeWriter";
import {
  jobTitlesStyles,
  introSubTextStyles,
  blinkStyles,
  typedCursorStyles,
} from "./Intro.style";

const jobTitles = [
  "Front-End Developer",
  "Web Developer",
  "Wordpress Developer",
  "Mobile App Developer",
  "Software Engineer",
];

const Intro = () => {
  const { typedText, isTypingPaused, continueLoop } = useTypewriter({
    strings: jobTitles,
  });
  return (
    <>
      <h1>Hello World, my name is Stephin Gasper.</h1>
      <p className={introSubTextStyles}>
        I&apos;m a{" "}
        <span className={jobTitlesStyles}>
          {typedText}
          <span
            aria-hidden="true"
            className={cx(
              typedCursorStyles,
              isTypingPaused && blinkStyles,
              !continueLoop && "hide",
            )}
          >
            |
          </span>
        </span>
      </p>
    </>
  );
};

export default Intro;
