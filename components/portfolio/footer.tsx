export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-12">
      <div className="border-t border-white/10 pt-10 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <span className="glass flex h-9 w-9 items-center justify-center rounded-lg font-mono text-base font-bold text-[#A78BFA]">
            M
          </span>
          <span className="text-sm font-medium text-foreground/90">
            Mahalakshmi
          </span>
        </div>
        <p className="mt-5 text-lg font-medium text-foreground">
          Transforming Data Into Decisions.
        </p>
        <p className="mt-1 text-pretty text-muted-foreground">
          Building AI Solutions That Create Business Value.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Mahalakshmi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
