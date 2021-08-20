import "./topbar.scss"
import { Mail, Code} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">Develop <Code className = "icon"/> </a>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>admin@davidallenrussell.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                    <ul className = "navbar">
                        <li>
                            <a href = "#intro">Home</a>
                        </li>
                        <li>
                            <a href = "#skills">Skills</a>
                        </li>
                        <li>
                            <a href = "#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
