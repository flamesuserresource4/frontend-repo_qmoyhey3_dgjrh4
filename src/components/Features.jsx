import { motion } from 'framer-motion'
import { Sparkles, Thunderbolt, Paintbrush, Rocket, Workflow, Zap } from 'lucide-react'

const items = [
  { icon: Rocket, title: '3D Hero & Motion', desc: 'Spline scenes and framer-motion animations for cinematic intros.' },
  { icon: Zap, title: 'Performance', desc: 'Vite + React + Tailwind for blazing-fast loads and smooth UX.' },
  { icon: Paintbrush, title: 'Design System', desc: 'Consistent typography, spacing, and components with shadcn patterns.' },
  { icon: Workflow, title: 'CMS & Integrations', desc: 'Hook into your CMS or custom API. We handle the backend too.' },
]

export default function Features() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Sparkles className="w-3.5 h-3.5" /> Our approach
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we deliver</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A modern stack, tailored animations, and clean design that converts.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition" />
              <div className="relative z-10">
                <div className="mb-4 w-10 h-10 grid place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-slate-300 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
