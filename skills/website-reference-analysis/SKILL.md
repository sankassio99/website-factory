# Website Reference Analysis

## Purpose

Transform an accessible reference website into a documented source analysis
and an abstract, reusable website template. The output captures useful
structure, visual direction, UX, responsive behavior, and component patterns
without copying the reference website.

## Inputs

- Required: `reference_url`
- Optional: `template_name`
- Optional: `template_category`
- Optional: `target_industry`
- Optional: `target_style`
- Optional external capabilities: Browser MCP, Web Fetch MCP, screenshots or
  visual analysis, image/search MCP, filesystem tools, and GitHub MCP

## Outputs

Create a self-contained directory under
`templates/generated/<template-name>/` containing:

```text
source-analysis.yaml
template.yaml
design-tokens.yaml
pages/
components/
README.md
```

The exact number of page and component files depends on the observed patterns.
`source-analysis.yaml` records the reference; `template.yaml` records only
abstract reusable decisions.

## Analysis Dimensions

### General information

Record the website title, apparent business category, primary purpose, target
audience, primary call to action, language, locale, and apparent market only
when supported by the inspected reference.

Classify every material conclusion as one of:

- `Observed`: directly visible or available from the reference.
- `Inferred`: a reasonable interpretation, clearly marked as such.
- `Unknown`: unavailable from the reference.
- `Default`: a safe template default that was not inferred from the reference.

### Information architecture

Analyze main and footer navigation, route hierarchy, page purpose, section
order, content hierarchy, and CTA hierarchy. Represent page structures as
ordered section trees.

### Pages and components

For each relevant page, record its purpose, sections, section type, order,
content hierarchy, CTAs, and reusable components. Describe components by
name, type, purpose, variant, content structure, layout, and responsive
behavior.

### Visual and responsive system

Analyze colors, typography, containers, grids, spacing, alignment, cards,
borders, shadows, and image treatment. Mark estimated values as approximate.

Use browser or screenshot tooling for desktop, tablet, and mobile observations
when available. If responsive behavior cannot be observed, write `UNKNOWN`;
never invent it.

## Workflow

1. Confirm that the reference URL is accessible and does not require
   authentication.
2. Inspect available pages, navigation, footer, and primary conversion flow.
3. Record source-specific observations in `source-analysis.yaml`, separating
   observed, inferred, and unknown information.
4. Extract reusable page, component, layout, and UX patterns.
5. Remove company names, personal information, proprietary copy, tracking
   identifiers, brand assets, and source-specific business data.
6. Choose a meaningful generic template name and kebab-case slug.
7. Create `template.yaml` using `specs/template.schema.json`.
8. Create `design-tokens.yaml` with abstract values and confidence/basis
   metadata.
9. Create page and component files only for reusable patterns the template
   needs.
10. Write a README explaining intended usage, known limits, and how the
    template combines with a future website specification.

## Rules

1. Extract patterns; do not clone websites.
2. Do not copy proprietary text, source code, personal information,
   credentials, tracking identifiers, or copyrighted images unless explicitly
   supplied with permission.
3. Describe asset roles and characteristics instead of copying assets by
   default.
4. Do not make unsupported claims about the business, locale, implementation,
   or responsive behavior.
5. Keep source analysis separate from the reusable template.
6. The reusable template is the source of truth for future generation; the
   reference URL is not.
7. Do not fabricate MCP actions. GitHub MCP may publish a completed template
   only when available; browser and visual tools may enhance analysis only when
   available.

## Validation

Before completion, verify:

1. The template has a generic name, kebab-case slug, category, pages,
   components, design tokens, and responsive rules.
2. Every page section references a declared component.
3. Every declared component has a type, variant, purpose, and responsive
   behavior or `UNKNOWN`.
4. Design-token values are consistently referenced and mark approximations.
5. All major template decisions have `Observed`, `Inferred`, or `Default`
   traceability.
6. Reusable files do not contain company-specific names, personal data,
   proprietary copy, unnecessary source assets, or hardcoded business data.
7. `template.yaml` validates against `specs/template.schema.json`.

## Failure Conditions

Report a failure state and stop or limit the workflow when applicable:

| State | Meaning |
| --- | --- |
| `REFERENCE_UNAVAILABLE` | The URL cannot be accessed. |
| `AUTHENTICATED_REFERENCE` | The reference requires authentication. |
| `VISUAL_ANALYSIS_LIMITED` | No visual inspection capability is available. |
| `PARTIAL_ANALYSIS` | Only part of the reference could be inspected. |

Never state that analysis, crawling, deployment, publishing, or verification
completed when a required external capability was unavailable.
