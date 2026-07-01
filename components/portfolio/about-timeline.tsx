'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  LineChart,
  Network,
  Sigma,
  TrendingUp,
} from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const steps = [
  {
    title: 'Economics',
    desc: 'A strong foundation in markets, incentives and how decisions shape outcomes.',
    icon: Sigma,
    color: '#D4AF37',
  },
  {
    title: 'Business Analytics',
    desc: 'Translating raw numbers into clear, actionable business intelligence.',
    icon: LineChart,
    color: '#D4AF37',
  },
  {
    title: 'Data Science',
    desc: 'Turning data into insight with statistics, programming and visualization.',
    icon: TrendingUp,
    color: '#3B82F6',
  },
  {
    title: 'Machine Learning',
    desc: 'Building predictive models that learn patterns and forecast the future.',
    icon: Network,
    color: '#3B82F6',
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Designing intelligent systems that reason, automate and create value.',
    icon: Brain,
    color: '#A78BFA',
  },
]

export function AboutTimeline() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="An evolving path of thinking"
        description="Each discipline builds on the last — from understanding economies to engineering intelligence."
      />

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#D4AF37] via-[#3B82F6] to-[#A78BFA] opacity-40 md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLeft = i % 2 === 0
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-5 pl-16 md:pl-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="glass absolute left-0 flex h-12 w-12 items-center justify-center rounded-2xl md:left-1/2 md:-translate-x-1/2"
                    style={{ boxShadow: `0 0 28px -8px ${step.color}` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: step.color }} />
                  </motion.span>

                  <div className="md:w-1/2" />
                  <div className="glass w-full rounded-2xl p-5 transition-transform hover:-translate-y-1 md:w-1/2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
