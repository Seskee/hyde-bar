'use client'
export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-dvh bg-hyde-bg flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-heading text-4xl text-gold italic mb-4">Dogodila se greška.</h1>
      <button onClick={reset} className="border border-white/10 px-8 py-3 text-[10px] uppercase tracking-widest text-white/50 hover:text-gold transition-colors">
        Pokušaj ponovno
      </button>
    </main>
  )
}