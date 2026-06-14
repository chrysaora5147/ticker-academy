# Ticker Academy Next.js Migration Plan

The current project is intentionally deployed as a static single-page app. A future Next.js migration should be parity-first and should preserve the current routes, copy direction, 20-profile dataset, educational disclaimer, classroom browsing, compare flow, and portfolio classroom builder before adding any new product capability.

## Current Static Routes

- `/`
- `/students/[ticker]`
- `/classrooms`
- `/compare`
- `/compare?left=AMD&right=NVDA`
- `/portfolio`
- `/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ`

## Future Target Structure

```text
src/app/page.tsx
src/app/students/[ticker]/page.tsx
src/app/classrooms/page.tsx
src/app/compare/page.tsx
src/app/portfolio/page.tsx
src/components/
src/data/studentProfiles.ts
src/lib/students.ts
src/types/student.ts
```

## Migration Rule

Do not migrate until Node, npm, and installable project dependencies are available. Do not create a fake Next.js project that cannot be built and verified.

## Suggested Next Phase

When tooling is ready, migrate data, types, helper functions, and validation first. Then migrate pages and shared components one route at a time, checking parity after every route.
