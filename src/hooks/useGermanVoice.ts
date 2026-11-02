import { useEffect, useState } from 'react'
import { getGermanVoices, pickBestGermanVoice, VOICE_STORAGE_KEY } from '../lib/speech'

export function useGermanVoice() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceName, setVoiceName] = useState(() => {
    try {
      return localStorage.getItem(VOICE_STORAGE_KEY) ?? ''
    } catch {
      return ''
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const loadVoices = () => {
      const germanVoices = getGermanVoices()
      setVoices(germanVoices)
      if (germanVoices.length > 0) {
        setVoiceName((current) => {
          if (current && germanVoices.some((voice) => voice.name === current)) return current
          return pickBestGermanVoice(germanVoices)?.name ?? ''
        })
      }
    }
    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [])

  useEffect(() => {
    if (!voiceName) return
    try {
      localStorage.setItem(VOICE_STORAGE_KEY, voiceName)
    } catch {
      return
    }
  }, [voiceName])

  const selectedVoice = voices.find((voice) => voice.name === voiceName) ?? pickBestGermanVoice(voices) ?? null

  return { voices, voiceName, setVoiceName, selectedVoice }
}
