import NavBar from "./Components/Header/NavBar.jsx"
import Home from "./Components/Hero/Home.jsx"
import AboutMe from "./Components/About/About.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Project from "./Components/Projects-/Project.jsx"
import Certificate from "./Components/Cerificates/Certificate.jsx"
import Form from "./Components/Contact/Form.jsx"
import Footer from "./Components/Footer/Footer.jsx"


function App() {

  return (
    <>
     <NavBar/>
     <Home/>
     <Skills/>
     <Project/>
     <Certificate/>
     <AboutMe/>
     <Form/>
     <Footer />
    </>
  )
}

export default App
