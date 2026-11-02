import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export function InstallAppButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setInstallEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (installed || !installEvent) return null

  const install = async () => {
    await installEvent.prompt()
    const choice = await installEvent.userChoice
    if (choice.outcome === 'accepted') setInstalled(true)
    setInstallEvent(null)
  }

  return (
    <button
      type="button"
      onClick={install}
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-[10px] font-semibold text-ink transition-colors hover:border-navy/25 hover:text-navy"
    >
      <Download className="h-3.5 w-3.5" />
      Install app
    </button>
  )
}
