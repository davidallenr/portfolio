import "./topbar.scss"
export default function Topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">David Russell</a>
                    <div className="itemContainer">
                        
                    </div>
                </div>
                <div className="right">
                    <a href="#intro" >Intro</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#works">works</a>
                    <a href="#testimonials">testimonials</a>
                    <a href="#contact">contact</a>
                </div>
            </div>
        </div>
    )
}
