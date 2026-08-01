# Tirbeo Design System

The permanent source of truth for the Tirbeo UI platform.

## 1. Design Philosophy

Tirbeo is a Google Workspace-inspired enterprise UI platform. The design language is:

- **Clean** — minimal visual noise, generous whitespace
- **Light** — white/light interface as the canonical reference
- **Professional** — serious infrastructure software, not marketing fluff
- **Consistent** — same components, tokens, and interaction patterns across all apps
- **Information-dense** — enterprise-grade density without sacrificing readability

## 2. Google-Inspired Visual Principles

The Tirbeo UI reproduces the same *category* of experience as Google Workspace / Google Admin:

- White/light background with subtle gray surfaces
- Compact, professional navigation
- Thin borders and restrained shadows
- Blue interactive actions (#1A73E8)
- Simple line icons
- Dense but readable information hierarchy
- Predictable page structure

**Do NOT copy Google's logos, trademarks, proprietary assets, or exact branded design.**

## 3. Tirbeo Branding Rules

- Brand everything as **TIRBEO**
- Use the Tirbeo color palette (see Color Tokens)
- Use the Tirbeo typography scale
- Never use Google's logo or brand assets
- The Tirbeo logo is a custom asset — never hardcode a URL to an external logo

## 4. Color Tokens

### Primitive Tokens

| Token | Value |
|-------|-------|
| `--tirbeo-color-primary` | `#1A73E8` |
| `--tirbeo-color-primary-hover` | `#1557B0` |
| `--tirbeo-color-primary-subtle` | `#E8F0FE` |
| `--tirbeo-color-text` | `#202124` |
| `--tirbeo-color-text-secondary` | `#5F6368` |
| `--tirbeo-color-text-muted` | `#80868B` |
| `--tirbeo-color-background` | `#FFFFFF` |
| `--tirbeo-color-surface` | `#F8F9FA` |
| `--tirbeo-color-border` | `#DADCE0` |
| `--tirbeo-color-success` | `#188038` |
| `--tirbeo-color-warning` | `#F9AB00` |
| `--tirbeo-color-error` | `#D93025` |
| `--tirbeo-color-info` | `#1A73E8` |

### Semantic Tokens

| Token | Maps To |
|-------|---------|
| `background` | `--tirbeo-color-background` |
| `surface` | `--tirbeo-color-surface` |
| `surface-hover` | `var(--tirbeo-color-surface)` with opacity |
| `surface-selected` | `--tirbeo-color-primary-subtle` |
| `text` | `--tirbeo-color-text` |
| `text-secondary` | `--tirbeo-color-text-secondary` |
| `text-muted` | `--tirbeo-color-text-muted` |
| `border` | `--tirbeo-color-border` |
| `primary` | `--tirbeo-color-primary` |
| `primary-hover` | `--tirbeo-color-primary-hover` |
| `primary-subtle` | `--tirbeo-color-primary-subtle` |
| `success` | `--tirbeo-color-success` |
| `warning` | `--tirbeo-color-warning` |
| `error` | `--tirbeo-color-error` |
| `info` | `--tirbeo-color-info` |

### Dark Mode Tokens

Dark mode uses intentional semantic tokens — not a simple inversion:

| Token | Light | Dark |
|-------|-------|------|
| `--tirbeo-color-text` | `#202124` | `#f4f4f6` |
| `--tirbeo-color-surface` | `#F8F9FA` | `#101111` |
| `--tirbeo-color-border` | `#DADCE0` | `#242728` |

## 5. Typography

| Primitive | Size | Weight | Line Height |
|-----------|------|--------|-------------|
| Display | 48px | 700 | 1.1 |
| Heading1 | 32px | 600 | 1.2 |
| Heading2 | 24px | 600 | 1.25 |
| Heading3 | 20px | 600 | 1.3 |
| Heading4 | 16px | 600 | 1.4 |
| Title | 14px | 600 | 1.4 |
| Subtitle | 14px | 400 | 1.4 |
| Body | 16px | 400 | 1.5 |
| BodySmall | 14px | 400 | 1.5 |
| Label | 12px | 500 | 1.4 |
| Caption | 12px | 400 | 1.4 |
| Overline | 11px | 500 | 1.4 |
| Code | 13px | 400 | 1.5 |

Font family: `Inter, system-ui, -apple-system, sans-serif`

## 6. Spacing

| Token | Value |
|-------|-------|
| `--tirbeo-spacing-xs` | 4px |
| `--tirbeo-spacing-sm` | 8px |
| `--tirbeo-spacing-md` | 16px |
| `--tirbeo-spacing-lg` | 24px |
| `--tirbeo-spacing-xl` | 32px |
| `--tirbeo-spacing-2xl` | 48px |

## 7. Border Radius

| Token | Value |
|-------|-------|
| `--tirbeo-radius-sm` | 4px |
| `--tirbeo-radius-md` | 8px |
| `--tirbeo-radius-lg` | 12px |
| `--tirbeo-radius-xl` | 16px |

## 8. Borders

Use `--tirbeo-color-border` for all borders. Default width: 1px solid.

For strong borders (e.g., input focus): `--tirbeo-color-primary` at 2px.

## 9. Shadows

| Token | Value |
|-------|-------|
| `--tirbeo-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `--tirbeo-shadow-md` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` |
| `--tirbeo-shadow-lg` | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` |

Avoid strong shadows. Cards should have minimal or no shadow.

## 10. Icons

All icons come from `@tirbeo/icons` which re-exports `lucide-react`.

Use consistent icon names across all apps. Never use custom SVG icons for standard actions.

Icon sizes: 16px (small), 20px (default), 24px (large).

## 11. Header

### TirbeoHeader

Every application uses the same header structure:

```
┌──────────────────────────────────────────────────────────────┐
│ ☰  TIRBEO / APP       Search                  Help Bell User │
├──────────────┬───────────────────────────────────────────────┤
│              │ Breadcrumb / context                          │
│ Home         │ Page title                         Actions    │
│ Dashboard    │ Description                                   │
│ Directory    │                                               │
│ Devices      │ Tabs                                          │
│ Apps         │                                               │
│ Security     │ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│ Data         │ │ Metric   │ │ Metric   │ │ Metric   │       │
│ Reporting    │ └──────────┘ └──────────┘ └──────────┘       │
│ Billing      │                                               │
│ Account      │ ┌────────────────────┐ ┌──────────────────┐  │
│              │ │ Chart              │ │ Status / Activity│  │
│              │ └────────────────────┘ └──────────────────┘  │
│              │                                               │
└──────────────┴───────────────────────────────────────────────┘
```

**LEFT:** Sidebar toggle, Tirbeo logo, Application name
**CENTER:** Global search
**RIGHT:** Help, Notifications, App launcher, Organization switcher, User avatar

### Header Visual Style

- White background
- Very subtle bottom border (`1px solid var(--tirbeo-color-border)`)
- Compact height (48px)
- Minimal decoration
- Blue interactive controls
- Small avatar (32px)

## 12. Sidebar

### Structure

- Narrow professional left navigation
- Icon + label per item
- Optional chevron for submenus
- Optional badge for counts

### Active State

- Very light blue background (`--tirbeo-color-primary-subtle`)
- Blue icon and text
- Rounded right container

### Sections

Support expanded/collapsed sections, nested navigation, section labels, badges, permission-aware items.

When many sections exist, support "Show more" / "Show less".

## 13. Page Layouts

| Layout | Use Case |
|--------|----------|
| `PageLayout` | Generic page with sidebar + content |
| `DashboardLayout` | Dashboard with grid of cards |
| `SettingsLayout` | Settings with sidebar navigation |
| `DetailLayout` | Detail view with sidebar + main content |
| `SplitLayout` | Two-column split (e.g., list + detail) |
| `CenteredLayout` | Centered content (e.g., auth pages) |
| `FullWidthLayout` | Full-width content (e.g., admin tables) |

## 14. Page Header

Every major page uses:

- **Breadcrumb** — navigation path
- **Page title** — simple dark typography
- **Description** — one line of context
- **Actions** — primary action button(s)

Example:
```
Admin / Directory / Users

Users

Manage users and their access.
[Add user] [Import] ⋮
```

## 15. Breadcrumbs

Use `Breadcrumbs` and `BreadcrumbItem` from `@tirbeo/ui`.

Separator: `/`

## 16. Tabs

Tabs use the same visual language everywhere:

- Thin active indicator (bottom border, blue)
- Subtle hover
- Clear selected state
- Consistent height (36px)
- Consistent spacing

Do NOT use giant pill tabs.

## 17. Cards

Cards should be:

- White background
- Thin gray border (`1px solid var(--tirbeo-color-border)`)
- Small radius (`--tirbeo-radius-md` = 8px)
- Minimal shadow or no shadow
- Comfortable internal padding (`--tirbeo-spacing-md` = 16px)

## 18. Tables

Clean enterprise style:

- White background
- Thin separators between rows
- Small headers
- Clear row height (48px)
- Hover state (subtle gray)
- Selected state (light blue)
- Compact actions (⋮ overflow)

Toolbar: Search, Filter, Columns, Export, Refresh, More

## 19. Charts

All charts from `@tirbeo/charts`:

- Thin lines
- Light grid lines
- Simple tooltips
- Small legends
- Minimal labels
- White background

Chart series colors (centralized):
- series.1: `#1A73E8` (blue)
- series.2: `#188038` (green)
- series.3: `#F9AB00` (yellow)
- series.4: `#D93025` (red)
- series.5: `#7C4DFF` (purple)
- series.6: `#00ACC1` (teal)

## 20. Buttons

| Variant | Style |
|---------|-------|
| Primary | Tirbeo blue (`--tirbeo-color-primary`) |
| Secondary | White/light surface with border |
| Tertiary | Text/low emphasis |
| Danger | Red semantic styling (`--tirbeo-color-error`) |

Default button height: compact and enterprise-oriented (36px).

## 21. Inputs

- Light gray/white surface
- Thin border (`1px solid var(--tirbeo-color-border)`)
- Rounded (`--tirbeo-radius-md`)
- Focus state: blue border (`--tirbeo-color-primary`)
- Error state: red border (`--tirbeo-color-error`)

## 22. Dropdowns

- Clean white menu
- Subtle border (`1px solid var(--tirbeo-color-border)`)
- Small shadow (`--tirbeo-shadow-sm`)
- Compact rows
- Icons only where useful

## 23. Menus

Same visual language as dropdowns. Support keyboard navigation, hover, selected, disabled, nested menus.

## 24. Dialogs

- White background
- Subtle shadow (`--tirbeo-shadow-lg`)
- Rounded corners (`--tirbeo-radius-lg`)
- Compact padding
- Focus trap

## 25. Drawers

- Slide from left
- White background
- Subtle shadow
- Support collapsed/expanded states

## 26. Notifications

Bell icon in header. Click opens notification panel/dropdown.

Display: Unread, Recent, Security, System, Application.

Support: mark read, mark all read, open, timestamp, priority.

## 27. Toasts

- Position: bottom-right
- Types: success (green), error (red), warning (yellow), info (blue)
- Support: title, description, action, dismiss, duration, persistent

## 28. Search

Global search should be:

- Wide
- Light gray/white surface
- Rounded modestly
- Search icon
- Placeholder text

Example: "Search users, forms, settings or apps"

Do NOT create a giant command-bar aesthetic.

## 29. Filters

- FilterBar at top of table/list views
- FilterChip for active filters
- FilterMenu for dropdown filter options
- AdvancedFilters for complex filter criteria

Actions: Apply, Clear, Clear all, Save filter

## 30. App Launcher

Simple grid launcher:

- Each item: icon + name
- Compact grid
- Support search, keyboard navigation, recent apps, favorites

## 31. User Menu

Top-right avatar. Click shows:

- Name, email, organization, role
- Menu: Account, Profile, Security, Settings, Switch organization, Help, Sign out

## 32. Settings

Settings layout with sidebar navigation:

- General
- Security
- Privacy
- Notifications
- Applications
- Connected accounts
- Advanced

## 33. Dashboard Patterns

- Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Metric cards at top
- Chart cards in middle
- Activity/alerts at bottom
- Quick actions sidebar

## 34. Admin Patterns

- Highest information density
- Tables, filters, charts, audit timelines, permission matrices, settings panels, status cards
- Same design language as all other apps

## 35. Forms Patterns

- Same header, sidebar language, typography, buttons, cards, dialogs, tabs, tables, notifications, spacing
- Form Builder can be specialized

## 36. Account Patterns

- Centered authentication layouts
- Settings sidebar
- Security cards
- Session tables
- Same global Tirbeo language

## 37. Responsive Rules

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1024px) | Sidebar + Header |
| Tablet (768-1023px) | Collapsible Sidebar + Header |
| Mobile (<768px) | Header + Navigation Drawer |

