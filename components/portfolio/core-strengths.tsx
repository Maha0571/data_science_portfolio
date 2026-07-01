'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Puzzle,
  BarChart3,
} from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const strengths = [
  {
    title: 'Business Thinking',
    desc: 'I frame every problem around the decision it informs and the value it creates.',
    icon: Briefcase,
    color: '#D4AF37',
  },
  {
    title: 'Economics Background',
    desc: 'A rigorous grounding in how markets, incentives and behavior drive outcomes.',
    icon: GraduationCap,
    color: '#D4AF37',
  },
  {
    title: 'Data Analytics',
    desc: 'Comfortable wrangling, exploring and visualizing data to surface real insight.',
    icon: BarChart3,
    color: '#3B82F6',
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Hands-on with machine learning and modern AI to build intelligent solutions.',
    icon: Brain,
    color: '#A78BFA',
  },
  {
    title: 'Problem Solving',
    desc: 'Breaking ambiguous challenges into structured, testable and solvable parts.',
    icon: Puzzle,
    color: '#3B82F6',
  },
  {
    title: 'Continuous Learning',
    desc: 'Relentlessly curious — always sharpening skills across data, AI and business.',
    icon: Lightbulb,
    color: '#A78BFA',
  },
]

export function CoreStrengths() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Core Strengths"
        title="What I bring to the table"
        description="A blend of analytical rigor, business intuition and technical depth."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                  style={{ backgroundColor: s.color }}
                />
                <span
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
                  style={{ boxShadow: `0 0 24px -10px ${s.color}` }}
                >
                  <Icon className="h-6 w-6" style={{ color: s.color }} />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
