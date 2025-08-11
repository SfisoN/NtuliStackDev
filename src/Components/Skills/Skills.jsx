import "./Skills.css";
import "animate.css";
import sklill1 from "../../assets/html.svg";
import sklill2 from "../../assets/css.svg";
import sklill3 from "../../assets/javascript.svg";
import sklill4 from "../../assets/react.svg";
import sklill5 from "../../assets/java.svg";
import sklill6 from "../../assets/node.svg";
import sklill7 from "../../assets/visual-studio.svg";
import sklill8 from "../../assets/sql.svg";
import sklill9 from "../../assets/visual-studio-code.svg";
import sklill10 from "../../assets/intellij.svg";
import sklill11 from "../../assets/python.svg";
import sklill12 from "../../assets/pycharm.svg";
import sklill13 from "../../assets/c.svg";
import sklill14 from "../../assets/figma.svg";
import sklill15 from "../../assets/git.svg";
import sklill16 from "../../assets/mongodb.svg";
import sklill17 from "../../assets/postgresql.svg";
import sklill18 from "../../assets/sqlite.svg";
import sklill19 from "../../assets/tailwindcss.svg";

function Skills() {
  return (
    <div id="skills">
      <div className="skills-container">
        <h1 id="skills-heading">
          My <span className="skill">Skills</span>
        </h1>
      </div>
      <div id="skill-frame">
        <div className="technical-skills">
          <div className="skill-item">
            <img src={sklill1} alt="HTML" className="skills-image" />
            <span className="skill-label">HTML</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
          <div className="skill-item">
            <img src={sklill2} alt="CSS" className="skills-image" />
            <span className="skill-label">CSS</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
          <div className="skill-item">
            <img src={sklill3} alt="JavaScript" className="skills-image" />
            <span className="skill-label">JavaScript</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
          <div className="skill-item">
            <img src={sklill4} alt="React" className="skills-image" />
            <span className="skill-label">React</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
           <div className="skill-item">
            <img src={sklill19} alt="python" className="skills-image" />
            <span className="skill-label">Tailwind Css</span>
            <br />
            <span className="skill-sub-label">Junior</span>
          </div>
          <div className="skill-item">
            <img src={sklill5} alt="java" className="skills-image" />
            <span className="skill-label">Java</span>
            <br />
            <span className="skill-sub-label">Junior</span>
          </div>
          <div className="skill-item">
            <img src={sklill13} alt="c#" className="skills-image" />
            <span className="skill-label">C#</span>
            <br />
            <span className="skill-sub-label">Junior</span>
          </div>
          <div className="skill-item">
            <img src={sklill11} alt="python" className="skills-image" />
            <span className="skill-label">Python</span>
            <br />
            <span className="skill-sub-label">Junior</span>
          </div>
          <div className="skill-item">
            <img src={sklill6} alt="node" className="skills-image" />
            <span className="skill-label">Node JS</span>
            <br />
            <span className="skill-sub-label">Novice</span>
          </div>
          <div className="skill-item">
            <img src={sklill7} alt="vs" className="skills-image" />
            <span className="skill-label">Visual Studio</span> <br />
            <span className="skill-sub-label">Proficient</span>
          </div>
          <div className="skill-item">
            <img src={sklill8} alt="SQL" className="skills-image" />
            <span className="skill-label">SQL DB</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
          <div className="skill-item">
            <img src={sklill9} alt="vs code" className="skills-image" />
            <span className="skill-label">VS Code</span>
            <br />
            <span className="skill-sub-label">Proficient</span>
          </div>
          <div className="skill-item">
            <img src={sklill10} alt="Docker" className="skills-image" />
            <span className="skill-label">IntelliJ IDE</span>
            <br />
            <span className="skill-sub-label">Proficient</span>
          </div>

          <div className="skill-item">
            <img src={sklill12} alt="python" className="skills-image" />
            <span className="skill-label">PyCharm IDE</span>
            <br />
            <span className="skill-sub-label">Proficient</span>
          </div>
          <div className="skill-item">
            <img src={sklill14} alt="python" className="skills-image" />
            <span className="skill-label">Figma</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
           <div className="skill-item">
            <img src={sklill15} alt="python" className="skills-image" />
            <span className="skill-label">Git</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
           <div className="skill-item">
            <img src={sklill16} alt="python" className="skills-image" />
            <span className="skill-label">MongoDB</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
           <div className="skill-item">
            <img src={sklill17} alt="python" className="skills-image" />
            <span className="skill-label">Postgresql</span>
            <br />
            <span className="skill-sub-label">Intermediate</span>
          </div>
           <div className="skill-item">
            <img src={sklill18} alt="python" className="skills-image" />
            <span className="skill-label">sqlite</span>
            <br />
            <span className="skill-sub-label">Junior</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
