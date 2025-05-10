import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-logo'>
        <h2>Ntuli<span id='dot'>.</span>dev</h2>
        <div>
          <p className='footer-text'>&copy; {new Date().getFullYear()} Ntuli. All rights reserved.</p>
          <div className='social-icons'>
            <a href="https://github.com/SfisoN"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sifiso-ntuli-565b40298/"><i className="fab fa-linkedin"></i></a>
            <a href="https://x.com/SNtuli53704"><i className="fab fa-x"></i></a>
            
          </div>
        </div>

      </div>

    </footer>
    
  )
}

export default Footer