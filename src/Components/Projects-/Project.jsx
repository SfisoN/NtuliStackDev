import './Project.css';
import cooking from '../../assets/cooking.jfif'
import login from '../../assets/login.jfif'
import java from '../../assets/java.jfif'
import todo from '../../assets/to-do list.jfif'
import oop from '../../assets/oop.jfif'
import python from '../../assets/python.jfif'




function Project(){

    const projects =[
        {
            id: 1,
            name: "Recipe Website",
            technologies: "HTML-CSS-JS",
            image: cooking,
            github: "https://github.com/SfisoN/HTML-CSS-JS-Task",
        },
        {
            id: 2,
            name: "To-Do-List",
            technologies: "React + Vite",
            image: todo,
            github: "https://github.com/SfisoN/To-Do-List",
        },
        {
            id: 3,
            name: "Login Form",
            technologies: "C# + SQL DB",
            image: login,
            github: "https://github.com/SfisoN/Login-Form",
        },
        {
            id: 4,
            name: "Java-MVC-App",
            technologies: "Java + IntelliJ",
            image: java,
            github: "https://github.com/SfisoN/Java-MVC-App",
        },
        {
            id: 5,
            name: "Python GUI",
            technologies: "Python + Tkinter + SQLlite + Pycharm",
            image: python,
            github: "https://github.com/SfisoN/Python-GUI-Tkinter",
        },
        {
            id: 6,
            name: "C# Menu Driven App (OOP)",
            technologies: "C# + Visual Studio",
            image: oop,
            github: "https://github.com/SfisoN/C-MenuDrivenApplicationProject",
        },
    ];


    return(
        <div id='projects'>
            <div className='project-container'><h1 id='project-heading'>Project <span className='project-case'>Showcase</span></h1></div>
            <div className='project-grid'>
                {projects.map((projects) =>
                <div key={projects.id} className='project-card'>
                    <img src={projects.image} alt={projects.name} className='project-image' />
                    <h3 className="project-name">{projects.name}</h3>
                    <p className="project-tech">{projects.technologies}</p>
                    <a 
                      href={projects.github}
                      className="project-link"
                      target= "_blank"
                    >
                        GitHub Repo
                    </a>

                </div>)}
            </div>
            
        </div>
    );

}
export default Project