import { motion } from 'framer-motion'

const logos = ['stripe', 'vercel', 'github', 'notion', 'linear', 'figma']

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Trusted by modern teams</h2>
            <p className="text-slate-300 mt-2">We build fast sites used by product-led companies.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-white/10 text-white px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15">Work with us</a>
        </div>

        <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-slate-900/60 p-6">
          <motion.div initial={{ x: 0 }} animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="flex gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="text-slate-300/80">
                <span className="text-lg font-medium capitalize">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
