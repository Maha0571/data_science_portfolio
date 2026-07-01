export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-float-slow absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/15 blur-[120px]" />
      <div className="animate-float-slower absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#A78BFA]/15 blur-[140px]" />
      <div className="animate-float-slow absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[#D4AF37]/8 blur-[130px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
