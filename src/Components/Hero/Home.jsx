import "./Home.css";
import homePic from "../../assets/Ntuli.jpg";

function Home() {
  return (
    <div id="home">
      <div className="profile-component">

        {/* Left: text content */}
        <div className="profile-left">
          <p className="intro">👋 Hello, I'm</p>
          <h1 className="name">Sifiso Ntuli</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="description">
            Specializing in <span className="highlight">Programming</span> and
            <span className="highlight"> Web Development</span>, with a strong
            focus on crafting clean, efficient, and scalable solutions. Passionate
            about turning ideas into interactive digital experiences that blend
            creativity, functionality, and performance.
          </p>
        </div>

        {/* Right: animated figure */}
        <div className="profile-right">

          <div className="figure-wrap">
            {/* Pulsing rings */}
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>

            {/* Floating data chips */}
            <div className="chip chip-1">⚡ <span>Full Stack</span></div>
            <div className="chip chip-2">🎓 <span>Developer</span></div>
            <div className="chip chip-3">📍 <span>South Africa</span></div>

            {/* Photo card */}
            <div className="photo-card">
              <img src={homePic} alt="Sifiso Ntuli - Full Stack Developer" />
              <div className="scanline"></div>
              <div className="scan-beam"></div>
            </div>

            {/* Orbiting dot */}
            <div className="orbit-wrap">
              <div className="orbit-dot"></div>
            </div>

            {/* Glow shadow */}
            <div className="glow-base"></div>
          </div>

          {/* Status badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for hire
          </div>

          {/* Social icons */}
          <div className="social-icons">
            <a href="https://github.com/SfisoN" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sifiso-ntuli-565b40298/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/SNtuli53704" target="_blank" rel="noreferrer" aria-label="X / Twitter">
              <i className="fab fa-x"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;