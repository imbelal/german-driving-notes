import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'german-driving-notes-progress-v1'

interface ProgressContextValue {
  done: string[]
  count: number
  isDone: (id: string) => boolean
  toggle: (id: string) => void
  reset: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

function readStored(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState<string[]>(readStored)

  const persist = useCallback((next: string[]) => {
    setDone(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      return
    }
  }, [])

  const toggle = useCallback(
    (id: string) => {
      persist(done.includes(id) ? done.filter((item) => item !== id) : [...done, id])
    },
    [done, persist],
  )

  const isDone = useCallback((id: string) => done.includes(id), [done])

  const reset = useCallback(() => persist([]), [persist])

  const value = useMemo<ProgressContextValue>(
    () => ({ done, count: done.length, isDone, toggle, reset }),
    [done, isDone, toggle, reset],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}

export function useChecklistState(storageKey: string) {
  const [checked, setChecked] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return []
      const parsed: unknown = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
    } catch {
      return []
    }
  })

  const toggle = (item: string) => {
    const next = checked.includes(item) ? checked.filter((entry) => entry !== item) : [...checked, item]
    setChecked(next)
    try {
      localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      return
    }
  }

  const reset = () => {
    setChecked([])
    try {
      localStorage.removeItem(storageKey)
    } catch {
      return
    }
  }

  return { checked, toggle, reset }
}
