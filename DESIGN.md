---
name: "How Many Avos?"
description: "A refined editorial café-menu and receipt system rendered in cream paper and dark green ink."
colors:
  ink: "#173e32"
  paper: "#f4f1e8"
  paper-deep: "#e8e2d2"
  avocado: "#b9d36a"
  lime: "#dff29a"
  orange: "#f06f3c"
  orange-ink: "#b74723"
  copy-muted: "#3e5a50"
  rule: "rgba(23, 62, 50, 0.28)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.8rem, 8.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.7rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.55rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  square: "0"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.25rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "2rem"
  xl: "3rem"
components:
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 0.8rem"
  navigation-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 0.8rem"
  price-ticket:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "clamp(2rem, 5vw, 3.5rem)"
  number-input:
    backgroundColor: "transparent"
    textColor: "{colors.lime}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "0.35rem"
    width: "8ch"
  receipt:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "2.6rem clamp(1.5rem, 4vw, 2.8rem)"
---

# Design System: How Many Avos?

## Overview

**Creative North Star: "The Editorial Café Receipt"**

The system treats a satirical calculator as a refined café artifact: warm cream paper, dark green ink, considered editorial type, menu rules, and receipt geometry. Its personality comes from the tension between polished hospitality design and sober tabular arithmetic rather than from novelty decoration.

Fraunces supplies generous, high-contrast headlines and oversized numeric moments; DM Mono makes descriptions, labels, inputs, and calculations feel itemized and exact. Slightly rotated ticket surfaces and torn paper edges provide tactile wit, while the surrounding composition stays spacious, direct, and highly legible.

**Key Characteristics:**

- Cream paper and dark green ink establish the default reading surface.
- Avocado and lime accents belong on dark surfaces; orange and orange ink mark high-attention details according to contrast.
- Editorial display type and monospaced data type keep emotion and arithmetic in productive tension.
- Rules, dashed separators, receipt edges, tabular numerals, and restrained rotation create the café-menu world.
- A direct first-viewport jump leads to the live calculator without hiding the satirical premise.

## Colors

The palette is food-adjacent without becoming cartoonish: botanical greens carry the identity, warm paper keeps it editorial, and orange is a scarce, surface-aware signal.

### Primary

- **Deep Café Ink:** The primary text, navigation-active, ticket, and calculator color; it carries both authority and the strongest large-area contrast.

### Secondary

- **Avocado Flesh:** A supporting accent for fieldset headings and large, low-opacity geometry on the dark calculator surface.
- **Lime Highlight:** The brightest dark-surface accent, reserved for editable values and the ticket's headline number.

### Tertiary

- **Citrus Orange:** The dark-surface interaction accent used for the calculator focus outline and input caret.
- **Burnt Orange Ink:** The paper-surface accent used for arrows, equivalent totals, receipt results, and focus outlines.

### Neutral

- **Cream Paper:** The page canvas, reverse text color, and receipt surface.
- **Deep Cream Paper:** The quiet hover fill for navigation links on the page surface.
- **Muted Green Copy:** Secondary menu descriptions that need less emphasis than primary ink.
- **Botanical Rule:** The translucent divider color for page borders, menu rules, and receipt detail.

### Named Rules

**The Surface-Aware Citrus Rule.** Use burnt orange ink on cream paper and brighter citrus orange on dark green; never swap them merely for variety.

**The Green Field Rule.** Large dark fields are deep green, not black, and their light text remains warm cream, not pure white.

## Typography

**Display Font:** Fraunces (with Georgia and serif fallbacks)  
**Body Font:** DM Mono (with ui-monospace and monospace fallbacks)  
**Label/Mono Font:** DM Mono

**Character:** Fraunces gives the menu its editorial warmth and lets important numbers feel printed rather than dashboard-like. DM Mono acts as the receipt register: practical, compact, and naturally suited to labels, fine print, and changing values.

### Hierarchy

- **Display** (700, fluid 3.8–6rem, 0.92 line-height): Hero and major page titles; tightly tracked and balanced, with a short measure around 12 characters.
- **Headline** (700, fluid 2.7–4.5rem, 1 line-height): Major section headings such as the menu and calculator titles.
- **Title** (600–700, 1.45–1.55rem): Menu items, form legends, and compact editorial subheads.
- **Body** (400, typically 0.86–1.18rem, 1.6–1.85 line-height): Explanations and supporting copy, generally held between 38 and 68 characters depending on context.
- **Label** (500, typically 0.65–0.78rem, 0.04em tracking when uppercase): Navigation, receipt metadata, line items, notes, and fine print.

### Named Rules

**The Editorial-and-Register Rule.** Fraunces expresses the premise and totals; DM Mono explains, labels, and records the calculation.

**The Numeric Alignment Rule.** Changing prices, years, and currency totals use tabular numerals wherever the implementation presents them as comparable data.

## Layout

The page sits in a centered container capped at 1180px, with a 2rem total viewport gutter on larger screens and a 1.25rem gutter below 760px. Vertical sections use generous fluid padding, generally ranging from 4rem to 7rem, and thin rules mark transitions instead of boxed cards.

Desktop composition repeatedly pairs an expansive editorial column with a narrower object column: the hero uses an approximately 1.35/0.65 split, the calculator uses a 1/0.78 split, and the story uses a 1/0.8 split. The menu is a balanced two-column grid. At 760px and below, all of these become single-column flows, section headings stack, the sticky receipt returns to normal document flow, and the footer stacks vertically.

