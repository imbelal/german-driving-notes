import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`grid h-9 w-9 place-items-center rounded-lg border border-line bg-card text-ink-soft transition-colors hover:bg-paper hover:text-ink ${className}`}
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}
