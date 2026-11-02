import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../content/categories'
import { scenarios } from '../content/scenarios'
import { useProgress } from '../hooks/useProgress'
import { categoryIcons } from '../components/categoryIcons'
import { ProgressBar } from '../components/ProgressBar'
import { ScenarioCard } from '../components/ScenarioCard'
import { Car, PathArrow, RoadCanvas, Sign } from '../components/diagrams/primitives'

const starterIds = [
  'cockpit-drill',
  'right-before-left',
  'left-turn-oncoming',
  'right-turn-cyclist',
  'autobahn-merge',
  'emergency-braking',
]

function HeroDiagram() {
  return (
    <RoadCanvas
      title="Illustration of a crossroad with a turning car and priority sign"
      viewBox="0 0 360 320"
    >
      <rect x="0" y="0" width="360" height="320" fill="#0f2438" />
      <rect x="120" y="0" width="120" height="320" fill="#2b4a68" />
      <rect x="0" y="110" width="360" height="110" fill="#2b4a68" />
      <rect x="120" y="110" width="120" height="110" fill="#355878" />
      <line x1="180" y1="0" x2="180" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="9 9" opacity="0.8" />
      <line x1="180" y1="230" x2="180" y2="320" stroke="#94a3b8" strokeWidth="2" strokeDasharray="9 9" opacity="0.8" />
      <line x1="0" y1="165" x2="110" y2="165" stroke="#94a3b8" strokeWidth="2" strokeDasharray="9 9" opacity="0.8" />
      <line x1="250" y1="165" x2="360" y2="165" stroke="#94a3b8" strokeWidth="2" strokeDasharray="9 9" opacity="0.8" />
      <PathArrow d="M205 270 L205 205 Q205 138 150 138 L60 138" color="#4ade80" width={4} />
      <Car x={205} y={278} color="#3b82f6" dark="#1d4ed8" label="You" indicator="left" scale={0.85} />
      <Car x={155} y={58} rotate={180} color="#94a3b8" scale={0.8} />
      <Sign x={285} y={250} type="priority" size={38} />
      <Sign x={74} y={250} type="yield" size={34} />
    </RoadCanvas>
  )
}

export function Home() {
  const { count, isDone } = useProgress()
  const starters = starterIds
    .map((id) => scenarios.find((scenario) => scenario.id === id))
    .filter((scenario): scenario is NonNullable<typeof scenario> => Boolean(scenario))

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-[26px] bg-navy px-6 py-8 text-white shadow-[0_30px_60px_-40px_rgba(15,36,56,0.8)] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/10 blur-2xl" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-amber">
              <Compass className="h-3.5 w-3.5" />
              English notes for the German licence
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[44px]">
              Drive Germany
              <br />
              with confidence.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
              Clear, visual notes for junctions, turns, Autobahn merges and the rules examiners
              look for. Every lesson is in English, with the German terms you will hear in the car.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/scenario/right-before-left"
                className="inline-flex items-center gap-2 rounded-xl bg-amber px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-amber/90"
              >
                Start with junctions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/signs"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Traffic sign reference
              </Link>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-xl font-bold text-white">{scenarios.length}</p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Lessons</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">{categories.length}</p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Topics</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">{count}</p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Completed</p>
              </div>
            </div>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:block">
            <HeroDiagram />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Learn by topic</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Pick a category</h2>
          </div>
          <Link to="/checklists" className="hidden items-center gap-1 text-xs font-semibold text-navy hover:underline sm:inline-flex">
            View checklists
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id]
            const lessons = scenarios.filter((scenario) => scenario.category === category.id)
            const completed = lessons.filter((scenario) => isDone(scenario.id)).length
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group print-card flex flex-col rounded-2xl border border-line bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-[0_16px_35px_-24px_rgba(23,51,79,0.5)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy/8 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-ink-soft">
                    {lessons.length} lessons
                  </span>
                </div>
                <h3 className="mt-3 text-[15px] font-bold text-ink">{category.title}</h3>
                <p className="mt-1 line-clamp-2 flex-1 text-[12px] leading-relaxed text-ink-soft">
                  {category.description}
                </p>
                <div className="mt-4">
                  <ProgressBar value={completed} total={lessons.length} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Start here</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Core lessons</h2>
          </div>
          <span className="hidden text-xs text-ink-soft sm:block">The situations learners ask about most</span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {starters.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brick/20 bg-brick-soft/50 p-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brick/10 text-brick">
            <AlertTriangle className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-ink">The mistakes that fail tests most</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Right of way, shoulder checks, speed and the moments examiners watch closely — with
              fixes and related lessons.
            </p>
          </div>
        </div>
        <Link
          to="/mistakes"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white"
        >
          Review top mistakes
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      <section className="grid gap-4 rounded-2xl border border-line bg-card p-6 sm:grid-cols-3 sm:p-7">
        <div className="flex gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/8 text-navy">
            <Layers className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-ink">Visual first</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Every scenario has a top-down diagram with your car, the intended path and the conflict points.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/8 text-navy">
            <BookOpen className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-ink">Step by step</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Mirror, signal, shoulder check and every decision point is broken into a repeatable routine.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/8 text-navy">
            <GraduationCap className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-ink">Exam ready</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Common mistakes and examiner tips are called out separately, so you know what to practise.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-forest/20 bg-forest-soft p-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
          <div>
            <h3 className="text-sm font-bold text-ink">Track your progress as you learn</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Mark a lesson complete when you can explain it and perform it. Progress stays in this browser.
            </p>
          </div>
        </div>
        <Link
          to="/category/junctions"
          className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white"
        >
          Open junctions
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  )
}
