# Website Spec Factory

Website Spec Factory is an open-source, specification-driven foundation for AI
agents that create production-ready websites from natural-language requests.

Instead of using one large prompt to immediately generate code, it preserves
structured, reviewable artifacts that guide every stage of work:

```text
User request
  -> discovery
  -> website specification
  -> design specification
  -> implementation plan
  -> website implementation
  -> QA and review
  -> GitHub
  -> Vercel deployment
```

The website specification is the source of truth. Skills provide focused
workflow knowledge, agents reason about and orchestrate work, and MCP servers
perform authenticated external actions.

## Why specification-driven generation

Website requests usually omit important details such as audience, content,
brand direction, accessibility needs, routes, and deployment expectations.
Persisted specifications make assumptions visible, let different agents
collaborate without losing context, and make implementation reviewable by
people.

## MCP integrations

MCP integrations are optional external capabilities, not simulated services:

- **GitHub MCP**: repository, branch, commit, pull request, and issue actions.
- **Vercel MCP**: project creation, deployment, verification, and URL return.
- **Image/search MCP**: licensed asset discovery and research.
- **Browser MCP**: rendered-page, route, responsive, and accessibility checks.
- **Database MCP**: data-backed features when a website requires persistence.

No credential belongs in this repository. If an MCP is unavailable, the
responsible agent must report that the action cannot be completed.

## Template generation from a reference

The Template Architect analyzes an accessible reference URL through the
[website-reference-analysis skill](.github/skills/website-reference-analysis/SKILL.md).
It creates a **source analysis** and an abstract **reusable template**:

```text
Reference URL
  -> source analysis
  -> pattern extraction
  -> template specification
  -> templates/generated/<template-name>/
       template.yaml
       source-analysis.md
       content-outline.md
       assets.md
```

This workflow extracts reusable information architecture, component, UX, and
design-system patterns. It does not copy the source website's text, private
data, identifiers, source code, brand assets, or copyrighted images.

Use the generated template with a new website specification, new business
content, approved brand assets, and new images:

```text
Template + new website specification -> new website
```

The template—not the reference website—is the reusable source of truth. See
[examples/template-generation](examples/template-generation) and
[templates/generated](templates/generated).

## Vercel deployment

Deployment is a workflow stage, not an assumption. The deployment agent must
validate the project, build it, commit it, publish it through GitHub, deploy
through Vercel MCP, verify the result, and return the deployment URL. If the
Vercel MCP is not configured, it must state that automatic deployment did not
occur.

## Roadmap

- Ecommerce
- Multilingual websites
- CMS integration
- Authentication and databases
- Analytics and A/B testing
- Automated visual regression
- Lighthouse optimization
- Custom domains
- Client approval workflows
- Human-in-the-loop review
- Automated content and image generation
- Design-to-code
- Multi-agent workflows
- Reference analysis and template libraries
- Visual, component, conversion, accessibility, and performance analysis skills

## License

MIT. See [LICENSE](LICENSE).
