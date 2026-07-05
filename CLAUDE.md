# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Use pnpm (not yarn/npm) for package management based on the presence of pnpm-lock.yaml:

```bash
# Install dependencies
pnpm install

# Development server (localhost:3000 by default for Next.js)
pnpm dev

# Build for production (static export to ./out/)
pnpm build

# Start production server (not used for deploy, static export is used instead)
pnpm start

# Code quality
pnpm format     # Prettier formatting for CSS/TS/TSX files
pnpm lint:js    # ESLint for JS/TS/TSX with auto-fix
```

## Project Architecture

This is a Next.js-based single-page website for Reload Inc. (reload.co.jp), a Japanese software company.

### Key Technical Details

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Rendering**: Static export (`output: "export"` in `next.config.mjs`) — the whole site is prerendered to static HTML at build time, deployed as-is (no Node server)
- **Single Page App**: All content in `app/page.tsx`, wrapped by `app/layout.tsx`
- **Styling**: styled-components (CSS-in-JS), compiled via the Next.js `compiler.styledComponents` option; SSR/static-export style extraction handled by `lib/registry.tsx`
- **Analytics**: Google Analytics loaded via `next/script` (`strategy="afterInteractive"`) in `app/layout.tsx`
- **Font Optimization**: `next/font/google` (Sawarabi Gothic), exposed as CSS variable `--font-sawarabi-gothic`
- **Contact Form**: `components/ContactForm.tsx` (client component), uses axios to post directly to a Slack webhook (`NEXT_PUBLIC_SLACK_URL` env var)
- **Images**: `next/image` with `images.unoptimized: true` (required for static export)

### File Structure
```
app/
├── layout.tsx        # <html>/<head> metadata, fonts, global styles, GA script
└── page.tsx          # Main page content + page-scoped styled-components

components/
├── GlobalStyles.tsx  # createGlobalStyle equivalent of the old global CSS
└── ContactForm.tsx   # Client component, posts to Slack webhook

lib/
└── registry.tsx      # styled-components SSR/export style registry

public/
├── images/           # Static images (header.jpg, yamamoto.jpg)
├── favicon.ico
└── CNAME             # GitHub Pages custom domain

next.config.mjs       # output: "export", images.unoptimized, styledComponents compiler flag
```

### Styling Notes
- Uses Sawarabi Gothic font via `next/font/google`
- Dark theme with background image (`header.jpg`)
- Responsive flexbox layout for service/work boxes (`Boxes`/`Box` styled-components in `app/page.tsx`)
- Primary color hardcoded as `#3e62ad` in `components/GlobalStyles.tsx`

### Deployment
- GitHub Actions (`.github/workflows/deploy.yml`) builds with `pnpm build` and deploys the static `out/` directory to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`
- Requires a `NEXT_PUBLIC_SLACK_URL` repository secret (renamed from the old `PUBLIC_SLACK_URL` Astro-era secret)

### Environment Variables
- `NEXT_PUBLIC_SLACK_URL`: Required for contact form Slack integration (must be prefixed `NEXT_PUBLIC_` to be exposed to the client bundle)

The site is a company portfolio with Japanese content covering services, works, team member, recruitment, and contact information.
