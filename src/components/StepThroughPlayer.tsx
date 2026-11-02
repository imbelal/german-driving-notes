import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { StepVisual } from './diagrams/stepthrough/StepVisuals'
import type { StepThroughLesson } from '../content/stepThroughs'

export function StepThroughPlayer({ lesson }: { lesson: StepThroughLesson }) {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)
  const lastIndex = lesson.steps.length - 1
  const step = lesson.steps[current]

  useEffect(() => {
    if (!playing || current >= lastIndex) return
    const timer = window.setTimeout(() => {
      const next = Math.min(current + 1, lastIndex)
      setCurrent(next)
      if (next >= lastIndex) setPlaying(false)
    }, 1900)
    return () => window.clearTimeout(timer)
  }, [current, lastIndex, playing])

  const togglePlay = () => {
    if (playing) {
      setPlaying(false)
      return
    }
    if (current >= lastIndex) setCurrent(0)
    setPlaying(true)
  }

  const goTo = (index: number) => {
    setPlaying(false)
    setCurrent(Math.max(0, Math.min(lastIndex, index)))
  }

  return (
    <section id="step-through" className="print-card scroll-mt-6 overflow-hidden rounded-2xl border border-line bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">Interactive step-through</p>
          <h2 className="mt-0.5 text-[15px] font-bold text-ink">{lesson.title}</h2>
          <p className="mt-0.5 text-[11px] text-ink-soft">{lesson.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold tabular-nums text-ink-soft">
            {current + 1} / {lesson.steps.length}
          </span>
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-[10px] font-bold text-white transition-colors hover:bg-navy-deep dark:hover:bg-[#244a6d]"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? 'Pause' : current >= lastIndex ? 'Replay' : 'Play'}
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-5">
        <StepVisual id={lesson.visual} step={current} />

        <div className="mt-4 rounded-xl border border-line bg-paper p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                Step {current + 1} of {lesson.steps.length}
              </p>
              <h3 className="mt-1 text-[14px] font-bold text-ink">{step.title}</h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">{step.detail}</p>
            </div>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                aria-label="Previous step"
                className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-card text-ink-soft transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={current === lastIndex}
                aria-label="Next step"
                className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-card text-ink-soft transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={lastIndex}
            step={1}
            value={current}
            onChange={(event) => goTo(Number(event.target.value))}
            aria-label="Step-through progress"
            aria-valuetext={`Step ${current + 1} of ${lesson.steps.length}: ${step.title}`}
            className="mt-4 w-full cursor-pointer accent-amber"
          />
          <div className="mt-2 flex justify-between text-[9px] font-semibold uppercase tracking-wide text-ink-soft/80">
            <span>Start</span>
            <span>Finish</span>
          </div>
        </div>
      </div>
    </section>
  )
}
