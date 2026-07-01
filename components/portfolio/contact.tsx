'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { Reveal } from './reveal'

const channels = [
  {
    label: 'Email',
    value: 'mahalalitha06@gmail.com',
    href: 'mailto:mahalalitha06@gmail.com',
    icon: HiOutlineMail,
    color: '#3B82F6',
  },
  {
    label: 'GitHub',
    value: '@Maha0571',
    href: 'https://github.com/Maha0571',
    icon: FaGithub,
    color: '#A78BFA',
  },
  {
    label: 'LinkedIn',
    value: 'in/mahalakshmi-s',
    href: 'https://linkedin.com/in/mahalakshmi-s-4917233ba',
    icon: FaLinkedinIn,
    color: '#D4AF37',
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <div className="glass glow-lavender relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#A78BFA]/20 blur-3xl" />

          <div className="relative">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              Contact
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Meaningful Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Open to internships and collaborations in data science, AI and
              business analytics. Let&apos;s talk.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="glass flex flex-col items-center gap-2 rounded-2xl p-5 transition-shadow hover:shadow-xl hover:shadow-black/30"
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5"
                      style={{ boxShadow: `0 0 24px -10px ${c.color}` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: c.color }} />
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {c.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {c.value}
                    </span>
                  </motion.a>
                )
              })}
            </div>

            <a
              href="/Resume.pdf"
              className="mt-10 inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/50 px-7 py-3.5 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10 hover:shadow-[0_0_30px_-8px_rgba(212,175,55,0.6)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
