'use client'
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="location" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="mb-16">
        <h2 className="font-heading text-5xl md:text-6xl text-[var(--gold)] mb-6">Visit Us</h2>
        <p className="font-sans text-lg text-[var(--text-muted)] max-w-2xl">
          For general inquiries, private event bookings, or to arrange a bespoke culinary experience, please correspond with our concierge team below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-6 order-2 lg:order-1 mt-12 lg:mt-0">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label htmlFor="name" className="text-[12px] text-[var(--text-muted)] block mb-3 uppercase tracking-widest">Guest Name</label>
              <input type="text" id="name" placeholder="Enter your full name" className="w-full bg-transparent border-0 border-b border-[var(--gold-border)] focus:border-[var(--gold)] focus:ring-0 px-0 py-3 font-sans text-lg text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 transition-colors outline-none" />
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="text-[12px] text-[var(--text-muted)] block mb-3 uppercase tracking-widest">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" className="w-full bg-transparent border-0 border-b border-[var(--gold-border)] focus:border-[var(--gold)] focus:ring-0 px-0 py-3 font-sans text-lg text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 transition-colors outline-none" />
            </div>

            <div className="relative">
              <label htmlFor="inquiry" className="text-[12px] text-[var(--text-muted)] block mb-3 uppercase tracking-widest">Nature of Inquiry</label>
              <div className="relative">
                <select id="inquiry" className="w-full bg-transparent border-0 border-b border-[var(--gold-border)] focus:border-[var(--gold)] focus:ring-0 px-0 py-3 font-sans text-lg text-[var(--text-primary)] appearance-none outline-none cursor-pointer">
                  <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)]" value="general">General Information</option>
                  <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)]" value="private">Private Dining & Events</option>
                  <option className="bg-[var(--bg-secondary)] text-[var(--text-primary)]" value="careers">Careers</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="text-[12px] text-[var(--text-muted)] block mb-3 uppercase tracking-widest">Message</label>
              <textarea id="message" rows={4} placeholder="How may we assist you?" className="w-full bg-transparent border-0 border-b border-[var(--gold-border)] focus:border-[var(--gold)] focus:ring-0 px-0 py-3 font-sans text-lg text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 resize-none outline-none transition-colors"></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="text-[12px] uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 px-10 py-4 transition-all duration-300 w-full md:w-auto">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Info & Map */}
        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
          
          <div className="mb-12">
            <h3 className="font-heading text-3xl text-[var(--gold)] mb-6">The Venue</h3>
            <address className="not-italic font-sans text-[var(--text-muted)] space-y-1 text-lg mb-8">
              <p>Ulica Kralja Tomislava 12</p>
              <p>42000 Varaždin,</p>
              <p>Croatia</p>
            </address>
            <div className="space-y-4 font-sans text-[var(--text-muted)]">
              <p className="flex items-center gap-4 hover:text-[var(--gold)] transition-colors cursor-pointer"><Phone className="w-5 h-5 text-[var(--gold)]" /> +385 42 000 000</p>
              <p className="flex items-center gap-4 hover:text-[var(--gold)] transition-colors cursor-pointer"><Mail className="w-5 h-5 text-[var(--gold)]" /> hello@hydebar.hr</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-3xl text-[var(--gold)] mb-6">Hours of Service</h3>
            <ul className="space-y-4 font-sans text-[var(--text-muted)]">
              <li className="flex justify-between border-b border-[var(--gold-border)] pb-4">
                <span>Monday — Thursday</span>
                <span className="text-[var(--text-primary)]">12:00 — 23:00</span>
              </li>
              <li className="flex justify-between border-b border-[var(--gold-border)] pb-4">
                <span>Friday — Saturday</span>
                <span className="text-[var(--text-primary)]">12:00 — 01:00</span>
              </li>
              <li className="flex justify-between pb-4 border-b border-[var(--gold-border)]">
                <span>Sunday</span>
                <span className="text-[var(--text-primary)]">12:00 — 22:00</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}