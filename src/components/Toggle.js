import React, { useState, useEffect } from 'react';

const Toggle = () => {
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    document.body.removeAttribute('class');
    theme ? document.body.classList.add('dark') : document.body.classList.add('light');
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-5 h-5 text-gray-800 dark:text-gray-200"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  );
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-5 h-5 text-gray-800 dark:text-gray-200"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  );

  return (
    <button className={`button-theme ${theme ? 'sun' : 'moon'}`} onClick={() => setTheme(!theme)}>
      {theme ? sun : moon}
    </button>
  );
};

export default Toggle;
