# 🦅 Happy Hawks — FTC Team #24813 Website

Official website for **SHCA Happy Hawks**, a FIRST Tech Challenge team from Scenic Hills Christian Academy (San Antonio, TX). Built with **Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion**, fully static-exported for **GitHub Pages**.

This README is written as your personal operating manual — how to run the site, where everything lives, how to update content, and a complete index of every easter egg hidden around the site.

---

## 🚀 Quick Start

```bash
npm install        # first time only
npm run dev        # local dev server → http://localhost:3000
npm run build      # static export → ./out
npm run lint       # eslint (note: some legacy errors exist pre-easter-egg)
```

> The site is configured for static hosting (`output: "export"`) with `basePath` handling via `lib/constants.ts`. Locally the base path is empty; in production it becomes `/happyhawks`.

---

## 🗺️ Pages & Routes

| Route | File | What's there |
|-------|------|--------------|
| `/` | `app/page.tsx` | Hero carousel, logo, stats, impact, team/robot preview |
| `/about` | `app/about/page.tsx` | Story, **Team Grid**, **Alumni carousel**, mentors |
| `/robot` | `app/robot/page.tsx` | Robot render + specs |
| `/performance` | `app/performance/page.tsx` | Season timeline + live FTCScout stats widget |
| `/portfolio` | `app/portfolio/page.tsx` | Dynamic PDF library viewer |
| `/outreach` | `app/outreach/page.tsx` | Outreach gallery |
| `/sponsors` | `app/sponsors/page.tsx` | Sponsors + sponsorship packet download |
| `/media` | `app/media/page.tsx` | Featured videos + photo gallery |
| `/scouting` | `app/scouting/page.tsx` | Password-protected scouting/analysis table |
| `/resources` | `app/resources/page.tsx` | Community assets + technical guides |
| `/contact` | `app/contact/page.tsx` | Contact info + form |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy |

---

## 📦 How to Update Content

### Photos (Gallery & carousels)
- Put images in `public/images/gallery/` (Flickr `_o.jpg` files work fine).
- The gallery + hero carousel read from hardcoded arrays:
  - `components/Gallery.tsx` → `images` array (line ~9)
  - `components/HeroCarousel.tsx` → `images` array (line ~8)
- **Rule:** every filename in those arrays must match a real file in `public/images/gallery/`, exactly (including no `" copy"` suffix — Finder duplicates break the site).

### Team / Alumni / Mentors
All plain data arrays at the top of `app/about/page.tsx`:
- `teamMembers` — roster shown in the Team Grid
- `alumni` — lives in `components/AlumniCarousel.tsx` (name, role, `classOf`, initials, emoji)
- `mentors` — mentor list

### Videos (Featured Videos)
Edit the `videos` array at the top of `app/media/page.tsx`. Each entry has a `link` — set it to a real YouTube/stream URL and the play button opens it. While `link: "#"` it shows a funny "buffering" easter egg instead.

### Portfolios
Drop `.pdf` files into `public/portfolio/`. The `/portfolio` page auto-lists them (sorted newest-first by filename) and embeds them in an iframe.

### Sponsorship packet
Replace `public/Happy_Hawks_Sponsorship_Packet.pdf`. The Sponsors page downloads button links to it.

### Scouting data
The scouting table in `app/scouting/page.tsx` is **manually entered** (hardcoded `teamsData`). Update ranks/OPR/records there each season.

### Scouting password
`lib/scoutingAccess.ts` stores a **SHA-256 hash** (`SALT + password`). To change the password:
1. Run `node -e "const c=require('crypto');const salt='d2f3cee12353575c';const p='YOUR_NEW_PASS';console.log(c.createHash('sha256').update(salt+p).digest('hex'))"`
2. Replace the `HASH` constant with the output.

### Base path / deployment
- `next.config.ts` → `basePath`, `output: "export"`, images unoptimized.
- `lib/constants.ts` → `BASE_PATH` used in all `<Image>`/asset URLs so they work under `/happyhawks`.

---

## 🌐 Deploying to GitHub Pages

1. Push to `main` (or whichever branch GitHub Actions builds). The site uses `NEXT_PUBLIC_BASE_PATH=/happyhawks` in the workflow.
2. In repo **Settings → Pages**, set source to **GitHub Actions**.
3. Live at `https://joselaurencio.github.io/happyhawks/`.

> ⚠️ The active working branch here is `feat/scouting-gate-live-stats`. Merge it into `main` to deploy the current build.

---

## 🥚 Easter Egg Index (complete)

### Global (any page)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Konami Code** | `↑ ↑ ↓ ↓ ← → ← → B A` | 8s rainbow gradient sweep + toast |
| **Hawk Rain** | Type `hawk tuah`, `swoop`, `fly hawks fly`, or `hawks fly` | 18 eagles rain down the screen |
| **VHS Mode** | Press `V` on the `/media` page | Scanlines + tracking wobble; press `V` again to toggle off |

### Navbar
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Logo shake** | Click the logo 3× within 2s | Logo does a shake animation + "HAPPY HAWKS IS TYPING..." vibe |
| **Jetpack** | Click the logo 5× within 2s | Logo gets a flickering jet flame + title tilts with a ⚡ |

### Home (`/`)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Tooltip** | Hover the hero logo | "Sharp talons. Sharper code. 🦅" tooltip appears |

### About (`/about`)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Full Flock** | Click *every* team card | Overlay: "🐦 FULL FLOCK — You clicked every card. No one left behind." |
| **Pay Respects** | Click the alumni carousel | RIP card: "Rest in peace... Rip these uncs" with the clicked member's class year. Click a specific card to pay respects to them. |

### Media (`/media`)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Buffering** | Hit play on a video with `link: "#"` | Fake spinner: "Buffering the eggs..." → "No flock feed yet" |

### Resources (`/resources`)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Secret docs** | Rapidly click a "Coming Soon" pill 5× | "🥚 Just kidding." overlay — the docs don't exist yet |

### Scouting (`/scouting`)
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Hint** | Enter the wrong password 3× | Flickering hint appears: `hint: it's not 12345` |
| **Barnyard Mode** | Enter `barnyard` as the password | Unlocks scouting with 24 chickens 🐔 flapping + "BARNYARD MODE ACTIVATED" banner |

### Footer
| Egg | Trigger | Effect |
|-----|---------|--------|
| **Flap** | Click the © year | Smooth-scrolls to top + giant "🦅 FLA-AP!" flap animation |

### Removed on purpose
The "81.25 OPR counts up to 420" joke was **intentionally not added** (per team decision — no joke stats that could cause arguments).

---

## 🧱 Key Components

| File | Purpose |
|------|---------|
| `components/EasterEggs.tsx` | Global eggs: Konami, hawk rain, VHS mode, toast system |
| `components/AlumniCarousel.tsx` | Infinite-scroll alumni carousel + RIP easter egg |
| `components/TeamGrid.tsx` | Interactive team grid + FULL FLOCK egg |
| `components/VideoCard.tsx` | Featured video card with buffering egg |
| `components/TechnicalGuides.tsx` | "Coming soon" pills + secret-docs egg |
| `components/ScoutingGate.tsx` | Password gate + hint & barnyard eggs |
| `components/Gallery.tsx` | Photo gallery + lightbox |
| `components/HeroCarousel.tsx` | Hero background carousel |
| `lib/scoutingAccess.ts` | Scouting password verification (SHA-256) |
| `lib/constants.ts` | `BASE_PATH` for GitHub Pages |
