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
does not couple itself to one agent runtime.

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

## Dependency direction

The direction of authority is:

1. User requirements create or update specs.
2. Skills transform and validate specs.
3. Agents orchestrate the skill workflow.
4. MCPs perform external actions requested by an agent.

External results, such as a verified Vercel URL, are recorded back into the
relevant artifact. Providers do not become the source of truth.
