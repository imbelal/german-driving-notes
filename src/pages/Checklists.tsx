import { Check, ListChecks, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { checklists } from '../content/checklists'
import type { Checklist } from '../content/types'
import { useChecklistState } from '../hooks/useProgress'
import { ProgressBar } from '../components/ProgressBar'

function ChecklistCard({ checklist }: { checklist: Checklist }) {
  const { checked, toggle, reset } = useChecklistState(`gdn-checklist-${checklist.id}`)
  const complete = checklist.items.filter((item) => checked.includes(item)).length

  return (
    <section className="print-card flex flex-col rounded-2xl border border-line bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-[15px] font-bold tracking-tight text-ink">{checklist.title}</h2>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{checklist.description}</p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/8 text-navy">
          <ListChecks className="h-4.5 w-4.5" />
        </span>
      </div>

      <div className="mt-4">
        <ProgressBar value={complete} total={checklist.items.length} tone={complete === checklist.items.length ? 'green' : 'navy'} />
      </div>

      <ul className="mt-3 flex-1 space-y-1.5">
        {checklist.items.map((item) => {
          const isChecked = checked.includes(item)
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(item)}
                className={`flex w-full items-start gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] leading-relaxed transition-colors ${
                  isChecked ? 'bg-forest-soft/60 text-ink-soft/80' : 'hover:bg-paper'
                }`}
              >
                <span
                  className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors ${
                    isChecked
                      ? 'border-forest bg-forest text-white'
                      : 'border-line bg-white text-transparent'
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className={isChecked ? 'line-through decoration-forest/40' : ''}>{item}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        onClick={reset}
        className="mt-3 inline-flex items-center gap-1.5 self-start text-[10px] font-semibold text-ink-soft transition-colors hover:text-brick"
      >
        <RotateCcw className="h-3 w-3" />
        Reset list
      </button>
    </section>
  )
}

export function Checklists() {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Reference</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">Checklists</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Short, repeatable routines for the moments that matter: setting up, parking, breaking down
        and test day. Tick items as you practise — progress is saved in this browser.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {checklists.map((checklist) => (
          <ChecklistCard key={checklist.id} checklist={checklist} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-card p-5 text-[11.5px] leading-relaxed text-ink-soft">
        Looking for a specific manoeuvre?{' '}
        <Link to="/category/junctions" className="font-semibold text-navy hover:underline">
          Review junctions
        </Link>{' '}
        or{' '}
        <Link to="/category/autobahn" className="font-semibold text-navy hover:underline">
          Autobahn rules
        </Link>
        . These checklists are study reminders, not a substitute for the official StVO or your
        instructor’s guidance.
      </div>
    </div>
  )
}
