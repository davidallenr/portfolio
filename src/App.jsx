import "./app.scss"
import Form from "./components/Form";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  const toggleTheme = () => {
    setTheme((curr) => {
      localStorage.setItem('theme', curr === "light" ? "dark" : "light");
      return (curr === "light" ? "dark" : "light");
    });
  };
  
  useEffect(()=> {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme])

  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={currentTheme === "dark"} checkedIcon={<BsSunFill />} uncheckedIcon={<BsMoonStarsFill />}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
