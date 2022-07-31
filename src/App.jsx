import "./app.scss"
import Form from "./components/Form";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { BsMoonStarsFill } from 'react-icons/bs';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
        
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} uncheckedIcon={<BsMoonStarsFill />}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
