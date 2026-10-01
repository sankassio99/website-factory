# Architecture

Website Spec Factory separates four concerns:

```text
Specs -> Skills -> Agents -> MCPs
```

## Specs

Specifications are persisted, structured source-of-truth artifacts. The core
website specification records business context, pages, features, navigation,
SEO, technology, deployment target, and unresolved questions. The design
specification turns those requirements into visual and interaction decisions.
The template specification records reusable patterns extracted from source
analysis. It is separate from both the source analysis and any new business's
website specification.

JSON Schemas in `specs/` make the artifacts deterministic and machine
checkable. YAML remains human-readable for templates and examples.

## Skills

Skills are modular knowledge and workflow definitions. A skill tells an agent
how to perform one responsibility, including its inputs, outputs, rules,
validation, and failure conditions. It must not own external credentials or
pretend to perform external actions.

Initial skill files are intentionally empty extension points. Their intended
contracts are described in `docs/workflow.md`; populate each `SKILL.md` in the
agent format used by your runtime.

## Agents

Agents reason about work and orchestrate skills. They receive their authority
from their role definitions, consume specifications, and produce reviewable
artifacts. An architect does not silently implement; an engineer does not
silently redefine product requirements; a reviewer independently evaluates
the result.

Initial agent files are intentionally empty extension points so the repository
does not couple itself to one agent runtime. The Website Template Architect is
the first specialized analysis agent: it creates templates, not implementation.

## Reference analysis and templates

Reference analysis follows a strict transformation:

```text
Reference analysis
  -> source analysis
  -> pattern extraction
  -> reusable template
  + new website specification
  -> implementation
```

`source-analysis.yaml` preserves reference-specific observations, inferences,
unknowns, and limitations. `template.yaml` contains generic patterns that can
be reused by another business. The source reference is never the source of
truth for future implementation.

Generated templates are self-contained directories under
`templates/generated/`. They may contain pages, component definitions, design
tokens, and a README. A template must not contain proprietary copy, personal
information, credentials, tracking identifiers, source code, or unapproved
assets from the reference.

## MCPs

MCP servers are external capabilities and actions:

| MCP | Responsibility |
| --- | --- |
| GitHub | Repositories, branches, commits, pull requests, and issues. |
| Vercel | Project creation, deployment, verification, and URL retrieval. |
| Image/search | Research and appropriately licensed asset discovery. |
| Browser | Rendered-page checks, navigation checks, responsive checks, and automated QA. |
| Database | Provisioning or operating data-backed application features. |

MCPs are not implemented or mocked by this repository. A skill must state when
an MCP is unavailable and stop or provide a manual next step instead of
claiming the action occurred.

For reference analysis, Browser or Web Fetch MCP can inspect an accessible URL,
and screenshot or visual-analysis tools can improve visual and responsive
findings. Their absence produces an explicit limitation such as
`VISUAL_ANALYSIS_LIMITED`; it never authorizes fabricated observations.

## Dependency direction

The direction of authority is:

1. User requirements create or update specs.
2. Skills transform and validate specs.
3. Agents orchestrate the skill workflow.
4. MCPs perform external actions requested by an agent.

External results, such as a verified Vercel URL, are recorded back into the
relevant artifact. Providers do not become the source of truth.
