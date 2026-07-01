'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  Code2,
  Cpu,
  Database,
  Sigma,
} from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const groups = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#3B82F6',
    skills: ['Python', 'SQL', 'Git'],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: '#3B82F6',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Power BI'],
  },
  {
    title: 'Machine Learning',
    icon: Cpu,
    color: '#A78BFA',
    skills: ['Regression', 'Classification', 'Random Forest', 'XGBoost'],
  },
  {
    title: 'Artificial Intelligence',
    icon: Bot,
    color: '#A78BFA',
    skills: ['TensorFlow', 'CNN', 'NLP', 'Generative AI'],
  },
  {
    title: 'Analytics',
    icon: Sigma,
    color: '#D4AF37',
    skills: ['Statistics', 'Econometrics', 'Business Intelligence'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit I build with"
        description="A practical stack spanning programming, data, machine learning and AI."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5"
                    style={{ boxShadow: `0 0 24px -10px ${group.color}` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: group.color }} />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-white/20 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
