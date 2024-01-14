import { useEffect, useState } from "react";

const useTypewriter = ({
  strings,
  pauseTime = 1500,
  typeSpeed = 150,
  deleteSpeed = 100,
}) => {
  const [stringIndex, setStringIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [
    stringIndex,
    isDeleting,
    text,
    strings,
    deleteSpeed,
    typeSpeed,
    pauseTime,
  ]);

  return { typedText: text, isTypingPaused: isPaused };
};

export default useTypewriter;
