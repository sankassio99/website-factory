# Extending the System

## Add a skill

Create `skills/<name>/SKILL.md`. Keep the scope narrow and define:

1. Purpose
2. Inputs
3. Outputs
4. Responsibilities
5. Rules
6. Workflow
7. Validation
8. Failure conditions

Skills should consume and update artifacts through clear contracts. They must
not duplicate another skill's authority or directly embed provider credentials.

Examples of future skills:

```text
skills/
├── ecommerce/
├── blog/
├── multilingual/
├── analytics/
├── performance/
├── conversion-optimization/
├── accessibility/
└── wordpress/
```

The `website-reference-analysis` skill demonstrates an analysis skill that
creates a source analysis and a reusable template without becoming an
implementation skill. Future capabilities such as `visual-design-analysis`,
`component-analysis`, `seo-analysis`, `conversion-analysis`,
`accessibility-analysis`, `performance-analysis`, and
`content-structure-analysis` should use the same artifact boundaries.

## Add an agent

Create `agents/<name>.md` and define:

- role and purpose;
- allowed inputs and required outputs;
- skills it may use;
- decisions it owns;
- decisions it must escalate;
- validation required before handoff;
- failure conditions.

Do not put a full workflow in an agent definition. Put reusable workflow
knowledge in a skill and let agents orchestrate it.

## Add a template

Templates are safe starting specifications for a website type. Create
`templates/<type>/website-spec.yaml`, validate it against the website schema,
and use `TODO` or `NEEDS_INPUT` instead of fabricated business facts.

## Add an MCP integration

Document the integration in `docs/architecture.md` and define which agent and
skill may invoke it. Specify:

- required authentication source;
- allowed actions;
- expected output;
- validation after the action;
- fallback when the MCP is unavailable.

Never add credentials, tokens, or secret configuration to a template, example,
skill, or agent definition.

## Extend the template library

Create generated templates under `templates/generated/<template-slug>/`. Each
directory must keep the inspected source analysis separate from the abstract
template:

```text
<template-slug>/
├── source-analysis.yaml
├── template.yaml
├── design-tokens.yaml
├── pages/
├── components/
└── README.md
```

Validate `template.yaml` against `specs/template.schema.json`. Ensure that its
name and slug are generic, that every page section references an existing
component, and that source-specific copy, people, brands, identifiers, and
assets have been removed. Template decisions should identify whether they are
`Observed`, `Inferred`, `Default`, or `Unknown`.
