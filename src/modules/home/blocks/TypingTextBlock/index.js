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
  const {
    prefix = "",
    strings,
    pauseTime,
    typeSpeed,
    deleteSpeed,
    loop,
    suffix = "",
  } = JSON.parse(node.attribs["data-wp-block"]);
  const { typedText, isTypingPaused, continueLoop } = useTypewriter({
    strings,
    pauseTime,
    typeSpeed,
    deleteSpeed,
    loop,
  });
  return (
    <p
      className={typingTextWrapperStyles}
      aria-label={`${prefix}${strings?.join(", ")}${suffix}`}
    >
      <span aria-hidden="true">
        {prefix}
        {strings.length ? (
          <span className={typingTextStyles}>
            {typedText}
            <span
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
      </span>
    </p>
  );
};

TypingTextBlock.propTypes = {
  domNode: PropTypes.shape({
    attribs: PropTypes.shape({ "data-wp-block": PropTypes.string }),
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  test: PropTypes.func,
};

TypingTextBlock.defaultProps = {
  domNode: defaultElement,
  test: (node) => isBlockByName(node, "sg-block/typing-text-block"),
};

export default TypingTextBlock;
