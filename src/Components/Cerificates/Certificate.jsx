import { useEffect, useState } from 'react';
import alx from '../../assets/Professional-Foundations.png';
import progress from '../../assets/Work in Progress.jpg';
import './Certificate.css'; // optional if you prefer separate styling

const Certificates = () => {
  const images = [alx, progress];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='certificates'>
      <div id="cert-title">
        <h1 className="cert-heading">Certificates</h1></div>
      <div id="cert-left">
        <p className="text">
          My journey towards certification is an ongoing pursuit of growth and achievement. I am actively enrolled in multiple programs, each bringing new expertise and validation of my skills. Stay tuned for continuous updates as I progress and share the certifications I earn along the way!
        </p>
      </div>
      <div id="cert-right">
        <img
          src={images[currentIndex]}
          alt="certificate"
          className="cert-image"
        />
      </div>
    </div>
  );
};

export default Certificates; 