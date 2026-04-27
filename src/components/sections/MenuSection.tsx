import Image from 'next/image'


export default function MenuPage() {
  return (
    <section className="flex-grow pb-32">
      
      {/* Hero Section (Asymmetrical Editorial) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 flex flex-col gap-6 z-10">
          <span className="text-[12px] text-[var(--gold)] tracking-[0.15em] uppercase font-medium flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
            THE BOTANICAL NOIR
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-[var(--gold)] leading-tight">
            Autumn<br />Collection
          </h1>
          <p className="font-sans text-lg text-[var(--text-muted)] max-w-md mt-4">
            An exploration of foraged ingredients and primal techniques, grounded in the quiet elegance of the forest floor.
          </p>
        </div>
        <div className="md:col-span-7 h-[500px] md:h-[700px] relative mt-12 md:mt-0 overflow-hidden border border-[var(--gold-border)]">
          <Image
            src="/images/interijer4.webp" // Iskoristi onu sliku sa stolom i cvijećem
            alt="Autumn Collection Hero"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent md:bg-gradient-to-l"></div>
        </div>
      </section>

      {/* Menu Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        
        {/* Starters */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[12px] text-[var(--gold)] tracking-[0.2em] uppercase font-medium mb-4">Starters</h2>
            <div className="h-px bg-[var(--gold-border)] w-12"></div>
          </div>
          <div className="flex flex-col gap-12">
            {[
              { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, cured egg yolk, wild onion ash', price: '24 €' },
              { name: 'Hokkaido Scallop Crudo', desc: 'Green apple dashi, finger lime, cold-pressed shiso oil', price: '28 €' },
              { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow toast', price: '32 €' }
            ].map((item, i) => (
              <article key={i} className="flex flex-col md:flex-row md:items-end w-full group cursor-pointer">
                <div className="flex-shrink-0 md:pe-6 pb-2 md:pb-0 z-10 bg-[var(--bg-primary)] md:max-w-[70%]">
                  <h3 className="font-heading text-2xl text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300">{item.name}</h3>
                  <p className="font-sans text-[14px] text-[var(--text-muted)] italic mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:block flex-grow border-b border-dotted border-[var(--gold-border)] mx-4 mb-2"></div>
                <div className="flex-shrink-0 md:ps-6 font-sans text-lg text-[var(--gold)] z-10 bg-[var(--bg-primary)] text-left md:text-right pt-2 md:pt-0">
                  {item.price}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-[80%] mx-auto h-px bg-[var(--gold-border)] mb-32"></div>

        {/* Main Course */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[12px] text-[var(--gold)] tracking-[0.2em] uppercase font-medium mb-4">Main Course</h2>
            <div className="h-px bg-[var(--gold-border)] w-12"></div>
          </div>
          <div className="flex flex-col gap-12">
            {[
              { name: 'Aged Duck Breast', desc: 'Charred endive, blackberry gastrique, sunchoke purée', price: '48 €' },
              { name: 'Black Cod Misoyaki', desc: 'Turnip dashi, compressed kelp, sea bean', price: '52 €' },
              { name: 'Forager\'s Risotto', desc: 'Aged acquerello rice, chanterelles, pine nut foam, preserved lemon', price: '38 €' }
            ].map((item, i) => (
              <article key={i} className="flex flex-col md:flex-row md:items-end w-full group cursor-pointer">
                <div className="flex-shrink-0 md:pe-6 pb-2 md:pb-0 z-10 bg-[var(--bg-primary)] md:max-w-[70%]">
                  <h3 className="font-heading text-2xl text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300">{item.name}</h3>
                  <p className="font-sans text-[14px] text-[var(--text-muted)] italic mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:block flex-grow border-b border-dotted border-[var(--gold-border)] mx-4 mb-2"></div>
                <div className="flex-shrink-0 md:ps-6 font-sans text-lg text-[var(--gold)] z-10 bg-[var(--bg-primary)] text-left md:text-right pt-2 md:pt-0">
                  {item.price}
                </div>
              </article>
            ))}
          </div>
          
          {/* Sommelier Note */}
          <div className="border-l border-[var(--gold)] pl-6 py-4 my-12 ms-4 md:ms-12 max-w-2xl bg-[var(--bg-secondary)]">
            <p className="text-[12px] text-[var(--gold)] tracking-[0.15em] uppercase font-medium mb-3">Sommelier's Note</p>
            <p className="font-heading text-xl text-[var(--text-primary)] italic opacity-90 leading-snug">
              "The tartness of the blackberry gastrique finds its perfect counterpoint in our 2014 Barolo, drawing out deeply rooted notes of truffle and dark cherry."
            </p>
          </div>
        </section>

      </div>
    </section>
  )
}