import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent" />
      <nav className="relative mx-auto max-w-7xl flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="relative">
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 blur opacity-50" />
            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-slate-900/80 ring-1 ring-white/10">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">Flames Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {links.map(l => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15">
            Start a project
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="ml-auto h-full w-80 max-w-[80%] bg-slate-900/95 ring-1 ring-white/10 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-semibold">Menu</span>
              <button className="text-slate-300" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid gap-4">
              {links.map(l => (
                <a key={l.label} href={l.href} className="text-slate-200 text-base" onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15">Start a project</a>
          </div>
        </div>
      )}
    </header>
  )
}