Cards: 3 columns → 2 columns → 1 column
Tables: desktop table → horizontal/priority columns → mobile detail drawer

## 38. Accessibility

Every component must support:

- Keyboard navigation
- Focus management
- Screen readers
- ARIA attributes
- Semantic HTML
- Color contrast (WCAG AA minimum)
- Reduced motion (`prefers-reduced-motion`)

## 39. Motion

Use subtle motion only:

- Drawer open/close
- Menu open/close
- Dialog open/close
- Toast appear/dismiss
- Hover transitions
- Loading states
- Page transitions where useful

No excessive animations. Respect `prefers-reduced-motion`.

## 40. Loading States

Every interactive component must support:

- `default` — normal state
- `hover` — mouse over
- `focus` — keyboard focus
- `active` — pressed
- `selected` — toggled on
- `disabled` — not interactive
- `loading` — async operation in progress
- `error` — operation failed
- `success` — operation completed

## 41. Empty States

Use `EmptyState` component for:

- No data found
- No results for search/filter
- First-time user onboarding

## 42. Error States

Use `ErrorState` component for:

- API errors
- Network errors
- Permission denied
- Not found (404)

## 43. Component Naming

All components use PascalCase:

- `Button`, `Input`, `Card`, `DataTable`
- `IconButton`, `SearchInput`, `PasswordInput`
- `DropdownMenu`, `ContextMenu`, `CommandMenu`
- `TirbeoThemeProvider`, `TirbeoHeader`, `TirbeoSidebar`

