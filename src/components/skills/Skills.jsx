import "./skills.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Skills() {
    return (
        <div className = "skills" id = "skills">
            <div className="left">
                <h1>Programming Languages</h1>
                <p>
                    <span>C++</span>
                    <span>Python</span>
                    <span>Lua</span>
                </p>
                <h1>Frontend Development</h1>
                <p>
                    <span>React</span>
                    <span>React-Native</span>
                    <span>Styled-Components</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </p>
                <h1>Backend Development</h1>
                <p>
                    <span>Node</span>
                    <span>PHP</span>
                    <span>GraphQL</span>
                    <span>MYSQL</span>
                    <span>MongoDB</span>
                    <span>SQL</span>
                    <span>REST</span>
                </p>
                <h1>Version Control</h1>
                <p>
                    <span>Github</span>
                    <span>Gitlab</span>
                    <span>Bitbucket</span>
                </p>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="icon"><GitHubIcon/><span>Davidallenr</span></div>
                    <a href = "#contact">
                        <KeyboardArrowDownIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}
