import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  GitFork,
  ListChecks,
  MoveRight,
  RotateCcw,
  ShieldAlert,
  Target,
  MonitorPlay,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { drivingMistakes, alsoCommon, severityLabels } from '../content/mistakes'
import type { MistakeSeverity } from '../content/mistakes'
import { scenarioMap } from '../content/scenarios'

const severityStyles: Record<MistakeSeverity, string> = {
  instant: 'bg-brick-soft text-brick border-brick/20',
  serious: 'bg-amber-soft text-navy border-amber/40',
  pattern: 'bg-navy/8 text-navy border-navy/15',
}

function SeverityChip({ severity }: { severity: MistakeSeverity }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${severityStyles[severity]}`}>
      {severity === 'instant' && <AlertTriangle className="h-3 w-3" />}
      {severityLabels[severity]}
    </span>
  )
}

export function Mistakes() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brick-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brick">
          Exam preparation
        </span>
        <span className="text-[11px] font-medium text-ink-soft">Based on the most common practical-test failures</span>
      </div>
      <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-[38px]">
        Top driving mistakes in Germany
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
        Most learners do not fail because they cannot control the car. They fail because of
        observation, priority and decisions under pressure. These are the mistakes examiners see
        again and again — and the habits that prevent them.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-card p-4">
          <div className="flex items-center gap-2 text-navy">
            <Eye className="h-4 w-4" />
            <p className="text-[10px] font-bold uppercase tracking-[0.14em]">Biggest failure area</p>
          </div>
          <p className="mt-2 text-[13px] font-bold text-ink">Observation</p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">
            Mirror checks and visible shoulder checks before every change of direction.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-4">
          <div className="flex items-center gap-2 text-navy">
            <GitFork className="h-4 w-4" />
            <p className="text-[10px] font-bold uppercase tracking-[0.14em]">Most costly mistake</p>
          </div>
          <p className="mt-2 text-[13px] font-bold text-ink">Right of way</p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">
            Especially right-before-left at unsigned junctions in residential areas.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-4">
          <div className="flex items-center gap-2 text-navy">
            <Target className="h-4 w-4" />
            <p className="text-[10px] font-bold uppercase tracking-[0.14em]">What examiners want</p>
          </div>
          <p className="mt-2 text-[13px] font-bold text-ink">Clear decisions</p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">
            Not perfection — early observation, a legal speed and calm, predictable actions.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-navy p-5 text-white sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber">The routine that prevents most mistakes</p>
            <h2 className="mt-1 text-lg font-bold">Mirror → Signal → Shoulder → Move</h2>
          </div>
          <Link
            to="/scenario/mirrors-blind-spot"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Review the blind spot
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { n: '1', label: 'Interior mirror', icon: Eye },
            { n: '2', label: 'Side mirror + signal', icon: MoveRight },
            { n: '3', label: 'Shoulder check', icon: RotateCcw },
            { n: '4', label: 'Move smoothly', icon: CheckCircle2 },
          ].map((step) => (
            <div key={step.n} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-amber">
                <step.icon className="h-4 w-4" />
                <span className="text-[10px] font-bold">STEP {step.n}</span>
              </div>
              <p className="mt-1 text-[11.5px] font-semibold text-white">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="space-y-4">
          {drivingMistakes.map((mistake) => (
            <article key={mistake.id} className="print-card rounded-2xl border border-line bg-card p-5">
              <div className="flex gap-4">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-sm font-black text-amber">
                  {String(mistake.rank).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-[16px] font-bold leading-snug tracking-tight text-ink">
                      {mistake.title}
                    </h2>
                    <SeverityChip severity={mistake.severity} />
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium italic text-ink-soft">{mistake.german}</p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">{mistake.summary}</p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border border-brick/15 bg-brick-soft/50 p-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brick">Why it fails</p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{mistake.why}</p>
                    </div>
                    <div className="rounded-xl border border-forest/15 bg-forest-soft/60 p-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-forest">How to fix it</p>
                      <ul className="mt-1.5 space-y-1.5">
                        {mistake.fixes.map((fix) => (
                          <li key={fix} className="flex gap-2 text-[11.5px] leading-relaxed text-ink-soft">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                            {fix}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wide text-ink-soft/80">Practise:</span>
                    {mistake.related.map((id) => {
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
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <section className="rounded-2xl border border-brick/20 bg-brick-soft/60 p-5">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-brick" />
              <h2 className="text-sm font-bold text-ink">Instant-fail zone</h2>
            </div>
            <ul className="mt-3 space-y-2">
              {[
                'Ignoring right of way and affecting another road user',
                'Running a red light or crossing a stop sign',
                'Endangering pedestrians, cyclists or other traffic',
                'Driving on the wrong side of the road',
                'Your instructor has to grab the wheel or brake',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[11px] leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-card p-5">
            <div className="flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-navy" />
              <h2 className="text-sm font-bold text-ink">Before test day</h2>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">
              Run through the cockpit, parking and test-day checklists until they feel automatic.
            </p>
            <Link
              to="/checklists"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-[11px] font-bold text-white"
            >
              Open checklists
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>

          <section className="rounded-2xl border border-line bg-card p-5">
            <div className="flex items-center gap-2">
              <MonitorPlay className="h-4 w-4 text-brick" />
              <h2 className="text-sm font-bold text-ink">Watch the series</h2>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">
              Inspired by Fahrlingo’s “Top 10 German Driving Test Mistakes” series, including the
              “Too far right” episode.
            </p>
            <a
              href="https://www.youtube.com/watch?v=gvfoGwUXvXM&list=PL5wLBlwGrs81X-At_72eFAimLfdsf-8f5"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-navy hover:underline"
            >
              Open on YouTube
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </section>
        </aside>
      </div>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Also common</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-ink">More situations worth revising</h2>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {alsoCommon.map((item) => {
            const scenario = scenarioMap[item.scenario]
            if (!scenario) return null
            return (
              <Link
                key={item.scenario}
                to={`/scenario/${item.scenario}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-card px-4 py-3 transition-colors hover:border-navy/25"
              >
                <span className="text-[12px] font-bold text-ink group-hover:text-navy">{item.title}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5" />
              </Link>
            )
          })}
        </div>
      </section>

      <p className="mt-8 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
        This page is a study guide, not an official list of test criteria. Examiners assess your
        driving as a whole; a single serious mistake can end a test, and the exact rules vary with
        the situation. Always follow your driving instructor’s feedback and the current StVO.
      </p>
    </div>
  )
}
