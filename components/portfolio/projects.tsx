'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, PlayCircle, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Reveal, SectionHeading } from './reveal'

const projects = [
  {
    title: 'Economic Recovery Intelligence Platform',
    image: '/Economic intelligence.png',
    problem:
      'Policymakers and investors struggle to gauge how quickly an economy will rebound after a shock.',
    solution:
      'A predictive platform that forecasts economic recovery using GDP, inflation and unemployment signals.',
    impact:
      'Surfaces early recovery indicators, helping stakeholders time decisions with greater confidence.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    accent: '#3B82F6',
    github: 'https://github.com/Maha0571/Economy_recovery_intelligence_system',
    demoLabel: 'Recorded Video',
    demoHref: 'https://youtu.be/J7jyHHFt4JA',
  },
  {
    title: 'Mental Health Detection using Deep Learning',
    image: '/mental health.png',
    problem:
      'Mental health conditions are often difficult to detect early due to limited access to timely screening tools.',
    solution:
      'A deep learning-based NLP platform that analyzes text input to identify potential mental health conditions and provides real-time assessment.',
    impact:
      'Supports early mental health awareness by delivering fast and accurate predictions through an interactive web application.',
    tech: [
      'Python',
      'TensorFlow',
      'Keras',
      'NLP',
      'Streamlit'
    ],
    accent: '#8B5CF6',
    github: 'https://github.com/Maha0571/Mental_health_Detection',
    demoLabel: 'Live Demo',
    demoHref: 'https://mentalhealthdetection-whpkfsvfzkgf5zsdduappav.streamlit.app/',
  },
  {
    title: 'Customer Retention Intelligence System',
    image: '/customer retension.png',
    problem:
      'Businesses lose revenue to churn without knowing which customers are about to leave or why.',
    solution:
      'A churn prediction system that scores customers by risk and recommends retention actions.',
    impact:
      'Enables proactive outreach to at-risk customers, protecting recurring revenue and loyalty.',
    tech: ['Python', 'SQL', 'Scikit-learn'],
    accent: '#A78BFA',
    github: '',
    demoLabel: 'Live Demo',
    demoHref: '#',
  },
  {
    title: 'Business Revenue Forecasting Engine',
    image: '/business revenue.png',
    problem:
      'Teams plan budgets and inventory on gut feel, leading to costly over- and under-estimation.',
    solution:
      'A forecasting engine that predicts future revenue using time-series and predictive analytics.',
    impact:
      'Delivers reliable revenue projections that sharpen planning, budgeting and resource allocation.',
    tech: ['Python', 'Pandas', 'Time Series'],
    accent: '#D4AF37',
    github: '',
    demoLabel: 'Live Demo',
    demoHref: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Where data meets business value"
        description="Three case studies that turn analytics and machine learning into real outcomes."
      />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.05}>
            <motion.article
              whileHover={{ y: -6 }}
              className="group glass overflow-hidden rounded-3xl transition-shadow hover:shadow-2xl hover:shadow-black/40"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-56 overflow-hidden">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, transparent)`,
                    }}
                  />
                </div>

                <div className="p-7 sm:p-9">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {p.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <Detail
                      icon={<Target className="h-4 w-4" />}
                      label="Business Problem"
                      text={p.problem}
                      color={p.accent}
                    />
                    <Detail
                      icon={<Lightbulb className="h-4 w-4" />}
                      label="Solution"
                      text={p.solution}
                      color={p.accent}
                    />
                    <Detail
                      icon={<TrendingUp className="h-4 w-4" />}
                      label="Business Impact"
                      text={p.impact}
                      color={p.accent}
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      Technologies Used
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={p.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3B82F6]/90 hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.7)]"
                    >
                      {p.demoLabel === 'Recorded Video' ? (
                        <PlayCircle className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                      {p.demoLabel}
                    </a>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-white/30 hover:bg-white/5"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Detail({
  icon,
  label,
  text,
  color,
}: {
  icon: React.ReactNode
  label: string
  text: string
  color: string
}) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5"
        style={{ color }}
      >
        {icon}
      </span>
      <div>
        <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-foreground/85">
          {text}
        </p>
      </div>
    </div>
  )
}
