import { speakGerman } from '../lib/speech'

export function VoiceControl({
  voices,
  voiceName,
  onChange,
  selectedVoice,
  tone = 'light',
  sample = 'Guten Tag. Bitte fahren Sie geradeaus.',
}: {
  voices: SpeechSynthesisVoice[]
  voiceName: string
  onChange: (name: string) => void
  selectedVoice: SpeechSynthesisVoice | null
  tone?: 'light' | 'navy'
  sample?: string
}) {
  const isNavy = tone === 'navy'
  return (
    <div className="flex flex-wrap items-center gap-2">
      {voices.length > 0 ? (
        <>
          <label className={`flex items-center gap-1.5 text-[10px] font-semibold ${isNavy ? 'text-slate-400' : 'text-ink-soft'}`}>
            Voice
            <select
              value={voiceName}
              onChange={(event) => onChange(event.target.value)}
              className={`rounded-lg border px-2 py-1 text-[10px] font-medium focus:outline-none ${
                isNavy
                  ? 'border-white/15 bg-white/10 text-white'
                  : 'border-line bg-white text-ink'
              }`}
            >
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name} className="text-ink">
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => speakGerman(sample, selectedVoice)}
            className={`rounded-lg border px-2 py-1 text-[10px] font-semibold transition-colors ${
              isNavy
                ? 'border-white/15 bg-white/10 text-white hover:bg-white/15'
                : 'border-line bg-white text-ink-soft hover:border-navy/25 hover:text-navy'
            }`}
          >
            Test voice
          </button>
        </>
      ) : (
        <span className={`text-[10px] font-medium ${isNavy ? 'text-amber' : 'text-brick'}`}>
          No German voice detected — enable one in your system settings
        </span>
      )}
    </div>
  )
}
