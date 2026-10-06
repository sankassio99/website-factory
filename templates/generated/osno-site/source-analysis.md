# Source analysis: OSNO Site

## Scope and method

- Starting URL: <https://www.osnosite.com/>
- Analysis date: 2026-10-06
- Scope: the homepage and the only same-site page listed in the sitemap, `/contacto/`.
- The accessible HTML, metadata, JSON-LD structure, linked stylesheet, sitemap, and robots file were inspected with HTTP retrieval. No authentication, paywall, CAPTCHA, or access-control bypass was used.
- The output below abstracts the observed information architecture and visual system. It does not reproduce source markup, source copy, or source assets.

## Analyzed pages and evidence

| Page | Purpose inferred from accessible content | Evidence and confidence |
| --- | --- | --- |
| <https://www.osnosite.com/> | Present a website-building service, demonstrate a delivered result, explain the process and included capabilities, and route visitors to a contact action. | Rendered text extraction, homepage HTML, linked CSS, metadata, and structured data; high confidence for section roles and navigation. |
| <https://www.osnosite.com/contacto/> | Collect a prospective customer's contact details, business context, message, and consent. | Page HTML and extracted page structure; high confidence for form fields and two-column contact layout. |

The sitemap listed no additional same-site pages beyond these two. The homepage contains links to an external example project and an external application/login destination; these were not expanded because they are outside the requested same-site scope.

## Information architecture and interaction observations

- The home page uses a persistent top navigation with anchor links, a locale control, a utility/login link, and a high-visibility contact action.
- The hero combines a dark photographic background, scrim, large display heading, supporting paragraph, and two contrasting actions.
- Proof is presented before the process: a responsive project example uses layered desktop and mobile previews with a caption and external visit link.
- The process is a three-step sequence with oversized numerals and horizontal connectors on larger screens.
- Capabilities are organized into a responsive feature-card grid. Cards vary in size and can contain simple line icons, flags, QR artwork, or interface-like visual demonstrations.
- A dark product showcase contrasts an administrative interface with a customer-facing result and uses short benefit bullets.
- A final centered conversion band precedes a multi-column dark footer.
- The contact page reuses the same navigation and footer, while its main area places explanatory content beside a white elevated form card.
- A language switcher exposes Portuguese and English in the inspected markup. The document language and primary locale are Portuguese.
- The site includes skip navigation, visible focus styling, semantic landmarks, labeled form controls, a honeypot field, required consent, and live form status messaging.
- Motion is used for reveal transitions, hero entrance, hover states, and an interactive-looking showcase. Reduced-motion media queries disable or simplify animation.

## Responsive observations

- Desktop navigation links are replaced by a menu button and drawer below the wide-screen breakpoint.
- Feature cards use three columns at wide sizes, two columns at medium sizes, and one column on narrow screens.
- The three-step process becomes a single vertical list on small screens, removing connector rules.
- The device showcase changes from a layered desktop/phone composition to a centered phone preview on narrow screens.
- The contact layout collapses from two columns to one.
- Hero actions become full-width stacked controls at the narrowest breakpoint.
- The footer changes from three columns to two and then one column.

## Visual system observations

- The visual direction is warm, editorial, and product-focused: orange accents and cream surfaces sit against near-black typography and dark presentation bands.
- Headings use a rounded display face with tight tracking; body copy uses a neutral sans-serif; metadata and small labels use a monospaced face.
- Buttons are mostly pill-shaped, with solid orange primary actions, outlined utility actions, dark inverse actions, and translucent glass actions over the hero.
- Cards use subtle warm borders, moderate rounded corners, and restrained shadows rather than heavy decoration.
- The hero and conversion band use image or texture backgrounds with dark overlays to preserve text contrast.
- The observed CSS defines a 1140px content wrapper, 16px primary radius, 11px compact radius, and warm neutral border/surface tokens.

## Reusable patterns

1. Lead with a concrete service promise and a clear action rather than a generic company introduction.
2. Show a believable result early, using responsive previews or another tangible proof format.
3. Explain the engagement as a short, numbered process.
4. Use a varied feature grid to balance concise benefits with visual demonstrations.
5. Repeat the conversion action after proof and capabilities, not only in the header.
6. Pair a contact introduction with a focused form and explicit consent.
7. Keep the navigation and footer consistent across landing and contact pages.
8. Preserve a text alternative for any visual mockup, screenshot, or decorative illustration.

## Accessibility and implementation guidance

- Keep the skip link, semantic `header`/`nav`/`main`/`footer` landmarks, and descriptive labels in a new implementation.
- Preserve keyboard-operable mobile navigation and locale controls with accurate expanded/hidden states.
- Use live text for service claims and feature details; screenshots and mockups should support, not replace, the information.
- Maintain visible focus indicators with sufficient contrast against both light and dark surfaces.
- Respect `prefers-reduced-motion` for reveal, hover, and hero animations.
- Use descriptive alt text for informative previews and empty alt text for purely decorative artwork.

## Limitations

- The inspection used HTTP retrieval rather than a full browser automation session, so exact computed rendering, hover states, and interaction timing were not independently exercised.
- Source CSS exposes breakpoints and tokens, but device-specific layout behavior was inferred from media queries rather than measured screenshots.
- The source uses several local images and SVG marks; their ownership and license terms were not established. They remain reference-only.
- A public URL does not grant permission to reuse the source's copy, code, logos, screenshots, or photography.
