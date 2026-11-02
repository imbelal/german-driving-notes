import { ArrowRight, Info, Search, Wrench } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SpeakButton } from '../components/SpeakButton'
import { VoiceControl } from '../components/VoiceControl'
import { technicalSections } from '../content/technicalQuestions'
import { useGermanVoice } from '../hooks/useGermanVoice'

export function TechnicalQuestions() {
  const [query, setQuery] = useState('')
  const [activeSection, setActiveSection] = useState('all')
  const { voices, voicesReady, voiceName, setVoiceName, selectedVoice } = useGermanVoice()

  const search = query.trim().toLowerCase()
  const visibleSections = technicalSections
    .filter((section) => activeSection === 'all' || section.id === activeSection)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        [item.questionDe, item.questionEn, item.answerDe, item.answerEn].join(' ').toLowerCase().includes(search),
      ),
    }))
    .filter((section) => section.items.length > 0)

  const totalQuestions = technicalSections.reduce((total, section) => total + section.items.length, 0)
  const visibleQuestions = visibleSections.reduce((total, section) => total + section.items.length, 0)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          <Wrench className="h-3 w-3" />
          Exam day
        </span>
        <span className="text-[11px] font-medium text-ink-soft">Technical questions from the practical test</span>
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-[38px]">
        Technical questions in the practical test
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
        Before or during the drive, the examiner may ask you to show or explain something on the car.
        These are common questions, with a German model answer and an English translation. Point to
        the part, explain what you are checking and mention the safe action.
      </p>

      <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-line bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">Question voice</p>
          <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">
            Listen to the German question and answer with the best German voice on your device.
          </p>
        </div>
        <VoiceControl
          voices={voices}
          voiceName={voiceName}
          onChange={setVoiceName}
          selectedVoice={selectedVoice}
          ready={voicesReady}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveSection('all')}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
              activeSection === 'all'
                ? 'border-navy bg-navy text-white'
                : 'border-line bg-card text-ink-soft hover:border-navy/30 hover:text-ink'
            }`}
          >
            All
          </button>
          {technicalSections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                activeSection === section.id
                  ? 'border-navy bg-navy text-white'
                  : 'border-line bg-card text-ink-soft hover:border-navy/30 hover:text-ink'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions…"
            className="w-full rounded-xl border border-line bg-card py-2 pl-9 pr-3 text-xs text-ink placeholder:text-ink-soft/70 focus:border-navy/40 focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-3 text-[10.5px] font-medium text-ink-soft">
        {visibleQuestions} of {totalQuestions} questions
      </p>

      {visibleSections.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-line bg-card p-8 text-center">
          <p className="text-sm font-semibold text-ink">No questions match “{query}”.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setActiveSection('all')
            }}
            className="mt-3 text-[11px] font-semibold text-navy hover:underline"
          >
            Clear search and filter
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-8">
          {visibleSections.map((section) => (
            <section key={section.id}>
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-ink">{section.title}</h2>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{section.description}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft/80">
                  {section.items.length} questions
                </span>
              </div>

              <div className="mt-3 grid gap-4 lg:grid-cols-2">
                {section.items.map((item) => (
                  <article key={item.id} className="print-card flex flex-col rounded-2xl border border-line bg-card p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                            item.kind === 'show'
                              ? 'bg-navy/8 text-navy'
                              : 'bg-amber-soft text-navy'
                          }`}
                        >
                          {item.kind === 'show' ? 'Show me' : 'Tell me'}
                        </span>
                        <h3 className="mt-2 text-[14px] font-bold leading-snug text-ink">{item.questionDe}</h3>
                        <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{item.questionEn}</p>
                      </div>
                      <SpeakButton text={item.questionDe} voice={selectedVoice} />
                    </div>

                    <div className="mt-3 flex-1 rounded-xl bg-paper p-3.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink-soft">Model answer</p>
                          <p className="mt-1 text-[12px] font-semibold leading-relaxed text-ink">{item.answerDe}</p>
                          <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-soft">{item.answerEn}</p>
                        </div>
                        <SpeakButton text={item.answerDe} voice={selectedVoice} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex gap-3 rounded-2xl border border-line bg-card p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
          <div>
            <h2 className="text-[12px] font-bold text-ink">Show me</h2>
            <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
              Operate or point to the part. Explain what you are checking.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl border border-line bg-card p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <div>
            <h2 className="text-[12px] font-bold text-ink">Tell me</h2>
            <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
              Explain the check and the safe action, not just the name of the part.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl border border-line bg-card p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
          <div>
            <h2 className="text-[12px] font-bold text-ink">If you are unsure</h2>
            <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
              Say so, then explain what you would check and which safe action you would take.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
        <p className="text-[11.5px] leading-relaxed text-ink-soft">
          Need the examiner’s German instructions and survival phrases?
        </p>
        <Link
          to="/vocabulary"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-navy hover:underline"
        >
          Open exam vocabulary
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <p className="mt-5 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
        Examiners may word these questions differently. These are common study answers, not official
        wording. Always follow your vehicle handbook, your instructor’s guidance and the current
        traffic rules.
      </p>
    </div>
  )
}