## 44. Package Imports

Always use package imports:

```tsx
import { Button, Card, DataTable } from "@tirbeo/ui";
import { BellIcon, SettingsIcon } from "@tirbeo/icons";
import { LineChart, BarChart } from "@tirbeo/charts";
import { TirbeoThemeProvider } from "@tirbeo/theme";
import { hasPermission } from "@tirbeo/permissions";
```

**Never** import internal files:

```tsx
// ❌ NEVER DO THIS
import { Button } from "../../../packages/ui";
import { primaryColor } from "../../../packages/theme/src";
```

## 45. Package Versioning

Use semantic versioning:

| Change Type | Version Bump |
|-------------|-------------|
| Breaking component API change | MAJOR (e.g., 1.0.0 → 2.0.0) |
| New backward-compatible component | MINOR (e.g., 1.0.0 → 1.1.0) |
| Bug fix | PATCH (e.g., 1.0.0 → 1.0.1) |

## 46. How to Create New Components

1. Search `@tirbeo/ui` first — if it exists, use it
2. If it nearly exists, extend it
3. If it genuinely doesn't exist, add it to `@tirbeo/ui`
4. Never create app-specific versions of shared components (e.g., `AdminButton`, `FormsButton`)

## 47. How to Extend Components

Create a wrapper in the app that uses the shared component and adds app-specific behavior:

