# How Many Avos?

A tongue-in-cheek New Zealand house-deposit calculator: how much difference can skipping lattes and smashed avocado really make?

## Stack

- React 19 with React Router 7
- Vite 8 and TypeScript 5.9
- Tailwind CSS 4
- Vitest and Testing Library
- ESLint 10
- pnpm 10
- Cloudflare Pages via Wrangler

Vite 8 requires Node 20.19+ or 22.12+. This project standardises on Node 22.12+ through `.nvmrc` and `.node-version`.

## Local development

```bash
pnpm install
pnpm dev
```

Run the complete quality gate with:

```bash
pnpm check
```

## Deploy to Cloudflare Pages

The checked-in `wrangler.jsonc` names the Pages project `how-many-avos` and publishes `dist`.

### First deploy from your machine

```bash
pnpm exec wrangler login
pnpm deploy
```

If the Pages project already exists under a different name, change `name` in `wrangler.jsonc` before deploying. If it already has dashboard-managed settings or bindings, download and review that configuration first:

```bash
pnpm exec wrangler pages download config how-many-avos
```

### Continuous deployment from Git

In **Cloudflare → Workers & Pages → Create → Pages → Connect to Git**, use:

- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `22.12.0` or newer

Then open the Pages project’s **Custom domains** section and attach `avocalc.darraghoriordan.com` (or the domain you want to use). Cloudflare will create or update the required DNS record when the zone is in the same account.

Once the Cloudflare deployment and custom domain both work, disable the Netlify site or remove its old custom-domain assignment. Do that last so the existing site remains the rollback path during the cutover.

## Calculator assumptions

This is parody, not financial advice. The calculator assumes no interest on savings, no inflation, a 4% mortgage rate, and a 30-year mortgage term.

The home-page ticker uses REINZ’s July 2026 national median sale price of $760,000 and its -0.7% year-on-year movement. The annual dollar difference is divided across 365 days, then the ticker shows the portion elapsed since midnight. Market context is dated September 2026 in the page footer.
