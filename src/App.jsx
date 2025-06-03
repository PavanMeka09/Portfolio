import { Navbar } from "./Components/Navbar.jsx"
import { Projects } from "./Pages/Projects.jsx"
import { Hero } from "./Pages/Hero.jsx"
import { Footer } from "./Components/Footer.jsx"

function App() {
  return (
    <div  className="bg-white dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App