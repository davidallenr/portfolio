import Topbar from "./components/topbar/Topbar"
import Menu from "./components/menu/Menu"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
