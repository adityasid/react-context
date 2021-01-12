import React, { useState } from "react";
import './App.css';
import ChildComponent from "./ChildComponet"

const ThemeContext = React.createContext()

function App() {

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

export default App;

export { ThemeContext };