'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

const tags = [
  'Economics',
  'Data Science',
  'Artificial Intelligence',
  'Business Analytics',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            MAHALAKSHMI
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium text-muted-foreground"
          >
            <span className="text-[#D4AF37]">Economics Graduate</span>
            <span className="text-white/20">/</span>
            <span className="text-[#3B82F6]">Aspiring Data Scientist</span>
            <span className="text-white/20">/</span>
            <span className="text-[#A78BFA]">AI Enthusiast</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-6 max-w-xl text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            <span className="text-foreground">Turning Economic Knowledge</span>{' '}
            <span className="text-gradient">Into Business Impact</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            I combine Economics, Data Science and Artificial Intelligence to
            build intelligent solutions that solve real business problems using
            analytics and machine learning.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3B82F6]/90 hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.7)]"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/50 px-6 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10 hover:shadow-[0_0_30px_-8px_rgba(212,175,55,0.6)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-2.5">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className="glass rounded-full px-4 py-2 text-xs font-medium text-foreground/80"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass glow-lavender relative overflow-hidden rounded-3xl p-6"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#A78BFA]/20 blur-3xl" />
          <div className="relative">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/M@H@.jpeg"
                alt="Portrait of Mahalakshmi"
                fill
                priority
                sizes="176px"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              About Me
            </p>

            <div className="mt-5 space-y-3">
              <InfoRow
                icon={<GraduationCap className="h-4 w-4 text-[#3B82F6]" />}
                label="Education"
                value="B.A Economics"
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4 text-[#D4AF37]" />}
                label="University"
                value="Bharathidasan University · Tamil Nadu, India"
              />
              <InfoRow
                icon={<Target className="h-4 w-4 text-[#A78BFA]" />}
                label="Career Focus"
                value="Data Science · AI · Business Analytics"
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 border-t border-white/10 pt-5">
              <Social href="https://github.com/Maha0571" label="GitHub">
                <FaGithub className="h-4 w-4" />
              </Social>
              <Social
                href="https://linkedin.com/in/mahalakshmi-s-4917233ba"
                label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </Social>
              <Social href="mailto:mahalalitha06@gmail.com" label="Email">
                <HiOutlineMail className="h-4 w-4" />
              </Social>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <Sparkles className="h-5 w-5 animate-pulse text-[#A78BFA]/60" />
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] px-4 py-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5">
        {icon}
      </span>
      <div>
        <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-[#A78BFA]/40 hover:text-foreground"
    >
      {children}
    </a>
  )
}
