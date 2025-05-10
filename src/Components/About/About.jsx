import React from 'react';
import './About.css'
import myPic from '../../assets/Sifiso.jpg'
import cv from '../../assets/NtuliCV.pdf'



function AboutMe(){

    

    return(
        <div id="aboutMe">
            <div id='about-container'> <h1 id='about-title'>About <span id='me'>Me</span></h1></div>
            <div className='about-content'>
            <img src={myPic} alt="sfiso" height="300px" className='about-image'/>
            <div id='about-description'>
            <section className='about-section'>
                <p className='about-text'>An aspiring full-stack developer with a passion for building seamless, high-performing web applications, continuously learning and evolving, I embrace challenges that push boundaries and lead to meaningful innovation.</p>
                    
                   <p className='about-text'>With a strong creative and problem-solving mindset, I bring ideas to life through engaging digital experiences. </p>
                   <p className='about-text'> My goal is to deliver web solutions that not only meet expectations but exceed them—optimizing performance, enhancing functionality, and ensuring impact.</p>
                   <p className='about-text'>Let’s build something amazing together!</p>

                   <a href={cv}>
                   <button id='cv-button'>Download CV</button>
                   </a>
                   
                   
              
            </section>
            </div>
            
            </div> 
            
        </div>

    );
}
export default AboutMe