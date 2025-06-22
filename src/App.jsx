import { Navbar } from "./Components/Navbar.jsx"
import { Projects } from "./Pages/Projects.jsx"
import { Hero } from "./Pages/Hero.jsx"
import { Footer } from "./Components/Footer.jsx"
import { Skills } from "./Pages/Skills.jsx"
import { Contact } from "./Pages/Contact.jsx"
import { ScrollToTop } from "./Components/ScrollToTop.jsx"
// import { Experience } from "./Pages/Experience.jsx"

function App() {
  return (
    <div  className="bg-white dark:bg-zinc-950">
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App