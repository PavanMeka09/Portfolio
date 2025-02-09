import { Navbar } from "./Components/Navbar.jsx"
import { Projects } from "./Pages/Projects.jsx"
import { Skills } from "./Pages/Skills.jsx"
import { About } from "./Pages/About.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Projects />
      <Skills />
      <About />
    </>
  )
}

export default App