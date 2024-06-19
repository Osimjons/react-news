import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const [debounsedKeywords, setDebounsedKeywords] = useState(value);
  useEffect(() => {
    const hadleTimer = setTimeout(() => {
      setDebounsedKeywords(value);
    }, delay);

    return () => {
      clearTimeout(hadleTimer);
    };
  }, [value, delay]);
  return debounsedKeywords;
};
