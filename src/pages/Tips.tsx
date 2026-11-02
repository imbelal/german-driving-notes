import {
  ArrowRight,
  Eye,
  Lightbulb,
  MoveHorizontal,
  RotateCcw,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { TipVisual } from '../components/diagrams/tips/TipVisuals'
import { drivingTips } from '../content/tips'
import { scenarioMap } from '../content/scenarios'

const habits = [
  { title: 'Look far ahead', text: 'Your hands follow your eyes.', icon: Eye },
  { title: 'Small inputs', text: 'Smooth steering and pedals, no sudden moves.', icon: MoveHorizontal },
  { title: 'Use reference points', text: 'Know where the wheels and lane edges are.', icon: Target },
  { title: 'Scan in a rhythm', text: 'Far ahead, mirrors, sides, repeat.', icon: RotateCcw },
]

export function Tips() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          <Lightbulb className="h-3 w-3" />
          Driving tips
        </span>
        <span className="text-[11px] font-medium text-ink-soft">Habits that make the car feel predictable</span>
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-[38px]">
        Driving tips and reference points
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
        The basics that make everything else easier: reading the speed limit, keeping the car
        centred, knowing where the wheels are and steering smoothly through turns. Practise these
        in a quiet area before you need them in traffic.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {habits.map((habit) => (
          <div key={habit.title} className="rounded-2xl border border-line bg-card p-4">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy/8 text-navy">
              <habit.icon className="h-4.5 w-4.5" />
            </span>
            <h2 className="mt-3 text-[13px] font-bold text-ink">{habit.title}</h2>
            <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{habit.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {drivingTips.map((tip, index) => (
          <article key={tip.id} className="print-card flex flex-col rounded-2xl border border-line bg-card p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy text-sm font-black text-amber">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-[15px] font-bold leading-snug tracking-tight text-ink">{tip.title}</h2>
                <p className="mt-0.5 text-[11px] font-medium italic text-ink-soft">{tip.germanTerm}</p>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-line bg-paper p-2">
              <TipVisual id={tip.visual} />
            </div>

            <p className="mt-4 text-[12.5px] leading-relaxed text-ink-soft">{tip.summary}</p>

            <div className="mt-4 rounded-xl bg-paper p-3.5">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink-soft">How to do it</p>
              <ul className="mt-2 space-y-1.5">
                {tip.steps.map((step) => (
                  <li key={step} className="flex gap-2 text-[11.5px] leading-relaxed text-ink-soft">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3 rounded-xl border border-brick/15 bg-brick-soft/50 p-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brick">Watch out</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{tip.warning}</p>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
              <span className="text-[9px] font-bold uppercase tracking-wide text-ink-soft/80">Practise:</span>
              {tip.related.map((id) => {
                const scenario = scenarioMap[id]
                if (!scenario) return null
                return (
                  <Link
                    key={id}
                    to={`/scenario/${id}`}
                    className="rounded-full border border-line bg-paper px-2.5 py-1 text-[10px] font-semibold text-ink-soft transition-colors hover:border-navy/30 hover:text-navy"
                  >
                    {scenario.title}
                  </Link>
                )
              })}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">A simple practice plan</p>
            <h2 className="mt-1 text-lg font-bold tracking-tight text-ink">Build the feel before the test</h2>
          </div>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white"
          >
            Test yourself
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ['1', 'Empty car park', 'Set your seat, find the wheel reference points and practise smooth steering.'],
            ['2', 'Quiet 30 zone', 'Read the signs early and keep the speed steady without staring at the dashboard.'],
            ['3', 'Country road', 'Practise looking through bends and using the whole road width safely.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-xl bg-paper p-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-amber text-[10px] font-black text-navy dark:text-navy-deep">
                {number}
              </span>
              <p className="mt-2 text-[12px] font-bold text-ink">{title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-6 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
        Reference points differ between cars and drivers. Set them with your instructor using your
        normal seating position, and recheck them if you change cars.
      </p>
    </div>
  )
}
