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
  -> rights-aware page and asset extraction
  -> page-by-page Markdown files
  -> organization facts and observed colors
  -> content-discovery/generated/<site-name>/
       content-briefing.yaml
       pages/<page-slug>.md
       source-analysis.md
```

Use the [website-extraction skill](.github/skills/website-extraction/SKILL.md)
to collect source-attributed page text, links, image/asset URLs, organization
facts, and an observed color palette. Full-text or asset reuse requires the
user to confirm rights or permission; otherwise the workflow records concise
summaries and asset links only. The palette is recorded as source metadata, not
as a direction to reproduce the source site's design.

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

### Build a website from a discovery package

```text
Organization or discovery package name
  -> content-discovery/generated/<site-name>/
       content-briefing.yaml
       pages/*.md
  -> original, responsive website
  -> websites/<site-name>/
```

Use the
[create-website-from-discovery skill](.github/skills/create-website-from-discovery/SKILL.md)
and provide the organization or package name. The skill uses the briefing and
referenced page files as factual input, handles unverified details cautiously,
uses the repository's UI/UX Pro Max prompt for its design system, and creates a
separate website project without copying the source site's design. When
photography is appropriate, it searches Unsplash through the available MCP and
follows the returned attribution requirements.

## Vercel deployment

Deployment is a workflow stage, not an assumption. The deployment agent must
validate the project, build it, commit it, publish it through GitHub, deploy
with the Vercel CLI (`vercel deploy`), verify the result, and return the
deployment URL. If the Vercel CLI is not installed or authenticated, it must
state that automatic deployment did not occur.

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
