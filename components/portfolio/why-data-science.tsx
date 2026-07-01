'use client'

import { Reveal } from './reveal'
import { Quote } from 'lucide-react'

export function WhyDataScience() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
          Why Data Science
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          From Economics to{' '}
          <span className="text-gradient">Data Science</span>
        </h2>
      </Reveal>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <Reveal delay={0.12}>
          <p>
            My journey started with{' '}
            <span className="font-medium text-[#D4AF37]">Economics</span>, where
            I learned to understand markets, business decisions and data. As I
            explored technology, I became interested in{' '}
            <span className="font-medium text-[#3B82F6]">Data Science</span> and{' '}
            <span className="font-medium text-[#A78BFA]">Artificial Intelligence</span>.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p>
            Today, I am building practical projects in Data Science and Machine
            Learning to solve real-world business problems. My goal is to turn
            data into meaningful insights and continuously grow as a Data
            Scientist.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.24}>
        <blockquote className="glass glow-blue mt-12 flex gap-4 rounded-2xl p-7">
          <Quote className="h-8 w-8 shrink-0 text-[#3B82F6]" />
          <p className="text-balance text-lg font-medium italic text-foreground">
            &ldquo;Economics gave me the questions. Data science gave me the
            tools to answer them — and AI lets me act on the answers.&rdquo;
          </p>
        </blockquote>
      </Reveal>
    </section>
  )
}
