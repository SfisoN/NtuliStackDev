import './Home.css'
import homePic from '../../assets/Ntuli.jpg'




function Home(){
    return(
        
        <div id="home">
          <div className="profile-component">
          <div class="profile-left">   
          {/* <p class="intro">Hello World...it's</p> */}
          <h1 class="name">Sifiso Ntuli</h1>
          <h2 class="title">Aspiring Software Developer</h2>
          <p class="description">
            Specializing in <span class="highlight">Programming</span> and 
            <span class="highlight"> Web Development</span>, with a strong focus on crafting clean, efficient, and scalable solutions.
             Passionate about turning ideas into interactive digital experiences that blend creativity, functionality, and performance.
          </p>
        </div>
      
        <div class="profile-right">
          <img src={homePic} alt="Profile photo" class="profile-img" />
          <div class="social-icons">
            <a href="https://github.com/SfisoN"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sifiso-ntuli-565b40298/"><i className="fab fa-linkedin"></i></a>
            <a href="https://x.com/SNtuli53704"><i className="fab fa-x"></i></a>
          </div>
        </div>
          </div>
       
      </div>
      

       
        

    );
}

export default Home