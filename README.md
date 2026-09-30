# Sunspire Energy

A fast, responsive marketing website for Sunspire Energy, a residential and
commercial solar installer based in Central Texas. The site covers the full
customer journey: hero, services, work process, case studies, team, FAQ,
blog articles, and a contact section with a quote request form.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui,
and Framer Motion. All images and fonts are bundled locally, so the site has
no external network dependencies and no environment variables.

## Pages and sections

- Home (hero slider, feature strip, about, services, process, FAQ, projects, testimonials, stats, blog)
- About
- Services
- Projects
- Contact

Navigation is client side, so the whole site ships as a single deployable
Next.js app.

## Run locally

```bash
bun install
bun run dev
```

Open http://localhost:3000

## Production build

```bash
bun run build
bun run start
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Go to vercel.com/new and import the repository.
3. Vercel auto detects Next.js. Leave all settings at their defaults.
4. Click Deploy. No environment variables are required.

## Tech notes

- No database and no API dependencies: the contact form validates on the
  client and shows a confirmation toast.
- Fonts (Fraunces, Manrope) are loaded locally from `public/fonts`.
- ESLint passes with zero errors.
