import "./topbar.scss"
export default function Topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">intro</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#works">works</a>
                    <a href="#testimonials">testimonials</a>
                    <a href="#contact">contact</a>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
