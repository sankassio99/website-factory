# Implementation Plan: Lisbon Family Dental

## Scope and inputs

Implement the fictional dental-clinic example from `website-spec.yaml` and
`design-spec.yaml`. Do not invent clinic contact details, clinician
credentials, testimonials, logos, photography, legal text, or appointment
availability. Keep those values visibly marked for replacement.

## 1. Project setup

1. Create a Next.js TypeScript application with the App Router.
2. Configure a minimal styling system using Tailwind CSS or equivalent utility
   CSS.
3. Add a small token layer for the approved color, type, and spacing system.
4. Avoid dependencies unless a requirement cannot be satisfied with the
   framework or platform APIs.

## 2. Page and component implementation

1. Build shared header, navigation, primary button, footer, and page layout.
2. Implement `/` with Hero, Services, Team placeholder, Testimonials
   placeholder, and Contacts sections.
3. Implement `/servicos` with the three specified care categories.
4. Implement `/contactos` with contact placeholders, location placeholder,
   and an appointment-request form.
5. Add semantic links between calls to action and the contact flow.

## 3. Form and content states

1. Add client-side usability validation for required enquiry fields.
2. Provide accessible inline errors, submitting feedback, and explicit success
   or failure messages.
3. Do not claim that an appointment is confirmed; treat the form as a request.
4. Preserve TODO and NEEDS_INPUT markers for missing approved content.

## 4. Metadata and quality

1. Add the specified Portuguese title and meta description.
2. Add route-appropriate headings and canonical URLs when the production URL
   is known.
3. Add image alternative text or decorative treatment for all final media.
4. Verify mobile, tablet, and desktop layout behavior.
5. Run build, lint, tests, and an accessibility review.

## 5. Delivery

1. Produce `qa-report.md` with PASS, WARN, and FAIL findings.
2. Commit only after validation passes.
3. Use GitHub MCP to publish when available.
4. Use Vercel MCP to deploy only when configured, then verify and return the
   actual deployment URL.
