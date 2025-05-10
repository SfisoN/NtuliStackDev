import React, { useState } from "react";
import "./NavBar.css";
import "animate.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="nav-main">
      <header id="nav-header">
        <nav id="nav-item">
          <h2 id="nav-logo">
            Ntuli<span id="dot">.</span>dev
          </h2>
          <div className="nav-menu">
            <ul className={`nav-list grid ${menuOpen ? "active" : ""}`}>
              <li className="nav-list">
                <a className="link-nav" onClick={() => smoothScroll("home")}>
                  Home
                </a>
              </li>
              <li className="nav-list">
                <a className="link-nav" onClick={() => smoothScroll("skills")}>
                  Skills
                </a>
              </li>
              <li className="nav-list">
                <a
                  className="link-nav"
                  onClick={() => smoothScroll("projects")}
                >
                  Project Showcase
                </a>
              </li>
              <li className="nav-list">
                <a
                  className="link-nav"
                  onClick={() => smoothScroll("certificates")}
                >
                  Certificates
                </a>
              </li>
              <li className="nav-list">
                <a className="link-nav" onClick={() => smoothScroll("aboutMe")}>
                  About Me
                </a>
              </li>
              <li className="nav-list">
                <a className="link-nav" onClick={() => smoothScroll("contact")}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-toggle" onClick={menuToggle}>
              <i
                className={`uil ${menuOpen ? "uil-times" : "uil-bars"}`}
                id="nav_icon"
              ></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
