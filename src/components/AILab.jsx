import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Terminal, Brain, Tag } from 'lucide-react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AILab() {
  const [text, setText] = useState('Today I built a streaming feature store backed by Kafka and Spark, deploying a transformer model with PyTorch to classify events in real-time. Performance improved significantly after Bayesian optimization.')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyze = async () => {
    setLoading(true)
    try {
      const r = await fetch(`${backendUrl}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      const data = await r.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lab" className="relative bg-gradient-to-b from-black to-[#0a0a12] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}}>
          <h2 className="text-3xl sm:text-4xl font-bold">AI Lab</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Type anything—from an idea to a research note—and watch the system summarize it, extract tags, estimate reading time and infer sentiment instantly.</p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.8}} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2"><Terminal size={16}/> Prompt</div>
            <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-fuchsia-500/60"/>
            <button onClick={analyze} disabled={loading} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-fuchsia-500/90 px-4 py-2 text-black font-semibold hover:bg-fuchsia-500 disabled:opacity-60">
              <Sparkles size={16}/>
              {loading ? 'Analyzing…' : 'Run AI Analyze'}
            </button>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.8}} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2"><Brain size={16}/> Output</div>
            {!result && <div className="text-white/60 text-sm">No output yet. Run the analyzer to see the AI in action.</div>}
            {result && result.error && <div className="text-red-400 text-sm">{result.error}</div>}
            {result && !result.error && (
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-white/50 uppercase">Summary</div>
                  <p className="mt-1 leading-relaxed">{result.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.tags?.map(t => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 px-3 py-1 text-xs">
                      <Tag size={12}/> {t}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-black/40 border border-white/10 p-3">Sentiment: <span className="font-semibold">{result.sentiment}</span></div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-3">Reading time: <span className="font-semibold">{result.reading_time_minutes}m</span></div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
