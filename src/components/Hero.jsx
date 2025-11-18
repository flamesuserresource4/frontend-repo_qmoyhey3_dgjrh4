import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now building with AI
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Design. Animate. Ship.
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              We craft fast, animated websites with a cinematic feel. From 3D hero scenes to micro‑interactions that guide users.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition">Start a project</a>
              <a href="#work" className="rounded-full bg-white/10 text-white px-5 py-3 text-sm ring-1 ring-white/15 hover:bg-white/15">See our work</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
