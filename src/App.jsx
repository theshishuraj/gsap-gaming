import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Story from "./components/Story"
import Contact from "./components/Contact"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
    </main>
  )
}

export default App