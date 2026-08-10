# 🦅 Happy Hawks FTC #24813 — Website

This is the site for our FIRST Tech Challenge team, SHCA Happy Hawks out of Scenic Hills Christian Academy. It's a Next.js app that exports to static HTML and lives on GitHub Pages. Everything on here is student-built, including all the weird easter eggs hidden around (there's a full list at the bottom).

---

## Where things live

| Page | File | What's on it |
|------|------|--------------|
| Home | `app/page.tsx` | Hero, stats, impact section |
| About | `app/about/page.tsx` | Team grid, alumni carousel, mentors |
| Robot | `app/robot/page.tsx` | Robot pics + specs |
| Performance | `app/performance/page.tsx` | Season stuff + live stats widget |
| Portfolio | `app/portfolio/page.tsx` | PDF library, reads the folder automatically |
| Outreach | `app/outreach/page.tsx` | Outreach photos |
| Sponsors | `app/sponsors/page.tsx` | Sponsors + sponsorship packet |
| Media | `app/media/page.tsx` | Videos + photo gallery |
| Scouting | `app/scouting/page.tsx` | Password-protected team scouting table |
| Resources | `app/resources/page.tsx` | Downloads + guides |
| Contact | `app/contact/page.tsx` | How to reach us |
| Privacy | `app/privacy/page.tsx` | Privacy policy |

---

## How to change stuff

### Photos
Throw images into `public/images/gallery/` (the Flickr `_o.jpg` files work). Then the gallery and hero carousel need their file lists updated by hand:
- `components/Gallery.tsx` — the `images` array near the top
- `components/HeroCarousel.tsx` — same thing

**Important:** the filename in the code has to match the actual file exactly. If you copy a file and macOS adds " copy" to the name, it'll 404 on the site. That already bit us once.

### Team, alumni, mentors
They're just arrays at the top of the files:
- Current roster → `teamMembers` in `app/about/page.tsx`
- Alumni → `components/AlumniCarousel.tsx` (name, role, `classOf`, initials, emoji)
- Mentors → `mentors` in `app/about/page.tsx`

### Videos
Edit the `videos` array at the top of `app/media/page.tsx`. Each one has a `link` — put a real YouTube URL there and the play button opens it. If it's `"#"` it shows the fake buffering gag instead.

### Portfolios
Just drop `.pdf` files into `public/portfolio/`. The page picks them up automatically and sorts newest first by filename.

### Sponsorship packet
Swap in the new file at `public/Happy_Hawks_Sponsorship_Packet.pdf`. The Sponsors page button points at it.

### Scouting data
The table in `app/scouting/page.tsx` is hardcoded (the `teamsData` array). We update it by hand each season.

### Scouting password
It's in `lib/scoutingAccess.ts` as a SHA-256 hash of a salt + the password. To change it:
1. Run this with your new password:
   ```
   node -e "const c=require('crypto');const salt='d2f3cee12353575c';const p='YOUR_NEW_PASS';console.log(c.createHash('sha256').update(salt+p).digest('hex'))"
   ```
2. Paste the output into the `HASH` constant.

---

## Deploying

Just push to `main` and GitHub Actions rebuilds it. Then it shows up at https://joselaurencio.github.io/happyhawks/.

---

## 🥚 Easter eggs (complete list)

### Any page
| Egg | How | What happens |
|-----|-----|--------------|
| Konami code | `↑ ↑ ↓ ↓ ← → ← → B A` | Rainbow sweep across the screen |
| Hawk rain | Type `hawk tuah`, `swoop`, `fly hawks fly`, or `hawks fly` | Eagles raining down |
| VHS mode | Press `V` on the media page | Old VHS tracking look, press `V` again to turn off |

### Navbar
| Egg | How | What happens |
|-----|-----|--------------|
| Logo shake | Click the logo 3× fast | Logo shakes |
| Jetpack | Click the logo 5× fast | Jet flame + ⚡ on the title |

### Home
| Egg | How | What happens |
|-----|-----|--------------|
| Tooltip | Hover the hero logo | "Sharp talons. Sharper code. 🦅" |

### About
| Egg | How | What happens |
|-----|-----|--------------|
| Full Flock | Click every team card | "🐦 FULL FLOCK" screen |
| Pay Respects | Click the alumni carousel | RIP card + class year, you can click a specific person too |

### Media
| Egg | How | What happens |
|-----|-----|--------------|
| Buffering | Hit play on a video with no link | "Buffering the eggs..." → "No flock feed yet" |

### Resources
| Egg | How | What happens |
|-----|-----|--------------|
| Secret docs | Click a "Coming Soon" pill 5× | "🥚 Just kidding." — the docs don't exist yet |

### Scouting
| Egg | How | What happens |
|-----|-----|--------------|
| Hint | Wrong password 3× | "hint: it's not 12345" flickers in |
| Barnyard mode | Enter `barnyard` | Unlocks with chickens everywhere 🐔 |

### Footer
| Egg | How | What happens |
|-----|-----|--------------|
| Flap | Click the © year | Scrolls to top + "FLA-AP!" |

### Deliberately not added
The "OPR counts up to 420" joke got cut on purpose. No joke stats — people argue about the real ones enough.

---

## Key files

| File | What it does |
|------|--------------|
| `components/EasterEggs.tsx` | Konami, hawk rain, VHS, toast popups |
| `components/AlumniCarousel.tsx` | Alumni spinny thing + RIP egg |
| `components/TeamGrid.tsx` | Team cards + FULL FLOCK egg |
| `components/VideoCard.tsx` | Video cards + buffering egg |
| `components/TechnicalGuides.tsx` | "Coming soon" pills + secret docs egg |
| `components/ScoutingGate.tsx` | Password gate + hint + barnyard eggs |
| `components/Gallery.tsx` | Photo gallery + lightbox |
| `components/HeroCarousel.tsx` | Hero background slideshow |
| `lib/scoutingAccess.ts` | Password hashing |
| `lib/constants.ts` | Base path stuff for GitHub Pages |
