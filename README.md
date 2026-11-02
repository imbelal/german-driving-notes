# German Driving Notes

An English-language study site for the German driving licence, built with React, TypeScript, Vite and Tailwind CSS.

It covers junctions and priority, left and right turns, U-turns, roundabouts, Autobahn merging and exits, overtaking, emergency braking, parking, traffic signs and more. Every lesson includes a custom top-down SVG diagram, a step-by-step routine, common mistakes, exam tips and the relevant German terms.

## Commands

```bash
npm install
npm run dev      # start the development server
npm run build    # typecheck and build for production
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Project structure

```
src/
  components/          Layout, sidebar, cards and the diagram system
  components/diagrams/ SVG primitives, road bases and one scene per lesson
  content/             Typed scenarios, categories, signs and checklists
  hooks/               Progress and checklist persistence in localStorage
  pages/               Home, category, lesson, checklists and signs pages
```

## Adding a lesson

1. Add a `Scenario` to `src/content/scenarios/`.
2. Give it a unique `id` and a `diagram` key.
3. Create the diagram in `src/components/diagrams/scenes/` and register it in `ScenarioDiagram.tsx`.

Lesson progress is stored in the browser only (no backend). This site is a study aid, not legal advice — always follow the current StVO, your driving instructor and official exam guidance.

## Deploy to GitHub Pages

The repo is configured for GitHub Pages with a GitHub Actions workflow.

1. Push the repo to GitHub.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The site will be published at `https://<username>.github.io/<repository>/`.

The app uses hash routing (`#/scenario/...`) and a relative Vite base, so deep links work on GitHub Pages without any server-side rewrite or custom 404 page.
