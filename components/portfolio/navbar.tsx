'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
        style={{ width: 'calc(100% - 2rem)' }}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="glass glow-lavender flex h-10 w-10 items-center justify-center rounded-xl font-mono text-lg font-bold text-[#A78BFA]">
            M
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-foreground/90 sm:block">
            Mahalakshmi
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-[#D4AF37]/50 px-4 py-2 text-sm font-medium text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.5)] sm:flex"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 md:hidden"
          >
            <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-2 rounded-lg border border-[#D4AF37]/50 px-4 py-3 text-sm font-medium text-[#D4AF37]"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
