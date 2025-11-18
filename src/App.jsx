import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-white">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0),rgba(2,6,23,0.3))]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />

        {/* CTA */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to build something cinematic?</h3>
                <p className="text-slate-300 mt-2">Tell us about your project and we’ll get back within a day.</p>
              </div>
              <a href="#" className="rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-100 transition">Start a project</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Flames Studio</span>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
