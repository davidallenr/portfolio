import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">David Russell</a>
                    <div className="itemContainer">
                        <Person className = "icon"/>
                        <span>+123-456-7890</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>admin@davidallenrussell.com</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                    
                    {/*
                    <a href="#intro" >Intro</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#works">works</a>
                    <a href="#testimonials">testimonials</a>
                    <a href="#contact">contact</a>
                    */}
                </div>
            </div>
        </div>
    )

}
