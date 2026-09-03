# Winflare Design System & Theme Specification

This document outlines the design tokens, color palette, and styling standards for the Winflare web application.

---

## 🎨 Color Palette & Design Tokens

| Role | Token Name | Hex Code | RGB | Tailwind Utility | Description & Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | `primary` | `#5B5AF7` | `rgb(91, 90, 247)` | `bg-primary`, `text-primary`, `border-primary` | Primary brand color, primary CTAs, highlighted active states, key metric accents. |
| **Primary Hover** | `primary-hover` | `#4847E5` | `rgb(72, 71, 229)` | `hover:bg-primary-hover` | Hover state for primary buttons and interactive components. |
| **Secondary** | `secondary` | `#8B7FFF` | `rgb(139, 127, 255)` | `bg-secondary`, `text-secondary`, `from-secondary` | Gradient accents, badge highlights, secondary highlights. |
| **Secondary Hover**| `secondary-hover` | `#7769FA` | `rgb(119, 105, 250)`| `hover:bg-secondary-hover` | Hover state for secondary interactive elements. |
| **Text Primary** | `text-primary` | `#0F172A` | `rgb(15, 23, 42)` | `text-text-primary` | Main headings, high-contrast body text, critical labels. |
| **Text Secondary** | `text-secondary`| `#64748B` | `rgb(100, 116, 139)`| `text-text-secondary` | Descriptions, subtitles, secondary metadata, placeholders. |
| **Background** | `background` | `#FAFBFF` | `rgb(250, 251, 255)`| `bg-background` | Default page body canvas (clean, ultra-subtle tinted white). |
| **Section BG** | `section` | `#F5F7FF` | `rgb(245, 247, 255)`| `bg-section` | Alternating section backgrounds, table headers, inactive tabs. |
| **Card BG** | `card` | `#FFFFFF` | `rgb(255, 255, 255)`| `bg-card` | Elevated surface for cards, dropdown menus, modals, and input fields. |
| **Success** | `success` | `#22C55E` | `rgb(34, 197, 94)` | `text-success`, `bg-success` | Positive metric growth, win indicators, active status dots, verified checkmarks. |
| **Warning** | `warning` | `#F59E0B` | `rgb(245, 158, 11)` | `text-warning`, `bg-warning` | Star ratings, pending reviews, deadline urgency indicators. |
| **Error** | `error` | `#EF4444` | `rgb(239, 68, 68)` | `text-error`, `bg-error` | Form validation errors, lost deals, destructive actions. |
| **Border** | `border` | `#E2E8F0` | `rgb(226, 232, 240)`| `border-border` | Subtle dividers, card borders, input borders. |

---

## 🛠️ Tailwind CSS v4 Configuration

Configured inside `src/app/globals.css` via the `@theme` block:

```css
@import "tailwindcss";

@theme {
  --color-primary: #5B5AF7;
  --color-primary-hover: #4847E5;
  --color-secondary: #8B7FFF;
  --color-secondary-hover: #7769FA;

  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;

  --color-background: #FAFBFF;
  --color-section: #F5F7FF;
  --color-card: #FFFFFF;

  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  --color-border: #E2E8F0;
}
```

---

## 💻 Programmatic Usage (TypeScript)

Import typed values from `@/constants/theme`:

```typescript
import { THEME } from "@/constants/theme";

const primaryColor = THEME.colors.primary; // "#5B5AF7"
const cardBackground = THEME.colors.cardBg; // "#FFFFFF"
```

---

## 📐 Usage Guidelines & Best Practices

### 1. Buttons & CTAs
- **Primary CTA**:
  ```tsx
  <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all">
    Get Started
  </button>
  ```
- **Secondary Button**:
  ```tsx
  <button className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-text-primary hover:bg-section transition-all">
    Learn More
  </button>
  ```

### 2. Cards & Containers
- Always use `bg-card` on top of `bg-background` or `bg-section` to create elevation.
- Use `border border-border` for crisp separation.
  ```tsx
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
    <h3 className="text-text-primary font-bold">Proposal Card</h3>
    <p className="text-text-secondary text-sm">Subtitle or description.</p>
  </div>
  ```

### 3. Typography Hierarchy
- Headings: `text-text-primary font-extrabold tracking-tight`
- Subtitles & Lead Paragraphs: `text-text-secondary text-base leading-relaxed`
- Accent Text / Highlights: `bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`

### 4. Status Badges
- **Success**: `bg-success/10 text-success border border-success/20`
- **Warning**: `bg-warning/10 text-warning border border-warning/20`
- **Primary / Informational**: `bg-primary/10 text-primary border border-primary/20`
