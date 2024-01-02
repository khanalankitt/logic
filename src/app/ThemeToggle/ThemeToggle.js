// components/ThemeToggle.js

import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if there's a stored theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    // Apply the new theme to the entire document body
    document.body.classList.toggle('dark-theme', isDarkMode);
  };

  return (
    <img src="dark.png" alt="darkIcon" onCLick={toggleTheme} style={{
        height:"30px",
        width:"30px",
        marginLeft:"10px",
        marginTop:"5px",
        cursor:"pointer"
    }}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </img>
  );
};

