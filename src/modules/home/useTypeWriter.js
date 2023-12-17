import { useEffect, useState } from "react";

const useTypewriter = ({ strings }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = strings[wordIndex];
      // Determine the function to be performed
      const shouldDelete = isDeleting ? 1 : -1;
      // Create the new text
      setText((current) =>
        currentWord.substring(0, current.length - shouldDelete),
      );
      // Determine if this word is complete
      if (!isDeleting && text === currentWord) {
        setIsPaused(true);
        // Make a pause at the end
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        // Move to the next word
        setWordIndex((current) => (current + 1) % strings.length);
      }
    };
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text, strings]);

  return { typedText: text, typingPaused: isPaused };
};

export default useTypewriter;
