import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Circle,
  Lightbulb,
  Maximize2,
  Printer,
  Scale,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoryMap } from '../content/categories'
import { relatedScenarios, scenarioMap, scenarios } from '../content/scenarios'
import { useProgress } from '../hooks/useProgress'
import { Difficulty, ScenarioCard } from '../components/ScenarioCard'
import { DiagramLegend, ScenarioDiagram } from '../components/diagrams/ScenarioDiagram'

export function ScenarioPage() {
  const { id } = useParams<{ id: string }>()
  const scenario = id ? scenarioMap[id] : undefined
  const { isDone, toggle } = useProgress()
  const [diagramOpen, setDiagramOpen] = useState(false)

  useEffect(() => {
    if (!diagramOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [diagramOpen])

  if (!scenario) {
    return (
      <div className="rounded-2xl border border-line bg-card p-10 text-center">
        <h1 className="text-xl font-bold">Lesson not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm font-semibold text-navy hover:underline">
          Back to overview
        </Link>
      </div>
    )
  }

  const category = categoryMap[scenario.category]
  const done = isDone(scenario.id)
  const siblings = scenarios.filter((item) => item.category === scenario.category)
  const position = siblings.findIndex((item) => item.id === scenario.id)
  const previous = position > 0 ? siblings[position - 1] : undefined
  const next = position >= 0 && position < siblings.length - 1 ? siblings[position + 1] : undefined
  const related = relatedScenarios(scenario)

  return (
    <article>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-ink-soft">
        <Link to="/" className="transition-colors hover:text-navy">
          Overview
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link to={`/category/${category.id}`} className="transition-colors hover:text-navy">
          {category.title}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink/70">Lesson</span>
      </nav>

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to={`/category/${category.id}`}
            className="rounded-full bg-navy/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy/12"
          >
            {category.shortTitle}
          </Link>
          <Difficulty level={scenario.difficulty} />
          <span className="text-[10px] font-medium text-ink-soft">
            {scenario.steps.length} steps
          </span>
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print ml-auto inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 py-1.5 text-[10px] font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>
        </div>

        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-[38px]">
          {scenario.title}
        </h1>
        {scenario.germanTerm && (
          <p className="mt-1 text-sm font-medium italic text-ink-soft">{scenario.germanTerm}</p>
        )}
        <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-ink-soft">{scenario.summary}</p>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-amber/40 bg-amber-soft/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber text-[11px] font-black text-navy">
              !
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/70">Key rule</p>
              <p className="mt-0.5 text-[13px] font-semibold leading-relaxed text-ink">{scenario.keyRule}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle(scenario.id)}
            className={`no-print inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-[11px] font-bold transition-colors ${
              done
                ? 'bg-forest text-white hover:bg-forest/90'
                : 'border border-navy/20 bg-white text-navy hover:border-navy/40'
            }`}
          >
            {done ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {done ? 'Completed' : 'Mark as learned'}
          </button>
        </div>
      </header>

      <section className="print-card mt-8 overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">Diagram</p>
            <p className="text-[11px] font-medium text-ink">Top-down view of the situation</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-semibold text-ink-soft">
              {scenario.germanTerm ?? scenario.title}
            </span>
            <button
              type="button"
              onClick={() => setDiagramOpen(true)}
              className="no-print inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-[10px] font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              <Maximize2 className="h-3 w-3" />
              Enlarge
            </button>
          </div>
        </div>
        <div className="p-3 sm:p-5">
          <ScenarioDiagram id={scenario.diagram} />
          <div className="mt-4 flex flex-col gap-3 border-t border-line/70 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <DiagramLegend />
            <p className="text-[10px] font-medium text-ink-soft/80">Not to scale</p>
          </div>
        </div>
      </section>

      {diagramOpen && (
        <div
          className="no-print fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/75 p-3 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          onClick={() => setDiagramOpen(false)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-2xl border border-line bg-card p-3 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">Diagram</p>
                <p className="text-[11px] font-medium text-ink">Scroll or pinch to explore</p>
              </div>
              <button
                type="button"
                onClick={() => setDiagramOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-ink-soft transition-colors hover:text-ink"
                aria-label="Close enlarged diagram"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="min-w-[760px]">
              <ScenarioDiagram id={scenario.diagram} />
            </div>
            <div className="mt-3 border-t border-line/70 pt-3">
              <DiagramLegend />
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="print-card rounded-2xl border border-line bg-card p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-[10px] font-black text-white">
              {scenario.steps.length}
            </span>
            <h2 className="text-lg font-bold tracking-tight text-ink">Step by step</h2>
          </div>
          <ol className="mt-5 space-y-0">
            {scenario.steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
                {index < scenario.steps.length - 1 && (
                  <span className="absolute left-[13px] top-8 h-[calc(100%-24px)] w-px bg-line" />
                )}
                <span className="relative z-10 mt-0.5 grid h-[27px] w-[27px] shrink-0 place-items-center rounded-full border border-navy/15 bg-paper text-[11px] font-bold text-navy">
                  {step.marker ?? index + 1}
                </span>
                <div>
                  <h3 className="text-[13.5px] font-bold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="space-y-6">
          <section className="print-card rounded-2xl border border-brick/20 bg-brick-soft/60 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4.5 w-4.5 text-brick" />
              <h2 className="text-sm font-bold text-ink">Common mistakes</h2>
            </div>
            <ul className="mt-3 space-y-2.5">
              {scenario.mistakes.map((mistake) => (
                <li key={mistake} className="flex gap-2 text-[12px] leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick" />
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section className="print-card rounded-2xl border border-forest/20 bg-forest-soft/70 p-5">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4.5 w-4.5 text-forest" />
              <h2 className="text-sm font-bold text-ink">Exam tips</h2>
            </div>
            <ul className="mt-3 space-y-2.5">
              {scenario.examTips.map((tip) => (
                <li key={tip} className="flex gap-2 text-[12px] leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {scenario.rules && scenario.rules.length > 0 && (
        <section className="print-card mt-6 rounded-2xl border border-line bg-card p-5">
          <div className="flex items-center gap-2">
            <Scale className="h-4.5 w-4.5 text-navy" />
            <h2 className="text-sm font-bold text-ink">Rules and references</h2>
          </div>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {scenario.rules.map((rule) => (
              <li key={rule} className="rounded-xl bg-paper px-3 py-2 text-[11.5px] leading-relaxed text-ink-soft">
                {rule}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="no-print mt-8 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            to={`/scenario/${previous.id}`}
            className="group flex items-center gap-3 rounded-2xl border border-line bg-card p-4 transition-colors hover:border-navy/25"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-ink-soft" />
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">Previous</span>
              <span className="block text-xs font-bold text-ink group-hover:text-navy">{previous.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={`/scenario/${next.id}`}
            className="group flex items-center justify-end gap-3 rounded-2xl border border-line bg-card p-4 text-right transition-colors hover:border-navy/25"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">Next</span>
              <span className="block text-xs font-bold text-ink group-hover:text-navy">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft" />
          </Link>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold tracking-tight text-ink">Related lessons</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ScenarioCard key={item.id} scenario={item} />
          ))}
        </div>
      </section>
    </article>
  )
}
