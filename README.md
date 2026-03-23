# ⬡ WhatKnot — Tactical Knot Training System

> **Master the ropes. Survive anything.**

WhatKnot is a gamified, immersive knot-tying training application built with a tactical survival-manual aesthetic. It covers 55+ knots with detailed step-by-step instructions, real-world uses, safety notes, and a full XP progression system.

---

## Features

### 🎓 55+ Knots Documented
Every knot includes:
- Full step-by-step instructions (6–12 steps each)
- Common mistakes to avoid
- Real-world survival & tactical uses
- Safety notes
- Variations

### 🏆 Gamification System
- **XP System** — earn points for every knot learned
- **6 Rank Levels**: Recruit → Scout → Ranger → Pathfinder → Survival Expert → Field Master
- **13 Achievements**: Trailblazer, Rope Wrangler, Survivalist, Master of Knots, Loop Master, Hitch Expert, Bend Specialist, Rescue Pro, and more
- Animated achievement popups and XP gain notifications

### 🎯 Full Learning Interface
- Instant search (Ctrl+K)
- Filter by difficulty (Beginner / Intermediate / Advanced)
- Filter by tag (loop, hitch, bend, stopper, climbing, sailing, rescue, survival, bushcraft, tactical, fishing)
- Sort by name, difficulty, XP value, or learned-first
- Favorites system
- Progress tracking

### 🖤 Tactical Aesthetic
- Dark military palette (greens, matte blacks, sand tones)
- CSS grain/noise texture
- Tactical HUD-inspired layout
- Smooth cinematic intro screen
- Hover glows and micro-interactions
- Dark/Light mode toggle

---

## Knot Categories

| Category | Count |
|----------|-------|
| Loop Knots | 11 |
| Hitch Knots | 22 |
| Bend Knots | 9 |
| Stopper Knots | 4 |
| Fishing Knots | 4 |
| Mixed/Multi-tag | 5+ |

---

## Difficulty Breakdown

| Level | Knots |
|-------|-------|
| Beginner | 18 |
| Intermediate | 26 |
| Advanced | 11 |

---

## File Structure

```
whatknot/
├── index.html          — App entry point & intro screen
├── css/
│   └── style.css       — All styles (dark/light themes, animations)
├── js/
│   ├── knots.js        — 55+ knot dataset with full details
│   ├── gamification.js — XP system, ranks, achievements
│   └── app.js          — Main app logic, state management, UI
└── README.md
```

---

## Technical Notes

- **No external libraries or dependencies**
- **No external assets** — 100% self-contained
- **Pure JavaScript** — no frameworks
- **localStorage** persistence — progress saves between sessions
- **Responsive design** — works on mobile, tablet, and desktop

---

## Getting Started

Simply open `index.html` in any modern browser. No build step, no server required.

```bash
# If you want a local server:
python3 -m http.server 8080
# Then open http://localhost:8080
```

---

## Rank System

| Rank | XP Required |
|------|-------------|
| Recruit | 0 |
| Scout | 100 |
| Ranger | 250 |
| Pathfinder | 500 |
| Survival Expert | 900 |
| Field Master | 1400 |

---

*WhatKnot — Built for operators, explorers, and anyone who refuses to be unprepared.*
