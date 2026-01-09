# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Use pnpm (not yarn/npm) for package management based on the presence of pnpm-lock.yaml:

```bash
# Install dependencies
pnpm install

# Development server (localhost:4321 by default for Astro)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Code quality
pnpm format     # Prettier formatting for CSS, TS, Astro files
pnpm lint:js    # ESLint for JS/TS/Astro files with auto-fix
pnpm lint:style # Stylelint for CSS/SCSS/Astro files with auto-fix
```

Note: README mentions yarn, but project uses pnpm based on lock file.

## Project Architecture

This is an Astro-based single-page website for Reload Inc. (reload.co.jp), a Japanese software company.

### Key Technical Details

- **Framework**: Astro v4 with TypeScript
- **Single Page App**: All content in `src/pages/index.astro`
- **Styling**: CSS-in-JS with scoped styles using `define:vars` for theme variables
- **Analytics**: Google Analytics via Partytown for web worker isolation
- **Font Optimization**: Google Fonts optimized with `astro-google-fonts-optimizer`
- **Contact Form**: Uses axios to post to Slack webhook (PUBLIC_SLACK_URL env var)
- **Production**: Compression enabled via `astro-compress`

### File Structure
```
src/
├── env.d.ts          # Astro type definitions
└── pages/
    └── index.astro   # Main page with embedded CSS and client script

public/
├── images/           # Static images (header.jpg, yamamoto.jpg)
└── favicon.ico

astro.config.mjs      # Partytown + compression config
```

### Styling Notes
- Uses Sawarabi Gothic font from Google Fonts
- Dark theme with background image (header.jpg)
- Responsive flexbox layout for service/work boxes
- CSS nesting syntax supported via postcss-nesting
- Primary color defined as CSS variable (#3e62ad)

### Environment Variables
- `PUBLIC_SLACK_URL`: Required for contact form Slack integration

The site is a company portfolio with Japanese content covering services, works, team member, recruitment, and contact information.