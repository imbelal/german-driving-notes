import {
  Gauge,
  MoveHorizontal,
  PhoneCall,
  SquareParking,
  Wine,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { quickRuleSections, speedLimits } from '../content/quickRules'

const sectionIcons: Record<string, LucideIcon> = {
  distance: MoveHorizontal,
  alcohol: Wine,
  equipment: Wrench,
  emergency: PhoneCall,
  parking: SquareParking,
}

export function Rules() {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Reference</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">Rules and numbers</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        The limits, distances and equipment rules that come up again and again in lessons and in
        the theory test. Use them as a quick revision sheet.
      </p>

      <section className="mt-6 overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex items-center gap-2 border-b border-line px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy/8 text-navy">
            <Gauge className="h-4.5 w-4.5" />
          </span>
          <div>
            <h2 className="text-[15px] font-bold text-ink">Default speed limits</h2>
            <p className="text-[11px] text-ink-soft">For cars and motorcycles, unless signs say otherwise.</p>
          </div>
        </div>
        <div className="divide-y divide-line">
          {speedLimits.map((row) => (
            <div key={row.road} className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-[12.5px] font-bold text-ink">{row.road}</p>
                <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{row.note}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-navy/8 px-3 py-1.5 text-sm font-bold tabular-nums text-navy">
                {row.limit}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {quickRuleSections.map((section) => {
          const Icon = sectionIcons[section.id] ?? Gauge
          return (
            <section key={section.id} className="print-card rounded-2xl border border-line bg-card p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/8 text-navy">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h2 className="text-[15px] font-bold text-ink">{section.title}</h2>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{section.intro}</p>
                </div>
              </div>
              <dl className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <div key={item.label} className="rounded-xl bg-paper px-3.5 py-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                        {item.label}
                      </dt>
                      <dd className="text-[12px] font-bold text-navy">{item.value}</dd>
                    </div>
                    {item.note && (
                      <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{item.note}</p>
                    )}
                  </div>
                ))}
              </dl>
            </section>
          )
        })}
      </div>

      <p className="mt-6 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
        Fines, points and limits can change. This page is a revision aid, not legal advice — check
        the current StVO and your driving school materials before the exam.
      </p>
    </div>
  )
}
