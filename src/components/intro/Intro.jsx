import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Intro() {
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avataaars.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                        <h2>Hello! I'm </h2>
                        <h1>David Russell</h1> 
                        <h3>I'm a passionate <span>Software Developer</span></h3>
                        <h2><span>Father Developer Student Veteran</span>
                            <a href = "#portfolio">
                                <KeyboardArrowDownIcon/>
                            </a>
                        </h2>
                        
                </div>
            </div>
        </div>
    )
}
