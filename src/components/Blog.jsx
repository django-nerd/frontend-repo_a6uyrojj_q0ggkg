import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Clock, ChevronRight } from 'lucide-react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const r = await fetch(`${backendUrl}/api/posts`)
      const data = await r.json()
      setPosts(data)
    } catch (e) {
      // ignore
    }
  }

  return (
    <section id="blog" className="relative bg-[#0a0a12] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}}>
          <h2 className="text-3xl sm:text-4xl font-bold">Latest intelligence</h2>
          <p className="mt-2 text-white/70 max-w-2xl">AI-enriched articles with instant summaries, sentiment and reading time.</p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <div className="col-span-full text-white/60 text-sm">No posts yet. Use the AI Lab or API to create one.</div>
          )}

          {posts.map((p, i) => (
            <motion.article key={p.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden group">
              {p.hero_image && <img src={p.hero_image} alt="" className="h-40 w-full object-cover"/>}
              <div className="p-4">
                <h3 className="font-semibold text-lg leading-snug line-clamp-2">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 line-clamp-3">{p.summary || p.content?.slice(0,160)}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                  <Clock size={14}/> {p.reading_time_minutes || 3} min • {p.sentiment}
                </div>
                {p.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0,4).map(t => (
                      <span key={t} className="rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 px-2 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>
                )}
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-fuchsia-300 group-hover:gap-2 transition-all text-sm">
                  Read more <ChevronRight size={16}/>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
