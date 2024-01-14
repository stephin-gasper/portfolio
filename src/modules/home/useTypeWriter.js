import { useEffect, useState } from "react";

/**
 * @typedef {object} TypeWriterValues
 * @property {string} typedText - Current typed text
 * @property {boolean} isTypingPaused - Whether typing animation has paused before next text is animated
 */

/**
 * A React hook to return text with typewritter effect based on the strings passed.
 * Check following article for reference {@link https://www.dhiwise.com/post/animate-your-words-a-journey-through-react-typewriter-effect | Animate Your Words: A Journey Through React Typewriter Effect}
 *
 * @memberof module:React
 *
 * @param {object} params - Typewriter data
 * @param {string[]} params.strings - Array of strings to be shown
 * @param {number} params.pauseTime - Determine the pause time after typing animation is complete. Defaults to 1500ms
 * @param {number} params.typeSpeed - Determine the delay when each letter is typed. Defaults to 150ms
 * @param {number} params.deleteSpeed - Determine the delay when each letter is deleted. Defaults to 150ms
 * @param {boolean} params.isLoop - Determine whether to loop through the strings continously. Defaults to true
 *
 * @returns {TypeWriterValues} Typewriter effect values
 */
const useTypewriter = ({
  strings,
  pauseTime = 1500,
  typeSpeed = 150,
  deleteSpeed = 100,
  isLoop = true,
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
        currentString.substring(0, current.length - shouldDelete),
      );
      // Determine if this string is complete
      if (!isDeleting && text === currentString) {
        if (!isLoop && stringIndex === strings.length - 1) {
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
    const timer = continueLoop
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
    isLoop,
    continueLoop,
  ]);

  return { typedText: text, isTypingPaused: isPaused, continueLoop };
};

export default useTypewriter;
