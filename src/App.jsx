import { Navbar } from "./Components/Navbar.jsx"
import { Projects } from "./Pages/Projects.jsx"
import { About } from "./Pages/About.jsx"

function App() {
  return (
    <div  className="bg-white dark:bg-zinc-950">
      <Navbar />
      <Projects />
      <About />
    </div>
  )
}

export default App