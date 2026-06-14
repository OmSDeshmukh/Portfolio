# Weekly Log — Template & Guide

This is your private weekly logging system, inspired by Tim Urban's "Life in Weeks."
The premise: each week is a small, countable unit of your life. Worth noticing.

**File naming:** `YYYY-W##.md` (e.g. `2025-W23.md`)
**Visibility:** Private by default. Add `public: true` to frontmatter only if/when you want it on the site.

---

```md
---
week: 2025-W23
dates: "Jun 2 – Jun 8, 2025"
age_weeks: 1180        # total weeks you've been alive
theme: ""              # optional: one word or phrase that captures the week
energy: 3              # 1–5 (1 = burned out, 5 = firing on all cylinders)
public: false
---

## The one sentence

_If this week had to be a single sentence, what would it be?_

<!-- Write one sentence. Not a summary — more like a title. -->
<!-- Example: "The week I realized I'd been solving the wrong problem." -->



## What actually happened

_Not a diary. Not a list of meetings. What MATTERED._

<!-- 3–5 bullet points max. Only the things you'd remember in 5 years. -->
<!-- If nothing happened that you'd remember in 5 years — that's data too. -->

-
-
-


## What I built or made

_Shipped, written, coded, designed, figured out._

<!-- Be specific. "Worked on project X" is noise. "Got diffing to work without the 10s timeout" is signal. -->



## What I learned

_Something that updated how I see something. A concept, a person, a mistake._

<!-- One thing is fine. The discipline is choosing the one that actually mattered. -->



## What I'm carrying into next week

_The thread that didn't finish. The thing that's still open._

<!-- This becomes the first line you read next Sunday. -->



## Energy note

_Optional. What drained you. What filled you._

<!-- Useful for patterns over months, not in the moment. -->



## The number (optional)

_One metric that captures something about this week. Not necessarily good._

<!-- Examples: 14 (hours of deep work), 0 (meaningful conversations), 3 (new things tried) -->
<!-- Pick one and be consistent for a few weeks to see the trend. -->

**Metric:** 
**Value:** 
**Context:** 

```

---

## How to use this system

### The weekly ritual (Sunday, 20 min)

1. Open last week's file. Read "What I'm carrying into next week."
2. Create this week's file: `cp _TEMPLATE.md YYYY-W##.md`
3. Fill it in. Don't overthink it. Raw is better than polished.
4. Update `age_weeks` — it's `(your_birth_week_count)` — just increment by 1 each week.

### What NOT to log
- Meetings you attended
- Tasks you completed
- Things you were supposed to do but didn't (guilt isn't useful here)
- Daily play-by-play

### What TO log
- The thing that surprised you
- The thing that frustrated you in a way that felt important
- The conversation that changed something
- The idea that wouldn't leave you alone

### Making it visible (future)
When you're ready to make a week public, add `public: true` to the frontmatter.
The site can then render it at `/weeks/2025-W23` with the life-in-weeks grid
showing that week highlighted.

---

## Annual review format (optional)

At the end of each year, create `YYYY-annual.md`:

```md
---
year: 2025
public: false
---

## The version this year moved toward

## The 3 weeks I'd remember

## What I stopped doing

## What surprised me about myself

## What v[N+1].0 needs that v[N].0 didn't have
```
