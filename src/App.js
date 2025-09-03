import React, { useState, useEffect } from 'react';
import TodoWrapper from './components/TodoWrapper';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <button className="theme-toggle-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <TodoWrapper />
    </div>
  );
}

export default App;
