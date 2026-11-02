import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { scenarios } from '../content/scenarios'
import { ScenarioCard } from '../components/ScenarioCard'

export function NotFound() {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">404</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">That road does not exist</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
        The page you are looking for is not here. Take one of these lessons instead.
      </p>
      <Link
        to="/"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to overview
      </Link>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenarios.slice(0, 3).map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </div>
  )
}
