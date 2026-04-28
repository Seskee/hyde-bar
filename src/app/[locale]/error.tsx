'use client'
// POPRAVAK: Error komponenta mora primati i "error" prop, inače ruši build logiku u Edge casevima
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <main className="min-h-dvh bg-hyde-bg flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-heading text-4xl text-gold italic mb-4">Dogodila se greška.</h1>
      <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-8 font-mono">{error.message || "Unknown error"}</p>
      <button onClick={reset} className="border border-white/10 px-8 py-3 text-[10px] uppercase tracking-widest text-white/50 hover:text-gold transition-colors">
        Pokušaj ponovno
      </button>
    </main>
  )
}