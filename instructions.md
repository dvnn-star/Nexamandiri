
# Nexa Mandiri — Project Structure Setup

Act as a senior Nuxt 4 developer.

This project is the official company profile website for **PT Nexa Mandiri Group**.

Use the provided Nexa Mandiri company profile as the primary source for company content. Do not invent company information that is not supported by the source.

## Tech Stack

The project uses:

* Nuxt 4
* Vue 3
* TypeScript
* Tailwind CSS
* shadcn-nuxt
* GSAP
* Lucide Vue Next
* @nuxt/image
* @nuxtjs/seo
* @nuxtjs/i18n
* Vue Router

### Important

Do not change, replace, remove, or add technologies/dependencies without explicit permission.

---

# Project Structure

Organize the project using a clean and scalable Nuxt structure:

```text
app/
├── assets/
│   └── css/
│       └── main.css
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── ui/
│
├── layouts/
│   └── default.vue
│
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── services.vue
│   ├── projects/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── insights/
│   │   ├── index.vue
│   │   └── [slug].vue
│   └── contact.vue
│
├── composables/
│
├── data/
│   ├── id.ts
│   └── en.ts
│
└── types/
    ├── project.ts
    └── service.ts

public/
├── images/
│   ├── company/
│   ├── projects/
│   ├── services/
│   └── team/
│
├── documents/
└── favicon.ico

server/
└── api/

.env
.env.example
.gitignore
AGENTS.md
nuxt.config.ts
package.json
tsconfig.json
```

Do not blindly recreate this structure.

First inspect the existing project and reuse existing files where appropriate.

---

# Internationalization

The website supports two languages:

* Indonesian (`id`)
* English (`en`)

Use `@nuxtjs/i18n`.

Use locale-prefixed routing for English while keeping Indonesian as the default locale.

Expected URL structure:

```text
/
 /about
 /services
 /projects
 /contact

/en
/en/about
/en/services
/en/projects
/en/contact
```

Use:

```text
app/data/id.ts
app/data/en.ts
```

for company content.

Do not split content into many language-specific files unless there is a real need.

Example:

```ts
// app/data/id.ts

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: '...',
  },

  services: [
    // ...
  ],

  projects: [
    // ...
  ],
}
```

```ts
// app/data/en.ts

export const content = {
  company: {
    name: 'Nexa Mandiri Group',
    description: '...',
  },

  services: [
    // ...
  ],

  projects: [
    // ...
  ],
}
```

Keep the structure of `id.ts` and `en.ts` consistent.

Use TypeScript types where appropriate.

Do not duplicate images or other static assets just because the website supports two languages.

---

# Website Structure

The main website should contain:

```text
Home
About
Services
Projects
Insights
Contact
```

Homepage sections should generally follow:

```text
Hero
Company Introduction
Services
Featured Projects
Capabilities / Expertise
Leadership / Founder
CTA
Footer
```

Do not add unnecessary pages or sections without a clear requirement.

---

# Company Content

The uploaded Nexa Mandiri company profile is the primary source of truth.

Use its:

* company positioning
* services
* project information
* expertise
* leadership information
* terminology
* company descriptions

Do not invent:

* clients
* project values
* project counts
* certifications
* awards
* company history
* services
* statistics
* claims

If required information is not available in the company profile, use a clear placeholder or ask for clarification.

---

# Components

Create reusable components when they have a clear purpose.

Use:

```text
components/
├── common/
├── layout/
├── sections/
├── projects/
└── ui/
```

Avoid unnecessary component abstraction.

Do not create a component simply to wrap a single trivial element.

---

# Styling

Use Tailwind CSS as the primary styling system.

Use shadcn-nuxt for reusable UI components when appropriate.

Use Lucide Vue Next for icons.

Do not introduce another CSS framework.

---

# Animation

GSAP is available for advanced animation.

Use GSAP only when necessary.

For simple transitions, prefer CSS/Tailwind.

Animations should be:

* subtle
* professional
* performant
* responsive

Do not animate every section or element.

Respect `prefers-reduced-motion`.

---

# Images

Use `@nuxt/image` for image optimization where appropriate.

Project images should be organized under:

```text
public/images/projects/
```

Other images:

```text
public/images/company/
public/images/services/
public/images/team/
```

Do not duplicate the same image for different locales.

---

# SEO

Use `@nuxtjs/seo` for SEO functionality.

Both Indonesian and English pages must have appropriate metadata.

Important pages should have:

* title
* description
* canonical URL
* Open Graph metadata
* appropriate language/locale metadata

Do not hardcode production URLs throughout the application.

Use the configured site URL/environment variable.

---

# Rules

1. **Do not change the tech stack without explicit permission.**
2. **Do not add, remove, or replace dependencies without explicit permission.**
3. **Do not change the project architecture without explicit permission.**
4. **Do not delete existing working features without explicit permission.**
5. **Do not modify unrelated files.**
6. **Do not invent company information.**
7. **Do not use `any` or `@ts-ignore` to hide errors.**
8. **Every meaningful feature or change must have its own Git commit.**
9. **Keep commits focused on one feature or change.**
10. **Run the relevant checks/build after completing a feature.**
11. **If a change requires breaking one of these rules, ask for permission first.**

---

# Git Commit Format

Use conventional commits:

```text
feat: add hero section
feat: add projects page
feat: add bilingual content
fix: fix mobile navigation
style: improve hero section
refactor: reorganize project components
chore: update configuration
```

Do not combine unrelated changes into one commit.

---

# Workflow

Before making changes:

1. Inspect the existing project.
2. Inspect `package.json`.
3. Inspect `nuxt.config.ts`.
4. Inspect existing pages and components.
5. Inspect the company profile when implementing company content.
6. Reuse existing code where possible.
7. Make the smallest appropriate change.
8. Validate the change.
9. Commit the completed feature/change.

Do not rebuild existing functionality unnecessarily.

When a requirement is unclear or conflicts with these rules, **ask for permission before proceeding**.
