import "./app.scss"
import ContentBox from "./components/ContentBox";
import { createContext, useState, useEffect } from "react";
import ColorModeSlider from "./components/ColorModeSlider";


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
        <ContentBox />
        <ColorModeSlider 
        toggleTheme={toggleTheme} 
        currentTheme={currentTheme}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
