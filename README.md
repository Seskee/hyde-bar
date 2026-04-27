# HYDE bar & dine — Website

## Tech Stack
- **Next.js 16** — App Router, TypeScript
- **Tailwind CSS 4** — utility-first styling
- **GSAP** — scroll animations (ScrollTrigger)
- **Lucide React** — icons
- **Vercel** — deployment

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | Auto-fix ESLint |
| `npm run format` | Prettier format |

## Folder Structure
```
src/
├── app/              # Next.js App Router (pages, layout, sitemap, robots)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Experience, Menu, Gallery, Location
│   └── ui/           # Button, SectionLabel, GoldRule (reusable primitives)
├── hooks/            # useScrolled, useGSAP etc.
├── lib/              # constants.ts, utils.ts
├── styles/           # globals.css (design tokens)
└── types/            # TypeScript interfaces
```

## Design Tokens (CSS Variables)
```css
--bg-primary:    #070e08   /* near-black forest green */
--bg-secondary:  #0c1a0e   /* slightly lighter */
--gold:          #c9a84c   /* primary accent */
--gold-light:    #e0c06a   /* hover/emphasis */
--text-primary:  #e8e2d6   /* warm off-white */
--text-muted:    rgba(232,226,214,0.55)
```

## Fonts
- **Cormorant Garamond** — headings (serif, elegant)
- **Jost** — body text (geometric sans, thin)

## Next Steps
1. Copy Stitch-exported HTML into individual section components
2. Add GSAP ScrollTrigger animations per component
3. Add real restaurant images to /public/images/
4. Update constants.ts with real contact info
5. Deploy to Vercel + connect domain
