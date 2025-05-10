import github from '../Assets/github.svg'
import linkedin from '../Assets/linkedin.svg'
import insta from '../Assets/instagram.svg'
import './Links.css'



function Link(){
    return(
        <div className='home-link'>
            {""}
            <a href=""
            className='link-icon'>
               <img src={github} alt="git" style={{ cursor: 'pointer' }} />
            </a>
            <a href=""
            className='link-icon'>
               <img src={linkedin} alt="linked" style={{ cursor: 'pointer' }} />
            </a>
            <a href=""
            className='link-icon'>
               <img src={insta} alt="insta" style={{ cursor: 'pointer' }} />
            </a>
        </div>
    );

}
export default Link


