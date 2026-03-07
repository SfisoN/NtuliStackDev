import { useState } from "react";
import "./Project.css";
import cooking from "../../assets/cooking.jfif";
import login from "../../assets/login.jfif";
import java from "../../assets/java.jfif";
import todo from "../../assets/to-do list.jfif";
import oop from "../../assets/oop.jfif";
import python from "../../assets/python.jfif";
import weather from "../../assets/weather1.jpg";
import khs from "../../assets/logo.jpg";
import hey from "../../assets/hclogo.png";

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 8,
      name: "Kimberley Boys High School Website",
      technologies: "React + Vite + Tailwind CSS",
      image: khs,
      github: "",
      site: "https://kimberley-boys-high-school.netlify.app/",
      category: "Web",
      deployed: true,
    },
    {
      id: 2,
      name: "To-Do-List",
      technologies: "React + Vite",
      image: todo,
      github: "https://github.com/SfisoN/To-Do-List",
      site: "https://mylistto.netlify.app/",
      category: "Web",
      deployed: true,
    },
    {
      id: 7,
      name: "Weather App",
      technologies: "React + Vite + Tailwind CSS",
      image: weather,
      github: "https://github.com/SfisoN/Weather-Dashboard",
      site: "https://weather-dashboard-one-ebon.vercel.app/",
      category: "Web",
      deployed: true,
    },
    {
      id: 9,
      name: "heyCreativ Website",
      technologies: "React + Vite + CSS",
      image: hey,
      github: "https://github.com/SfisoN/heyCreativ-Website",
      site: "https://heycreativ.netlify.app/",
      category: "Web",
      deployed: true,
    },
    {
      id: 1,
      name: "Recipe Website",
      technologies: "HTML, CSS, JS",
      image: cooking,
      github: "https://github.com/SfisoN/HTML-CSS-JS-Tas",
      site: "https://github.com/SfisoN/HTML-CSS-JS-Task",
      category: "Web",
      deployed: false,
    },
    {
      id: 3,
      name: "Login Form",
      technologies: "C# + SQL DB",
      image: login,
      github: "https://github.com/SfisoN/Login-Form",
      site: "https://github.com/SfisoN/Login-Form",
      category: "App",
      deployed: false,
    },
    {
      id: 4,
      name: "Java-MVC-App",
      technologies: "Java + IntelliJ",
      image: java,
      github: "https://github.com/SfisoN/Java-MVC-App",
      site: "https://github.com/SfisoN/Java-MVC-App",
      category: "App",
      deployed: false,
    },
    {
      id: 5,
      name: "Python GUI",
      technologies: "Python + Tkinter + SQLite + PyCharm",
      image: python,
      github: "https://github.com/SfisoN/Python-GUI-Tkinter",
      site: "https://github.com/SfisoN/Python-GUI-Tkinter",
      category: "App",
      deployed: false,
    },
    {
      id: 6,
      name: "C# Menu Driven App (OOP)",
      technologies: "C# + Visual Studio",
      image: oop,
      github: "https://github.com/SfisoN/C-MenuDrivenApplicationProject",
      site: "https://github.com/SfisoN/C-MenuDrivenApplicationProject",
      category: "Other",
      deployed: false,
    },
  ];

  const filters = ["All", "Web", "App", "Other"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Reset showAll whenever filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const hasMore = filteredProjects.length > 3;

  return (
    <div id="projects">
      <div className="project-container">
        <h1 id="project-heading">
          Project <span className="project-case">Showcase</span>
        </h1>

        {/* Filter Buttons */}
        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tech">{project.technologies}</p>
            <div className="project-buttons">
              <a
                href={project.github}
                className="git-btn"
                target="_blank"
                rel="noreferrer"
              >
                Git Repository
              </a>
              {project.deployed && (
                <a
                  href={project.site}
                  className="visit-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {hasMore && (
        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;