import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Scenario } from '../content/types'
import { useProgress } from '../hooks/useProgress'
import { stepThroughMap } from '../content/stepThroughs'
import { CategoryBadge } from './Sidebar'

export function Difficulty({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex items-center gap-1" title={`Difficulty ${level} of 3`}>
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={`h-1.5 w-4 rounded-full ${step <= level ? 'bg-amber' : 'bg-line'}`}
        />
      ))}
    </span>
  )
}

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const { isDone } = useProgress()
  const done = isDone(scenario.id)
  const interactive = Boolean(stepThroughMap[scenario.id])
  return (
    <Link
      to={`/scenario/${scenario.id}`}
      className="group print-card flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-[0_16px_35px_-24px_rgba(23,51,79,0.55)]"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <CategoryBadge categoryId={scenario.category} />
            {interactive && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-soft px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                Interactive
              </span>
            )}
          </div>
          {done ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-forest" />
          ) : (
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </div>
        <h3 className="mt-3 text-[15px] font-bold leading-snug tracking-tight text-ink">
          {scenario.title}
        </h3>
        {scenario.germanTerm && (
          <p className="mt-0.5 text-[11px] font-medium italic text-ink-soft">{scenario.germanTerm}</p>
        )}
        <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-ink-soft">
          {scenario.summary}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line/70 pt-3">
        <Difficulty level={scenario.difficulty} />
        <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft/80">
          {scenario.steps.length} steps
        </span>
      </div>
    </Link>
  )
}
