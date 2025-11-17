import { useState } from 'react'
import { Menu, Cpu, Notebook, Sparkles, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center shadow-lg shadow-fuchsia-500/30">
            <Cpu className="text-white" size={18} />
          </div>
          <div>
            <p className="text-white font-semibold leading-5">Astra Nova</p>
            <p className="text-xs text-white/60 -mt-0.5">Data Scientist • Engineer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#lab" className="hover:text-white transition">AI Lab</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition flex items-center gap-2"><Github size={16}/>GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition flex items-center gap-2"><Linkedin size={16}/>LinkedIn</a>
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 text-white/80 space-y-2">
          <a href="#lab" className="block">AI Lab</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  )
}
