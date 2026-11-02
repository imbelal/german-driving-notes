import { Signpost } from 'lucide-react'
import { useState } from 'react'
import { signGroups, signs } from '../content/signs'
import { Sign } from '../components/diagrams/primitives'

type Filter = 'All' | (typeof signGroups)[number]

export function Signs() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? signs : signs.filter((sign) => sign.group === filter)

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Reference</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">Traffic signs</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        The signs that change priority, speed and permitted manoeuvres. Learn the shape and colour
        first, then the exact meaning.
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {(['All', ...signGroups] as Filter[]).map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setFilter(group)}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
              filter === group
                ? 'border-navy bg-navy text-white'
                : 'border-line bg-card text-ink-soft hover:border-navy/30 hover:text-ink'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((sign) => (
          <article key={sign.id} className="print-card flex gap-4 rounded-2xl border border-line bg-card p-4">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-paper">
              <svg viewBox="0 0 100 100" className="h-[68px] w-[68px]">
                <Sign x={50} y={50} type={sign.key} size={86} />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink-soft">{sign.group}</span>
              <h2 className="mt-0.5 text-[13px] font-bold leading-snug text-ink">{sign.name}</h2>
              <p className="text-[10.5px] font-medium italic text-ink-soft">{sign.german}</p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-soft">{sign.meaning}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-navy/15 bg-navy/5 p-5">
        <Signpost className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
        <p className="text-[11.5px] leading-relaxed text-ink-soft">
          Sign shapes carry meaning: red-bordered circles usually prohibit, red-bordered triangles
          warn, blue circles or squares inform, and yellow diamonds give priority. Local
          supplementary plates can change a sign’s meaning — read them before acting.
        </p>
      </div>
    </div>
  )
}
