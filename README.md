# Om v5.0 (?)

Personal portfolio site. Built with Next.js 14 App Router, Tailwind CSS, and MDX.

The concept: versioning myself. I'm still becoming something, not a finished product.

---

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content

All content is local MDX files in `/content`. No database, no CMS.

### Adding a project

Create `/content/built/your-slug.mdx`:

```mdx
---
title: "Project Name"
outcome: "One-line outcome"
tags: ["tag1", "tag2"]
github: "https://github.com/..."
live: "https://..."
date: "2024-01-01"
---

## The problem

...

## What I did

...

## What I learned

...
```

### Adding a blog post

Create `/content/blog/your-slug.mdx`:

```mdx
---
title: "Post title"
date: "2024-01-01"
summary: "One-sentence summary"
---

Post content here.
```

### Adding research

Create `/content/research/your-slug.mdx`:

```mdx
---
title: "Paper or experiment title"
type: "paper" # or "experiment"
status: "completed" # or "running" or "abandoned"
summary: "What it is"
link: "https://..."
date: "2024-01-01"
---
```

### Adding a curiosity

Create `/content/curious/your-slug.mdx`:

```mdx
---
title: "Topic"
summary: "Why you keep thinking about it"
links:
  - label: "Link label"
    url: "https://..."
---
```

---

## Deploying to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. No environment variables needed — everything is static content
4. Deploy

That's it.

---

## Updating the changelog

Edit the `changelog` array in `src/app/page.tsx`. Add a new entry for a new version, or update the `v5.0` entry when you know what it is.

---

## Updating contact info

- Email: `src/app/contact/page.tsx` and `src/app/layout.tsx` (footer)
- GitHub/LinkedIn URLs: `src/app/contact/page.tsx`
- Resume: drop a `resume.pdf` into `/public`
