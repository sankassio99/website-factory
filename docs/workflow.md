# Workflow

## Recommended orchestration

```text
website-architect
  -> website-discovery
  -> website-spec
  -> frontend-design
  -> frontend-engineer
  -> website-reviewer
  -> website-deployment
```

This is an orchestration recommendation, not a rigid implementation. New
agents can be introduced between stages when their input and output contracts
are explicit.

## Template generation from a reference

```text
template-architect
  -> website-reference-analysis
  -> source-analysis.yaml
  -> pattern extraction
  -> template.yaml
  -> templates/generated/<template-name>/
```

The Template Architect uses an accessible reference URL to document
information architecture, visual and UX patterns, components, and responsive
findings. It then removes source-specific information and creates an abstract
template. The generated template can later combine with a new website
specification:

```text
Generated template + new website specification + new brand assets
  -> website generation
```

No stage may turn a reference website into a clone. If the URL is unavailable,
authenticated, or partially inspectable, the workflow must report
`REFERENCE_UNAVAILABLE`, `AUTHENTICATED_REFERENCE`, or `PARTIAL_ANALYSIS`.

## Stages

### 1. Discovery

Analyze the natural-language request for business type, audience, objective,
pages, features, content, brand, assets, SEO, and technical needs. Do not
invent critical business information. Mark it `TODO` or `NEEDS_INPUT`.

### 2. Website specification

Create or update `website-spec.yaml` from discovery findings. Normalize
terminology and define sitemap, pages, sections, features, navigation, SEO,
technology, deployment, and unresolved questions. Validate it against
`specs/website.schema.json`.

### 3. Frontend design

Create `design-spec.yaml` from the website specification. Define visual
direction, color, typography, spacing, layout, components, states, responsive
rules, and accessibility decisions. Avoid generic design choices that do not
fit the business or audience.

### 4. Implementation planning

Create an implementation plan that maps specifications to routes, components,
content, data, validation, and quality checks. The architect owns planning and
does not implement unless explicitly instructed.

### 5. Implementation

The frontend engineer implements the approved scope using Next.js, TypeScript,
modern React, and minimal dependencies. The implementation must consume the
specification rather than creating conflicting product decisions.

### 6. QA and review

The independent reviewer compares the implementation with the specs. The
review produces `qa-report.md` with `PASS`, `WARN`, and `FAIL` findings for
functional behavior, responsive layouts, accessibility, SEO, and finish
quality.

### 7. GitHub and deployment

After validation, publish through GitHub MCP when available. Use Vercel MCP
only when configured: validate, build, commit, publish, deploy, verify, and
return the actual URL. Never fabricate a deployment result.

## Intended skill contracts

| Skill | Inputs | Outputs |
| --- | --- | --- |
| `website-discovery` | User request and research | Discovery findings and missing information |
| `website-spec` | Discovery output and template | Canonical `website-spec.yaml` |
| `frontend-design` | Website specification | `design-spec.yaml` |
| `website-development` | Website and design specifications, implementation plan | Website implementation and build results |
| `website-qa` | Specifications and implementation | `qa-report.md` |
| `website-deployment` | Validated project and provider availability | Verified deployment URL or explicit blocker |
| `website-reference-analysis` | Reference URL and available inspection tools | Source analysis and reusable template specification |

## Intended agent boundaries

| Agent | Authority | Must not do |
| --- | --- | --- |
| `website-architect` | Requirements, specifications, architecture, and implementation plan | Implement a website unless explicitly instructed |
| `frontend-engineer` | Implement and validate the approved specifications | Arbitrarily change product requirements |
| `website-reviewer` | Independently review requirements, UX, accessibility, SEO, and quality | Assume implementation is correct |
| `template-architect` | Analyze references and create reusable templates | Clone a source website or implement the final website by default |
