import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, strings: ['Father', 'Developer', 'Student', 'Veteran' ] })
    }, [])

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
                        <h2>I'm a passionate <span ref = {textRef} />
                            <a href = "#portfolio">
                                <KeyboardArrowDownIcon/>
                            </a>
                        </h2>
                        
                </div>
            </div>
        </div>
    )
}
