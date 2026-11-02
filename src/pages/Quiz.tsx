import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Eye,
  Play,
  RotateCcw,
  Signpost,
  Target,
  Trophy,
  XCircle,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { buildQuiz, quizModeLabels } from '../content/quiz'
import type { QuizMode, QuizQuestion } from '../content/quiz'
import { ProgressBar } from '../components/ProgressBar'
import { Sign } from '../components/diagrams/primitives'
import { QuizVisual } from '../components/diagrams/quiz/QuizVisuals'

type Phase = 'intro' | 'playing' | 'result'
type BestScores = Partial<Record<QuizMode, number>>

const BEST_KEY = 'gdn-quiz-best-v1'

const modeMeta: { id: QuizMode; title: string; description: string; icon: LucideIcon }[] = [
  {
    id: 'mixed',
    title: 'Mixed quiz',
    description: 'Rules, signs and visual traffic situations.',
    icon: Brain,
  },
  {
    id: 'rules',
    title: 'Road rules',
    description: 'Priority, turns, Autobahn, safety and manoeuvres.',
    icon: BookOpen,
  },
  {
    id: 'signs',
    title: 'Traffic signs',
    description: 'Identify signs from the reference page.',
    icon: Signpost,
  },
  {
    id: 'visual',
    title: 'Visual situations',
    description: 'Junctions, turns, Autobahn and road scenes.',
    icon: Eye,
  },
]

