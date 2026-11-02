import { Volume2 } from 'lucide-react'
import { speakGerman } from '../lib/speech'

export function SpeakButton({
  text,
  tone = 'light',
  voice,
}: {
  text: string
  tone?: 'light' | 'navy'
  voice: SpeechSynthesisVoice | null
}) {
  return (
    <button
      type="button"
      onClick={() => speakGerman(text, voice)}
      aria-label={`Listen to: ${text}`}
      title="Listen in German"
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors ${
        tone === 'navy'
          ? 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
          : 'border-line bg-card text-ink-soft hover:border-navy/25 hover:text-navy'
      }`}
    >
      <Volume2 className="h-3.5 w-3.5" />
    </button>
  )
}
