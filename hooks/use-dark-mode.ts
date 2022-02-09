import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const themePreferences = window.localStorage.getItem('theme');

    if (typeof themePreferences === 'string') {
      return themePreferences;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const initialTheme = getInitialTheme();

    setIsDarkMode(initialTheme === 'dark');
  }, []);

  useEffect(() => {
    const htmlRoot = window.document.documentElement;

    if (isDarkMode) {
      htmlRoot.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlRoot.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