function readBest(): BestScores {
  try {
    const raw = localStorage.getItem(BEST_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return {}
    const result: BestScores = {}
    for (const mode of ['mixed', 'rules', 'signs', 'visual'] as QuizMode[]) {
      const value = (parsed as Record<string, unknown>)[mode]
      if (typeof value === 'number' && value >= 0 && value <= 100) result[mode] = value
    }
    return result
  } catch {
    return {}
  }
}

function topicLabel(topic: QuizQuestion['topic']) {
  return {
    priority: 'Priority',
    turns: 'Turns',
    autobahn: 'Autobahn',
    safety: 'Safety',
    manoeuvres: 'Manoeuvre',
    rules: 'Rules',
    signs: 'Traffic sign',
  }[topic]
}

function resultMessage(percent: number) {
  if (percent === 100) return 'Perfect score. You are ready for a mock test.'
  if (percent >= 80) return 'Strong result. Review the missed questions and try again.'
  if (percent >= 60) return 'Good foundation. A little more practice will make it stick.'
  return 'Keep going. Read the linked lessons and retry the quiz.'
}

function SignGraphic({ signKey }: { signKey: string }) {
  return (
    <div className="mt-4 grid h-36 w-36 place-items-center rounded-2xl border border-line bg-paper">
      <svg viewBox="0 0 100 100" className="h-[104px] w-[104px]" role="img" aria-label="Traffic sign">
        <Sign x={50} y={50} type={signKey} size={92} />
      </svg>
    </div>
  )
}

export function Quiz() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [mode, setMode] = useState<QuizMode>('mixed')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [best, setBest] = useState<BestScores>(readBest)

  const startQuiz = (nextMode: QuizMode) => {
    const quiz = buildQuiz(nextMode, 10)
    setMode(nextMode)
    setQuestions(quiz)
    setAnswers(Array(quiz.length).fill(null))
    setIndex(0)
    setSelected(null)
    setPhase('playing')
    window.scrollTo(0, 0)
  }

  const choose = (optionIndex: number) => {
    if (selected !== null) return
    setSelected(optionIndex)
    setAnswers((current) => {
      const next = [...current]
      next[index] = optionIndex
      return next
    })
  }

  const nextQuestion = () => {
    if (selected === null) return

    if (index + 1 >= questions.length) {
      const finalAnswers = [...answers]
      finalAnswers[index] = selected
      const correct = questions.reduce(
        (total, question, questionIndex) =>
          total + (finalAnswers[questionIndex] === question.correctIndex ? 1 : 0),
        0,
      )
      const percent = Math.round((correct / questions.length) * 100)
      setAnswers(finalAnswers)
      setBest((current) => {
        const previous = current[mode] ?? 0
        if (percent <= previous) return current
        const next = { ...current, [mode]: percent }
        try {
          localStorage.setItem(BEST_KEY, JSON.stringify(next))
        } catch {
          return next
        }
        return next
      })
      setPhase('result')
      window.scrollTo(0, 0)
      return
    }

    setIndex((current) => current + 1)
    setSelected(null)
    window.scrollTo(0, 0)
  }

  if (phase === 'intro') {
    return (
      <div>
        <span className="rounded-full bg-navy/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          Test yourself
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-[38px]">Driving quiz</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Ten questions per round, with instant feedback and an explanation after every answer.
          Choose a mixed round or focus on road rules or traffic signs.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modeMeta.map((item) => {
            const Icon = item.icon
            const bestScore = best[item.id]
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => startQuiz(item.id)}
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-[0_16px_35px_-24px_rgba(23,51,79,0.5)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy/8 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-3 text-[15px] font-bold text-ink">{item.title}</h2>
                <p className="mt-1 flex-1 text-[11.5px] leading-relaxed text-ink-soft">{item.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line/70 pt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
                    {bestScore === undefined ? '10 questions' : `Best ${bestScore}%`}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-navy">
                    Start
                    <Play className="h-3 w-3" />
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="flex gap-3 rounded-xl border border-line bg-card p-4">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
            <div>
              <p className="text-[12px] font-bold text-ink">10 questions</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">Short enough for a quick revision break.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl border border-line bg-card p-4">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
            <div>
              <p className="text-[12px] font-bold text-ink">Instant feedback</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">See the correct answer and why it matters.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl border border-line bg-card p-4">
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
            <div>
              <p className="text-[12px] font-bold text-ink">Linked lessons</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">Jump back to the lesson or sign reference.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
          These questions are a study aid based on the lessons and sign reference. They are not
          official exam questions. Always follow the current StVO and your driving instructor.
        </p>
      </div>
    )
  }

  if (phase === 'result') {
    const correct = questions.reduce(
      (total, question, questionIndex) =>
        total + (answers[questionIndex] === question.correctIndex ? 1 : 0),
      0,
    )
    const percent = Math.round((correct / questions.length) * 100)
    const bestScore = best[mode] ?? percent

    return (
      <div>
        <div className="rounded-2xl bg-navy p-6 text-center text-white sm:p-10">
          <Trophy className="mx-auto h-9 w-9 text-amber" />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber">
            {quizModeLabels[mode]} complete
          </p>
          <p className="mt-2 text-5xl font-black tracking-tight">{percent}%</p>
          <p className="mt-1 text-sm font-semibold text-slate-200">
            {correct} of {questions.length} correct
          </p>
          <p className="mx-auto mt-3 max-w-lg text-[12.5px] leading-relaxed text-slate-300">
            {resultMessage(percent)}
          </p>
          {bestScore !== undefined && (
            <p className="mt-3 text-[11px] font-semibold text-amber">Best for this mode: {bestScore}%</p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => startQuiz(mode)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber px-4 py-2.5 text-xs font-bold text-navy dark:text-navy-deep transition-colors hover:bg-amber/90"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Try again
            </button>
            <button
              type="button"
              onClick={() => setPhase('intro')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              Choose another quiz
            </button>
          </div>
        </div>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Review</p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-ink">Your answers</h2>
            </div>
            <Link to="/mistakes" className="text-[11px] font-semibold text-navy hover:underline">
              Top mistakes
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {questions.map((question, questionIndex) => {
              const answer = answers[questionIndex]
              const correct = answer === question.correctIndex
              const link = question.scenarioId
                ? `/scenario/${question.scenarioId}`
                : question.link
              const linkLabel = question.scenarioId ? 'Study this lesson' : question.linkLabel
              return (
                <article
                  key={question.id}
                  className={`rounded-2xl border bg-card p-4 ${correct ? 'border-forest/20' : 'border-brick/20'}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                        correct ? 'bg-forest-soft text-forest' : 'bg-brick-soft text-brick'
                      }`}
                    >
                      {questionIndex + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[12.5px] font-bold text-ink">{question.prompt}</p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-ink-soft">
                          {correct ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5 text-brick" />
                          )}
                          {correct ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <p className="mt-1 text-[11.5px] text-ink-soft">
                        Your answer: <span className="font-semibold text-ink">{answer !== null ? question.options[answer] : 'Not answered'}</span>
                      </p>
                      {!correct && (
                        <p className="mt-0.5 text-[11.5px] text-ink-soft">
                          Correct answer:{' '}
                          <span className="font-semibold text-forest">{question.options[question.correctIndex]}</span>
                        </p>
                      )}
                      <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">{question.explanation}</p>
                      {link && linkLabel && (
                        <Link
                          to={link}
                          className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-semibold text-navy hover:underline"
                        >
                          {linkLabel}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                    {question.signKey && (
                      <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-lg bg-paper sm:grid">
                        <svg viewBox="0 0 100 100" className="h-11 w-11" aria-hidden="true">
                          <Sign x={50} y={50} type={question.signKey ?? ''} size={90} />
                        </svg>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    )
  }

  const question = questions[index]
  if (!question) return null
  const answered = selected !== null
  const isCorrect = selected === question.correctIndex
  const link = question.scenarioId ? `/scenario/${question.scenarioId}` : question.link
  const linkLabel = question.scenarioId ? 'Study this lesson' : question.linkLabel

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setPhase('intro')}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft transition-colors hover:text-navy"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Exit quiz
        </button>
        <span className="text-[11px] font-bold tabular-nums text-ink-soft">
          {index + 1} / {questions.length}
        </span>
      </div>
      <div className="mt-2">
        <ProgressBar value={index + 1} total={questions.length} tone="green" />
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-card p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-navy/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-navy">
            {topicLabel(question.topic)}
          </span>
          <span className="text-[10px] font-medium text-ink-soft">{quizModeLabels[mode]}</span>
        </div>

        <h1 className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
          {question.prompt}
        </h1>

        {question.signKey && <SignGraphic signKey={question.signKey} />}
        {question.visual && (
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-paper p-2">
            <div className="mx-auto max-w-2xl">
              <QuizVisual id={question.visual} />
            </div>
          </div>
        )}

        <div className="mt-5 space-y-2">
          {question.options.map((option, optionIndex) => {
            const isTheCorrect = optionIndex === question.correctIndex
            const isSelected = optionIndex === selected
            const state = !answered
              ? 'idle'
              : isTheCorrect
                ? 'correct'
                : isSelected
                  ? 'wrong'
                  : 'muted'
            return (
              <button
                key={option}
                type="button"
                onClick={() => choose(optionIndex)}
                disabled={answered}
                className={`flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left text-[12.5px] font-medium transition-colors ${
                  state === 'idle'
                    ? 'border-line bg-card text-ink hover:border-navy/30 hover:bg-paper'
                    : state === 'correct'
                      ? 'border-forest/30 bg-forest-soft/70 text-ink'
                      : state === 'wrong'
                        ? 'border-brick/30 bg-brick-soft/70 text-ink'
                        : 'border-line bg-paper text-ink-soft/70'
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold ${
                    state === 'correct'
                      ? 'border-forest bg-forest text-white'
                      : state === 'wrong'
                        ? 'border-brick bg-brick text-white'
                        : 'border-line bg-card text-ink-soft'
                  }`}
                >
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span className="flex-1">{option}</span>
                {state === 'correct' && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />}
                {state === 'wrong' && <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-brick" />}
              </button>
            )
          })}
        </div>

        {answered && (
          <div
            className={`mt-5 rounded-xl border p-4 ${
              isCorrect ? 'border-forest/20 bg-forest-soft/60' : 'border-brick/20 bg-brick-soft/60'
            }`}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-4 w-4 text-forest" />
              ) : (
                <XCircle className="h-4 w-4 text-brick" />
              )}
              <p className={`text-[12px] font-bold ${isCorrect ? 'text-forest' : 'text-brick'}`}>
                {isCorrect ? 'Correct' : 'Not quite'}
              </p>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-ink-soft">{question.explanation}</p>
            {link && linkLabel && (
              <Link
                to={link}
                className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-semibold text-navy hover:underline"
              >
                {linkLabel}
                <ArrowRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={nextQuestion}
            disabled={!answered}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors ${
              answered
                ? 'bg-navy text-white hover:bg-navy-deep'
                : 'cursor-not-allowed bg-line text-ink-soft/60'
            }`}
          >
            {index + 1 >= questions.length ? 'See results' : 'Next question'}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
