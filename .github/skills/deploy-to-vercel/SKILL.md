---
name: deploy-to-vercel
description: Deploy a website from this repo to Vercel using the Vercel CLI. Use when the user says "Deploy website X to Vercel", "publish X", or asks for a preview/production deployment.
---

# Deploy website to Vercel (via Vercel CLI)

Trigger example: `Deploy website x to Vercel`

## Prerequisites
- Node.js is installed. Use `npx vercel` if the `vercel` CLI is not installed globally (or `npm i -g vercel`).
- The CLI is authenticated: check with `vercel whoami`. If it fails, ask the user to run `vercel login` (interactive) or provide `VERCEL_TOKEN` as an environment variable, then stop until done.

## Steps
1. Resolve the website folder `x` from the user's request. If ambiguous or not found, list the candidate folders and ask the user.
2. Verify the site builds locally first: `cd x`, then `npm install && npm run build`. Fix or report errors; do not deploy a broken build.
3. Link the project (run inside the website folder `x`, so it is the project's root directory):
   - If `x/.vercel/project.json` exists, it is already linked; reuse it.
   - Otherwise: `vercel link --yes --project <x>` (add `--scope <team>` if the user has several teams; ask which one). Use a lowercase, hyphenated project name.
4. Deploy from inside `x`:
   - Preview (default): `vercel deploy --yes`
   - Production (only if requested): `vercel deploy --prod --yes`
   - Append `--token $env:VERCEL_TOKEN` only if the token is provided via environment variable.
   - The CLI prints the deployment URL on stdout; capture it.
5. Verify: run `vercel inspect <url>` to confirm the state is `Ready`, and request the URL (e.g. `curl -I <url>`) to check it responds. Preview deployments may return 401 if Vercel Deployment Protection is enabled; report this rather than treating it as a failure.
6. On build failure, read the logs with `vercel inspect <url> --logs`, fix the cause, and redeploy.
7. Reply with: project name, deployment URL, state (Ready/Error), and whether it is preview or production.

## Rules
- Default to a preview deployment; deploy to production only if the user says so.
- Always run CLI commands from the website folder, never from the repo root, to avoid linking the wrong directory.
- Never print or commit tokens/secrets; env vars must be set in Vercel (`vercel env add`), not in source. Don't commit the `.vercel/` folder (make sure it is git-ignored).
- Use `--yes` to avoid interactive prompts; never use `--force` unless the user asks.
- Don't change unrelated files.
