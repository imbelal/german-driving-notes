import { ArrowRight, Info, Languages, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SpeakButton } from '../components/SpeakButton'
import { VoiceControl } from '../components/VoiceControl'
import { survivalPhrases, vocabSections } from '../content/vocabulary'
import type { VocabEntry } from '../content/vocabulary'
import { useGermanVoice } from '../hooks/useGermanVoice'

function EntryRow({ entry, voice }: { entry: VocabEntry; voice: SpeechSynthesisVoice | null }) {
  return (
    <li className="flex items-start justify-between gap-3 rounded-xl bg-paper px-3.5 py-3">
      <div className="min-w-0">
        <p className="text-[13px] font-bold leading-snug text-ink">{entry.de}</p>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{entry.en}</p>
        {entry.note && <p className="mt-1 text-[10.5px] leading-relaxed text-ink-soft/80">{entry.note}</p>}
      </div>
      <SpeakButton text={entry.speakAs ?? entry.de} voice={voice} />
    </li>
  )
}

export function Vocabulary() {
  const [query, setQuery] = useState('')
  const [activeSection, setActiveSection] = useState('all')
  const { voices: germanVoices, voicesReady, voiceName, setVoiceName, selectedVoice } = useGermanVoice()

  const search = query.trim().toLowerCase()
  const visibleSections = vocabSections
    .filter((section) => activeSection === 'all' || section.id === activeSection)
    .map((section) => ({
      ...section,
      entries: section.entries.filter((entry) =>
        [entry.de, entry.en, entry.note ?? ''].join(' ').toLowerCase().includes(search),
      ),
    }))
    .filter((section) => section.entries.length > 0)

  const totalPhrases = vocabSections.reduce((total, section) => total + section.entries.length, 0)
  const visiblePhrases = visibleSections.reduce((total, section) => total + section.entries.length, 0)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          <Languages className="h-3 w-3" />
          Language guide
        </span>
        <span className="text-[11px] font-medium text-ink-soft">Practical exam phrases in German</span>
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-[38px]">
        German exam vocabulary
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
        The practical driving test is normally conducted in German, but the examiner’s instructions
        are short and repeat often. Learn the direction words and verbs first, then practise the
        phrases until they sound familiar.
      </p>

      <section className="mt-6 overflow-hidden rounded-2xl bg-navy text-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber">If you do not understand</p>
            <h2 className="mt-0.5 text-[15px] font-bold">Ask before you act</h2>
          </div>
          <VoiceControl
            voices={germanVoices}
            voiceName={voiceName}
            onChange={setVoiceName}
            selectedVoice={selectedVoice}
            ready={voicesReady}
            tone="navy"
          />
        </div>
        <div className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {survivalPhrases.map((phrase) => (
            <div key={phrase.de} className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <div>
                <p className="text-[12px] font-bold text-white">{phrase.de}</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-300">{phrase.en}</p>
              </div>
              <SpeakButton text={phrase.de} tone="navy" voice={selectedVoice} />
            </div>
          ))}
        </div>
      </section>

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
          {vocabSections.map((section) => (
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
            placeholder="Search phrases…"
            className="w-full rounded-xl border border-line bg-card py-2 pl-9 pr-3 text-xs text-ink placeholder:text-ink-soft/70 focus:border-navy/40 focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-3 text-[10.5px] font-medium text-ink-soft">
        {visiblePhrases} of {totalPhrases} phrases
      </p>

      {visibleSections.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-line bg-card p-8 text-center">
          <p className="text-sm font-semibold text-ink">No phrases match “{query}”.</p>
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
        <div className="mt-4 space-y-6">
          {visibleSections.map((section) => (
            <section key={section.id}>
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-ink">{section.title}</h2>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-soft">{section.description}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft/80">
                  {section.entries.length} phrases
                </span>
              </div>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {section.entries.map((entry) => (
                  <EntryRow key={entry.de} entry={entry} voice={selectedVoice} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-3 rounded-2xl border border-line bg-card p-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
          <div>
            <h2 className="text-sm font-bold text-ink">Listen for the verb</h2>
            <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">
              The action usually comes from words like <span className="font-semibold text-ink">abbiegen</span>,
              <span className="font-semibold text-ink"> anhalten</span>, <span className="font-semibold text-ink">einparken</span> or
              <span className="font-semibold text-ink"> wenden</span>. The direction word tells you where.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-2xl border border-line bg-card p-5">
          <Languages className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <div>
            <h2 className="text-sm font-bold text-ink">Practise out loud</h2>
            <p className="mt-1 text-[11.5px] leading-relaxed text-ink-soft">
              Pick the best German voice above; quality depends on the voices installed on your
              device. Pronunciation is only a study aid, so repeat the phrases with your instructor
              and ask them to use the same wording as an examiner.
            </p>
            <Link to="/quiz" className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-semibold text-navy hover:underline">
              Test your knowledge
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-6 rounded-2xl border border-amber/30 bg-amber-soft/60 px-4 py-3 text-[11.5px] leading-relaxed text-ink-soft">
        Examiners may repeat or rephrase an instruction, but the practical test is generally in
        German. If you do not understand, ask politely before acting. Never guess in a way that
        could endanger other road users.
      </p>
    </div>
  )
}
