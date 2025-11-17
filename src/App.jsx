import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AILab from './components/AILab'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter]">
      <Navbar />
      <Hero />
      <AILab />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
