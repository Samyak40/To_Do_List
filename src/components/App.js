import React, { useState, useEffect } from 'react';
import TodoWrapper from './components/TodoWrapper';
import './App.css'; 

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  const handleThemeToggle = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className="App">
      <button className="theme-toggle-btn" onClick={handleThemeToggle}>
        {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
      <TodoWrapper />
    </div>
  );
}

export default App;
