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

## Website research and reference templates

The repository supports two distinct workflows. Choose information extraction
when building a new website from scratch; choose reference analysis when a
reference site's content structure and design patterns should inform a
reusable template.

### Extract information for a new website

```text
Organization website URL
  -> content evidence
  -> organization and offering facts
  -> independent content recommendations
  -> content-discovery/generated/<site-name>/
       content-brief.yaml
       source-analysis.md
       content-outline.md
```

Use the [website-extraction skill](.github/skills/website-extraction/SKILL.md)
to collect verified, source-attributed information about the organization,
audiences, offerings, locations, contact channels, and policies. This
content-only workflow supports a new website built from scratch. The source
site is not a reference for layout, navigation, visual design, branding,
assets, or interaction patterns.

### Create a reusable template from a reference

```text
Reference website URL
  -> page/content structure and design-pattern analysis
  -> reusable, abstract template
  -> templates/generated/<template-name>/
       template.yaml
       source-analysis.md
       content-outline.md
       assets.md
```

Use the
[website-reference-analysis skill](.github/skills/website-reference-analysis/SKILL.md)
when the goal is to create new websites based on an existing reference. It
documents reusable page structures, visual patterns, and asset references
without copying source code or prose. Generated templates are stored under
[templates/generated](templates/generated).

Both workflows respect access and copyright limits and avoid copying protected
source material. The extraction brief informs original content; a reference
template captures abstract patterns that can be adapted for a new site.

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
