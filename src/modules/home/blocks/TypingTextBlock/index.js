import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import { isBlockByName } from "@headstartwp/core";
import { defaultElement } from "@headstartwp/core/react";

import useTypewriter from "./useTypeWriter";

import {
  typingTextStyles,
  typingTextWrapperStyles,
  blinkStyles,
  typingTextCursorStyles,
} from "./TypingTextBlock.style";

const TypingTextBlock = ({ domNode: node }) => {
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
  domNode: PropTypes.shape({
    attribs: PropTypes.shape({ "data-wp-block": PropTypes.shape({}) }),
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  test: PropTypes.func,
};

TypingTextBlock.defaultProps = {
  domNode: defaultElement,
  test: (node) => isBlockByName(node, "sg-block/typing-text-block"),
};

export default TypingTextBlock;
