export const VOICE_STORAGE_KEY = 'gdn-german-voice-v1'

export function getGermanVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return []
  return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith('de'))
}

function germanVoiceScore(voice: SpeechSynthesisVoice) {
  const lang = voice.lang.toLowerCase()
  let score = 0
  if (lang === 'de-de') score += 60
  else if (lang === 'de-at' || lang === 'de-ch') score += 40
  else if (lang.startsWith('de')) score += 20
  if (/google/i.test(voice.name)) score += 50
  if (/microsoft/i.test(voice.name)) score += 35
  if (/natural|neural|premium|enhanced|siri/i.test(voice.name)) score += 25
  if (!voice.localService) score += 10
  return score
}

export function pickBestGermanVoice(voices: SpeechSynthesisVoice[]) {
  return [...voices].sort((a, b) => germanVoiceScore(b) - germanVoiceScore(a))[0]
}

export function speakGerman(text: string, voice: SpeechSynthesisVoice | null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'de-DE'
  utterance.rate = 0.85
  utterance.pitch = 1
  utterance.volume = 1
  const liveVoices = getGermanVoices()
  const chosenVoice = voice ?? pickBestGermanVoice(liveVoices)
  if (chosenVoice) utterance.voice = chosenVoice
  window.speechSynthesis.speak(utterance)
}
