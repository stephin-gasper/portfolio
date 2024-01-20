import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import { defaultElement } from "@headstartwp/core/react";

import useTypewriter from "./useTypeWriter";

import {
  typingTextStyles,
  typingTextWrapperStyles,
  blinkStyles,
  typingTextCursorStyles,
} from "./TypingTextBlock.style";

const TypingTextBlock = ({ domNode: node = defaultElement }) => {
  const { prefix, strings, pauseTime, typeSpeed, deleteSpeed, loop, suffix } =
    JSON.parse(node.attribs["data-wp-block"]);
  const { typedText, isTypingPaused, continueLoop } = useTypewriter({
    strings,
    pauseTime,
    typeSpeed,
    deleteSpeed,
    loop,
  });
  return (
    <p className={typingTextWrapperStyles}>
      {prefix}
      {strings.length ? (
        <span className={typingTextStyles}>
          {typedText}
          <span
            aria-hidden="true"
            className={cx(
              typingTextCursorStyles,
              isTypingPaused && blinkStyles,
              !continueLoop && "hide",
            )}
          >
            |
          </span>
        </span>
      ) : null}
      {suffix}
    </p>
  );
};

TypingTextBlock.propTypes = {
  domNode: PropTypes.shape({}),
};

export default TypingTextBlock;
