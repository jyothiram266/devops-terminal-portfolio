import { useState, useEffect, useRef } from 'react';

interface UseTypingEffectOptions {
  speed?: number;
  delay?: number;
  repeat?: boolean;
  onComplete?: () => void;
}

export const useTypingEffect = (
  text: string,
  options: UseTypingEffectOptions = {}
) => {
  const {
    speed = 50,
    delay = 0,
    repeat = false,
    onComplete
  } = options;

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!text) return;

    const startTyping = () => {
      setIsTyping(true);
      setIsComplete(false);
      indexRef.current = 0;
      setDisplayedText('');

      const typeNextCharacter = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current++;
          timeoutRef.current = setTimeout(typeNextCharacter, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();

          if (repeat) {
            timeoutRef.current = setTimeout(() => {
              setDisplayedText('');
              startTyping();
            }, 2000);
          }
        }
      };

      timeoutRef.current = setTimeout(typeNextCharacter, delay);
    };

    startTyping();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, delay, repeat, onComplete]);

  return {
    displayedText,
    isTyping,
    isComplete
  };
};

export const useMultipleTypingEffect = (
  texts: string[],
  options: UseTypingEffectOptions = {}
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);

  const { displayedText, isComplete } = useTypingEffect(
    texts[currentIndex] || '',
    {
      ...options,
      onComplete: () => {
        setDisplayedTexts(prev => [...prev, texts[currentIndex]]);
        options.onComplete?.();
      }
    }
  );

  useEffect(() => {
    if (isComplete && currentIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isComplete, currentIndex, texts.length]);

  return {
    displayedTexts,
    currentText: displayedText,
    isComplete: isComplete && currentIndex === texts.length - 1,
    currentIndex
  };
};