The calculator intentionally escapes the centered shell to form a full-viewport-width dark band, while its inner content realigns to the same 1180px grid. The hero's underlined jump link targets this section directly; preserve that first-viewport route into the primary interaction.

**The Shared Edge Rule.** Full-bleed sections may change the field color, but their content edges must return to the same centered shell as the rest of the page.

## Elevation & Depth

The system is flat by default and uses lines, field color, and paper contrast for structure. Shadows appear only under the two freestanding paper artifacts—the rotated price ticket and receipt—where they communicate physical lift rather than generic card elevation. A faint oversized avocado-colored ring sits behind calculator content as atmospheric depth and never receives interaction.

### Shadow Vocabulary

- **Green Ticket Lift** (`14px 18px 38px rgba(23, 62, 50, 0.18)`): The dark price ticket lifted from the cream page.
- **Receipt Lift** (`14px 18px 38px rgba(0, 0, 0, 0.18)`): The cream receipt lifted from the dark calculator field.

### Named Rules

**The Paper Artifact Rule.** Elevation belongs to ticket and receipt objects only; ordinary sections and menu items remain flat.

## Shapes

The dominant form language is square-edged printed matter. Ticket and receipt silhouettes stay rectangular, then gain character through a zig-zag top edge, slight rotation, and long cast shadow. Navigation links are the sole recurring pill shape, clearly separating wayfinding state from the printed-paper content. The calculator's background ring is fully circular and decorative.

Rules do more work than containers: solid one-pixel lines divide major regions, dashed one-pixel lines itemize menu and receipt content, and two-pixel solid lines anchor receipt totals. Input fields have no box or radius; they sit directly on ruled rows.

**The No Generic Card Rule.** Do not round content into conventional cards; use paper fields, rules, clipping, and restrained rotation when an object needs a boundary.

## Components

### Navigation

- **Style:** A 92px-tall ruled header contains a Fraunces wordmark and compact uppercase DM Mono links; it contracts to 76px on mobile and hides the wordmark text while retaining the logo.
- **Default / Hover:** Links are transparent pills; hover adds the deep cream paper fill.
- **Active:** The active route reverses to cream text on deep green ink.
- **Focus:** Links receive a three-pixel burnt orange ink outline with a four-pixel offset.

### Jump and Text Links

- **Style:** Inline underlined actions pair medium-weight mono text with a generously separated directional arrow.
- **Color:** Text inherits its surface color; the oversized arrow uses burnt orange ink on paper.
- **Behavior:** The hero jump scrolls directly to the calculator, with smooth scrolling disabled when reduced motion is requested.

### Price Ticket

- **Character:** A dark printed ticket, slightly askew, that makes the changing housing figure the hero's physical counterweight.
- **Surface:** Deep green ink with cream copy and a lime numeric headline.
- **Shape:** Square edges, a clipped torn-paper top, 1.5-degree rotation on desktop and 0.8-degree rotation on mobile.
- **Depth:** Uses the green ticket lift shadow and no hover elevation.

### Menu Items

- **Character:** Sparse café listings separated by dashed rules rather than containers.
- **Structure:** Fraunces item name, right-aligned mono price, muted description, then an equivalent statement with its number emphasized in burnt orange ink.
- **Spacing:** Two-rem vertical padding on desktop, reduced to 1.5rem on mobile.

### Inputs / Fields

- **Style:** Each live numeric field is a label/value row with a quiet bottom rule; the input itself is transparent, borderless, square, and right-aligned.
- **Value Treatment:** Lime Fraunces numerals and units sit against the full-bleed dark green calculator field.
- **Focus:** A three-pixel citrus orange outline with a four-pixel offset remains visible against the dark surface.
- **Behavior:** Values update the adjacent receipt as the user types; labels remain programmatically exposed and native stepper chrome stays hidden so the ruled rows remain visually quiet.

### Receipt

- **Character:** A sticky, slightly rotated cream receipt that makes the result feel itemized rather than abstract.
- **Structure:** Uppercase metadata, an oversized burnt orange result, dashed definition-list rows, and a strongly ruled total.
- **Shape:** Square paper with a torn top edge and a subtle negative rotation; it becomes non-sticky in normal document flow where the responsive layout requires stacking.
- **Live State:** The result region is polite live content so changed calculations are announced without interrupting the user.

### Data Note

- **Placement:** The dating and source context for the rolling national house-price figure belongs in the page footer, not on the hero ticket.
- **Treatment:** Keep it parenthetical, compact, right-aligned on desktop, and left-aligned when the footer stacks on mobile.

## Do's and Don'ts

### Do:

- **Do** keep cream paper and deep green ink as the dominant field relationship.
- **Do** reserve avocado and lime for dark surfaces and choose the orange token appropriate to the surface beneath it.
- **Do** pair Fraunces editorial statements with DM Mono labels, explanations, and live data.
- **Do** use rules, torn edges, tabular figures, and slight rotation to sustain the café-menu and receipt metaphor.
- **Do** preserve visible focus, real labels, live result announcements, and reduced-motion behavior.
- **Do** collapse all paired desktop grids to a clear single-column reading order at 760px and below.

### Don't:

- **Don't** introduce generic rounded cards, soft dashboard panels, or a broad radius scale.
- **Don't** use pure black, pure white, or unrelated saturated accents in place of the established botanical and paper palette.
- **Don't** add shadows to ordinary content sections or animate decorative objects without an interaction purpose.
- **Don't** turn numeric inputs into decorative readouts; they must remain directly editable and keyboard accessible.
- **Don't** strand the calculator below introductory content without the first-viewport jump link.
