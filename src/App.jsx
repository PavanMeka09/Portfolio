import { Navbar } from "./Components/Navbar.jsx"
import { Projects } from "./Pages/Projects.jsx"
import { About } from "./Pages/About.jsx"
import { Footer } from "./Components/Footer.jsx"

function App() {
  return (
    <div  className="bg-white dark:bg-zinc-950">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App