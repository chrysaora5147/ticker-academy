# Ticker Academy

Ticker Academy is a playful, read-only stock education MVP that turns stocks and ETFs into student profiles inside a fictional academy. The market is presented as a school: tickers become student IDs, sectors become classrooms, report-card scores become simplified business traits, and rivals/classmates help make companies easier to remember.

This project is for education and entertainment only. It does not provide investment advice, financial planning, market forecasts, return projections, or trade-action ratings.

## Current Foundation

The app remains static because this environment does not currently provide `npm`, `next`, `react`, `tailwindcss`, or `typescript` as runnable project dependencies. Instead of creating a fake Next.js project that cannot build, the MVP has been refactored into a maintainable static module structure:

- `src/app.js` - lightweight client-side router, search binding, and classroom filter binding
- `src/components/` - reusable UI renderers
- `src/pages/` - page-level renderers for Home and Student Profile
- `src/data/studentProfiles.js` - local mock profile data for 82 stock/ETF students
- `src/lib/students.js` - data lookup and search helpers
- `src/types/student.ts` - TypeScript shape for future migration
- `scripts/validate.mjs` - profile data quality checks

## Run Locally

If `npm` and `node` are available on your PATH:

```bash
npm run dev
```

In this Codex desktop environment, use the bundled Node runtime:

```bash
/Users/boss/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node server.mjs
```

Then open:

```text
http://127.0.0.1:4173
```

`server.mjs` is only a local preview server. It serves static files and falls back to `index.html` for client-side routes such as `/students/AMD`. It is not required for Vercel deployment.

## Validate Data

```bash
/Users/boss/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/validate.mjs
```

The validation script checks required fields, unique tickers, the original MVP ticker set, expanded roster examples, report-card values, local classmate and rival references, minimum content depth, starter examples, and forbidden recommendation-like language.

## Current Scope

- Static home page
- Search across local mock profiles
- Expanded static roster of 82 stock/ETF students
- Student profile pages at `/students/[ticker]`
- Classroom browsing at `/classrooms`
- Filters by classroom, role, and risk level
- Side-by-side student comparison at `/compare`
- Shareable compare URLs such as `/compare?left=AMD&right=NVDA`
- Portfolio Classroom Builder at `/portfolio`
- Shareable classroom URLs such as `/portfolio?tickers=AAPL,AMD,GOOGL,MSFT,QQQ`
- Copy-link controls for shareable compare and portfolio classroom pages
- Featured student cards
- Classroom preview
- Student ID card
- Report card
- Strengths and weaknesses
- Rivals and classmates
- Educational disclaimer
- Responsive layout

## GitHub + Vercel Static Deploy

This project can be deployed as a static single-page app. It does not require `npm`, dependency installation, or a build step for deployment.

Recommended GitHub flow:

```bash
git init
git add .
git commit -m "Prepare Ticker Academy static deploy"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Recommended Vercel project settings:

```text
Framework Preset: Other
Root Directory: ticker-academy, if this folder is inside a larger repo
Install Command: leave empty / None
Build Command: leave empty / None
Output Directory: .
```

The included `vercel.json` rewrites the current client-side routes back to `index.html` so direct refreshes work on Vercel:

- `/students/AMD`
- `/classrooms`
- `/compare`
- `/portfolio`

## Static Deployment Limitations

- Routes are handled client-side after `index.html` loads.
- There is no server rendering or build-time page generation.
- There are no backend APIs, user accounts, saved portfolios, live prices, AI generation, charts, or payments.
- Query-param sharing is still browser-based, for example `/compare?left=AMD&right=NVDA` and `/portfolio?tickers=AAPL,MSFT,QQQ`.

## Demo Examples

- `/students/AMD`
- `/students/NVDA`
- `/students/AAPL`
- `/students/V`
- `/students/KO`
- `/students/JPM`
- `/students/SMH`
- `/classrooms`
- `/compare?left=AMD&right=NVDA`
- `/compare?left=V&right=MA`
- `/compare?left=KO&right=PEP`
- `/compare?left=SPY&right=QQQ`
- `/compare?left=AAPL&right=MSFT`
- `/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ`
- `/portfolio?tickers=NVDA,AMD,AVGO,TSM,ASML`
- `/portfolio?tickers=NVDA,AMD,AVGO,TSM,SMH`
- `/portfolio?tickers=SPY,QQQ,SCHD,VTI,XLK`
- `/portfolio?tickers=SPY,QQQ,SCHD`

## Intentionally Not Included

- No login or auth
- No database
- No real stock price APIs
- No AI APIs or profile generation
- No charts
- No payments
- No portfolio saving
- No trade-action recommendations

## Next Suggested Phase

Keep the static app deployable on GitHub + Vercel while continuing product polish. A future Next.js migration can be revisited only when package-manager tooling is available and the static demo no longer meets the product needs.

## Migration Plan

See [docs/next-migration-plan.md](docs/next-migration-plan.md) for the parity-first migration plan to Next.js App Router, TypeScript, and Tailwind CSS. The plan preserves the current static demo behavior before any redesign or new product work.

When a package manager and installable dependencies are available, migrate this static foundation into a real Next.js + TypeScript + Tailwind CSS app using the current module boundaries:

- `src/app/page.tsx`
- `src/app/students/[ticker]/page.tsx`
- `src/app/classrooms/page.tsx`
- `src/app/compare/page.tsx`
- `src/app/portfolio/page.tsx`
- `src/components/...`
- `src/data/studentProfiles.ts`
- `src/types/student.ts`
- `src/lib/students.ts`

Keep the current static module boundaries as the migration map.
