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

## Architecture

```text
Specs -> Skills -> Agents -> MCPs
```

- **Specs** are structured, versioned source-of-truth artifacts.
- **Skills** define modular workflow knowledge for one responsibility.
- **Agents** analyze, implement, or review within their assigned role.
- **MCPs** provide external actions such as GitHub, Vercel, browser testing,
  image search, and database access.

See [docs/architecture.md](docs/architecture.md) for the boundary rules.

## Repository structure

```text
.
├── specs/                 # JSON Schemas for deterministic artifacts
├── templates/             # Starting points for supported website types
├── skills/                # Empty extension points for modular skills
├── agents/                # Empty extension points for specialized agents
├── examples/dental-clinic # Complete example specifications and plan
└── docs/                  # Architecture, workflow, and extension guides
```

## Skills

The initial skill directories are:

- `website-discovery`
- `website-spec`
- `frontend-design`
- `website-development`
- `website-qa`
- `website-deployment`

Each `SKILL.md` is intentionally empty. Add one focused workflow per skill;
do not consolidate all responsibilities into a single prompt. The expected
skill contract is documented in
[docs/extending-the-system.md](docs/extending-the-system.md).

## Agents

The initial empty agent definitions are:

- `website-architect.md`
- `frontend-engineer.md`
- `website-reviewer.md`

Their intended boundaries are documented in
[docs/workflow.md](docs/workflow.md). Populate the files with your preferred
agent-runtime format without changing the surrounding architecture.

## MCP integrations

MCP integrations are optional external capabilities, not simulated services:

- **GitHub MCP**: repository, branch, commit, pull request, and issue actions.
- **Vercel MCP**: project creation, deployment, verification, and URL return.
- **Image/search MCP**: licensed asset discovery and research.
- **Browser MCP**: rendered-page, route, responsive, and accessibility checks.
- **Database MCP**: data-backed features when a website requires persistence.

No credential belongs in this repository. If an MCP is unavailable, the
responsible agent must report that the action cannot be completed.

## Example workflow

For a request such as “Create a professional website for a dental clinic in
Lisbon”:

1. Record unknown critical facts as `NEEDS_INPUT` or `TODO`.
2. Create `website-spec.yaml` from the discovery output.
3. Create `design-spec.yaml` from the website specification.
4. Create an implementation plan that maps specification requirements to work.
5. Implement the site without contradicting the specifications.
6. Produce `qa-report.md` with `PASS`, `WARN`, and `FAIL` findings.
7. Commit and publish through GitHub MCP when available.
8. Deploy through Vercel MCP when available and return the verified URL.

The full worked artifact set is in
[examples/dental-clinic](examples/dental-clinic).

## Add a new skill

1. Create `skills/<skill-name>/SKILL.md`.
2. Define its purpose, inputs, outputs, responsibilities, rules, workflow,
   validation, and failure conditions.
3. Reference existing specifications rather than duplicating their authority.
4. Add the new skill to the applicable orchestration documentation.

## Add a new agent

1. Create `agents/<agent-name>.md`.
2. Define the role, allowed inputs, outputs, authority boundaries, and
   validation responsibilities.
3. Assign skills to the agent rather than duplicating skill knowledge.
4. Update the orchestration diagram if the execution order changes.

## Add a website template

1. Create `templates/<website-type>/website-spec.yaml`.
2. Keep the template valid against
   [`specs/website.schema.json`](specs/website.schema.json).
3. Include only safe defaults; use `TODO` or `NEEDS_INPUT` for critical
   business facts.
4. Add an example when the template introduces new conventions.

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

## License

MIT. See [LICENSE](LICENSE).
