import { useEffect, useState } from "react";

/**
 * @typedef {object} TypeWriterValues
 * @property {string}  typedText      - Current typed text
 * @property {boolean} isTypingPaused - Whether typing animation has paused before next text is animated
 * @property {boolean} continueLoop   - Whether typing animation can be looped again
 */

/**
 * A React hook to return text with typewritter effect based on the strings passed.
 * Check following article for reference {@link https://www.dhiwise.com/post/animate-your-words-a-journey-through-react-typewriter-effect | Animate Your Words: A Journey Through React Typewriter Effect}
 *
 * @memberof module:React
 *
 * @param {object}   params             - Typewriter data
 * @param {string[]} params.strings     - Array of strings to be shown
 * @param {number}   params.pauseTime   - Pause time after typing animation is complete. Defaults to 1500ms
 * @param {number}   params.typeSpeed   - Delay before each letter is typed. Defaults to 150ms
 * @param {number}   params.deleteSpeed - Delay before each letter is deleted. Defaults to 100ms
 * @param {boolean}  params.loop        - Determine whether to loop through the strings continously. Defaults to true
 *
 * @returns {TypeWriterValues} Typewriter effect values
 */
const useTypewriter = ({
  strings,
  pauseTime = 1500,
  typeSpeed = 150,
  deleteSpeed = 100,
  loop = true,
}) => {
  const [stringIndex, setStringIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [continueLoop, setContinueLoop] = useState(true);

  useEffect(() => {
    const type = () => {
      const currentString = strings[stringIndex];
      // Determine the function to be performed
      const shouldDelete = isDeleting ? 1 : -1;
      // Create the new text
      setText((current) =>
        currentString
          ? currentString.substring(0, current.length - shouldDelete)
          : current,
      );
      // Determine if this string is complete
      if (!isDeleting && text === currentString) {
        if (!loop && stringIndex === strings.length - 1) {
          setContinueLoop(false);
          return;
        }
        setIsPaused(true);
        // Make a pause at the end
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        // Move to the next string
        setStringIndex((current) => (current + 1) % strings.length);
      }
    };
    const timer =
      strings.length && continueLoop
        ? setTimeout(type, isDeleting ? deleteSpeed : typeSpeed)
        : null;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [
    stringIndex,
    isDeleting,
    text,
    strings,
    deleteSpeed,
    typeSpeed,
    pauseTime,
    loop,
    continueLoop,
  ]);

  return { typedText: text, isTypingPaused: isPaused, continueLoop };
};

export default useTypewriter;
