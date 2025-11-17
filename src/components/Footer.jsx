export default function Footer(){
  return (
    <footer id="contact" className="bg-black text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Astra Nova — Data Scientist & Engineer</p>
        <p className="text-white/50">Built with an AI-native stack.</p>
      </div>
    </footer>
  )
}