```tsx
// ✅ Allowed — app-specific wrapper
function AdminUserTable() {
  return <DataTable columns={userColumns} ... />;
}
```

## 48. How NOT to Create Duplicate Components

```tsx
// ❌ NEVER DO THIS
function AdminButton() {
  // Entirely separate button implementation
  return <button className="admin-btn">...</button>;
}
```

## 49. Migration Instructions

To migrate an existing app to use the Tirbeo design system:

1. Install workspace packages: `pnpm add @tirbeo/ui @tirbeo/theme @tirbeo/icons @tirbeo/charts`
2. Replace `TirbeoThemeProvider` in root layout
3. Replace duplicated UI components with shared imports
4. Replace hardcoded design tokens with CSS custom properties
5. Remove `ignoreBuildErrors` from next.config
6. Run typecheck and fix errors
7. Remove duplicate generic UI components

## 50. UI QA Checklist

Every new page must pass:

- [ ] Correct global header
- [ ] Correct sidebar
- [ ] Correct typography
- [ ] Correct spacing
- [ ] Correct buttons
- [ ] Correct tabs
- [ ] Correct cards
- [ ] Correct tables
- [ ] Correct charts
- [ ] Correct loading state
- [ ] Correct empty state
- [ ] Correct error state
- [ ] Correct responsive behavior
- [ ] Correct accessibility
- [ ] Correct light theme