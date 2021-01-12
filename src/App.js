import React, { useState } from "react";
import './App.css';
import ChildComponent from "./ChildComponet"

export const ThemeContext = React.createContext()

export default function App() {

  const [theme, setTheme] = useState('dark')


  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Context
        </p>

        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ChildComponent />
        </ThemeContext.Provider>

      </header>
    </div>
  );
}