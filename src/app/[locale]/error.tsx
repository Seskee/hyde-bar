'use client'
import MagneticWrapper from '@/components/ui/MagneticWrapper'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <main className="min-h-dvh bg-hyde-bg flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-heading text-4xl text-gold italic mb-4">Dogodila se greška.</h1>
      {/* FIX: text-xs, text-white/60 */}
      <p className="text-xs text-white/60 uppercase tracking-widest mb-8 font-mono">{error.message || "Unknown error"}</p>
      <MagneticWrapper>
        <button onClick={reset} className="border border-white/20 px-8 py-3 text-xs uppercase tracking-widest text-white/90 hover:text-gold hover:border-gold transition-colors">
          Pokušaj ponovno
        </button>
      </MagneticWrapper>
    </main>
  )
}