import { useState } from "react";
import "./Certificate.css";

// Certificate data — swap href values with real links
const certs = [
  { title: "ALX Professional Foundations", href: "https://savanna.alxafrica.com/certificates/2hS58JfZEp" },
  { title: "ALX Software Engineering Programme in Front-End Web Development", href: "https://savanna.alxafrica.com/certificates/TLzpr5es9X" },
  { title: "ALX Software Engineering Programme in Back-End Web Development", href: "https://savanna.alxafrica.com/certificates/mSH6sRzGYM" },
 
];

const CertCard = ({ title, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`cert-card ${hovered ? "cert-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="cert-card__title">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-card__btn"
      >
        View Certificate
      </a>
    </div>
  );
};

const Certificates = () => {
  return (
    <div id="certificates">
      <div className="cert-inner">
        {/* Header */}
        <div id="cert-title">
          <p className="cert-subheading">Browse My Recent</p>
          <h2 className="cert-heading">Certificates</h2>
        </div>

        {/* Grid */}
        <div className="cert-grid">
          {certs.map((cert, i) => (
            <CertCard key={i} title={cert.title} href={cert.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
