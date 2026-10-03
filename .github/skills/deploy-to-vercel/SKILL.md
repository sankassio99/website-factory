---
name: deploy-to-vercel
description: Deploy a website from this repo to Vercel using the Vercel MCP server. Use when the user says "Deploy website X to Vercel", "publish X", or asks for a preview/production deployment.
---

# Deploy website to Vercel (via Vercel MCP)

Trigger example: `Deploy website x to Vercel`

## Prerequisites
- The `vercel` MCP server is configured (`.vscode/mcp.json`, URL `https://mcp.vercel.com`) and authenticated.
- If its tools are unavailable, tell the user to start/authorize the `vercel` server and stop.

## Steps
1. Resolve the website folder `x` from the user's request. If ambiguous or not found, list the candidate folders and ask the user.
2. Verify the site builds locally first: install dependencies and run its build script (e.g. `npm install && npm run build`). Fix or report errors; do not deploy a broken build.
3. Use the Vercel MCP tools:
   - `list_teams` → pick the correct team (ask if more than one).
   - `list_projects` → find a project matching `x`.
   - `deploy_to_vercel` → deploy (follow its instructions; the project's root directory must be the website folder).
4. Monitor with `get_deployment`. On failure, read `get_deployment_build_logs`, fix the cause, and redeploy.
5. Reply with: project name, deployment URL, state (READY/ERROR), and whether it is preview or production.

## Rules
- Default to a preview deployment; deploy to production only if the user says so.
- Never print or commit tokens/secrets; env vars must be set in Vercel, not in source.
- Don't change unrelated files.
