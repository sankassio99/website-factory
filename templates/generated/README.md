# Generated Template Library

Each directory in this library is a self-contained, reusable website template
produced by the Website Template Architect.

```text
templates/generated/<template-slug>/
├── source-analysis.yaml
├── template.yaml
├── design-tokens.yaml
├── pages/
├── components/
└── README.md
```

`source-analysis.yaml` records observations about the inspected reference.
`template.yaml` records the abstract reusable pattern and is the only artifact
future website generation should consume. Do not use the source analysis as a
source of business copy, assets, or implementation code.

Generated templates must validate against
[`specs/template.schema.json`](../../specs/template.schema.json). Combine a
template with a new business's website specification, approved brand assets,
and content to create a new website; never use it to clone the reference.
