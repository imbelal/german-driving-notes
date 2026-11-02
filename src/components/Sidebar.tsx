import {
  BookOpenCheck,
  ChevronRight,
  Home,
  ListChecks,
  Scale,
  Search,
  Signpost,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { categories } from '../content/categories'
import { scenarios } from '../content/scenarios'
import type { CategoryId } from '../content/types'
import { useProgress } from '../hooks/useProgress'
import { categoryIcons } from './categoryIcons'
import { ProgressBar } from './ProgressBar'

const linkBase =
  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors'

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const { count } = useProgress()
  const navigate = useNavigate()

  const results =
    query.trim().length > 0
      ? scenarios
          .filter((scenario) => {
            const haystack = [
              scenario.title,
              scenario.germanTerm ?? '',
              scenario.summary,
              ...(scenario.tags ?? []),
            ]
              .join(' ')
              .toLowerCase()
            return haystack.includes(query.trim().toLowerCase())
          })
          .slice(0, 7)
      : []

  const goTo = (id: string) => {
    setQuery('')
    onClose()
    navigate(`/scenario/${id}`)
  }

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-navy-deep/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[292px] flex-col border-r border-line bg-card transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 pb-4 pt-6">
          <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-amber shadow-sm">
              <BookOpenCheck className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-ink">
                German Driving Notes
              </span>
              <span className="block text-[11px] font-medium text-ink-soft">
                Fahrschule companion
              </span>
            </span>
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-paper lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search rules and turns…"
              className="w-full rounded-xl border border-line bg-paper py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-soft/70 focus:border-navy/40 focus:bg-white focus:outline-none"
            />
          </label>
          {query.trim().length > 0 && (
            <div className="mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-lg">
              {results.length === 0 ? (
                <p className="px-3 py-3 text-xs text-ink-soft">No lessons found.</p>
              ) : (
                results.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => goTo(scenario.id)}
                    className="block w-full border-b border-line/70 px-3 py-2.5 text-left text-xs font-medium text-ink transition-colors last:border-0 hover:bg-paper"
                  >
                    {scenario.title}
                    <span className="mt-0.5 block text-[10px] font-normal text-ink-soft">
                      {scenario.germanTerm}
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-4 pb-6">
          <div className="space-y-1">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-navy text-white' : 'text-ink hover:bg-paper'}`
              }
            >
              <Home className="h-4 w-4 shrink-0" />
              Overview
            </NavLink>
          </div>

          <p className="px-3 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft/80">
            Categories
          </p>
          <div className="space-y-0.5">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id]
              const total = scenarios.filter((scenario) => scenario.category === category.id).length
              return (
                <NavLink
                  key={category.id}
                  to={`/category/${category.id}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `${linkBase} group justify-between ${
                      isActive ? 'bg-navy text-white' : 'text-ink-soft hover:bg-paper hover:text-ink'
                    }`
                  }
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{category.shortTitle}</span>
                  </span>
                  <span className="rounded-md bg-black/5 px-1.5 py-0.5 text-[10px] font-bold tabular-nums group-hover:bg-black/5">
                    {total}
                  </span>
                </NavLink>
              )
            })}
          </div>

          <p className="px-3 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft/80">
            Reference
          </p>
          <div className="space-y-0.5">
            <NavLink
              to="/checklists"
              onClick={onClose}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-navy text-white' : 'text-ink-soft hover:bg-paper hover:text-ink'}`
              }
            >
              <ListChecks className="h-4 w-4" />
              Checklists
            </NavLink>
            <NavLink
              to="/signs"
              onClick={onClose}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-navy text-white' : 'text-ink-soft hover:bg-paper hover:text-ink'}`
              }
            >
              <Signpost className="h-4 w-4" />
              Traffic signs
            </NavLink>
            <NavLink
              to="/rules"
              onClick={onClose}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-navy text-white' : 'text-ink-soft hover:bg-paper hover:text-ink'}`
              }
            >
              <Scale className="h-4 w-4" />
              Rules & numbers
            </NavLink>
          </div>
        </nav>

        <div className="border-t border-line px-5 py-4">
          <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-ink-soft">
            <span>Your progress</span>
            <span>{count} of {scenarios.length}</span>
          </div>
          <ProgressBar value={count} total={scenarios.length} />
          <p className="mt-3 text-[10px] leading-relaxed text-ink-soft/80">
            Study aid only. Always follow current StVO rules and your driving instructor.
          </p>
        </div>
      </aside>
    </>
  )
}

export function MobileHeader({ onOpen }: { onOpen: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-paper/95 px-4 py-3 backdrop-blur lg:hidden">
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2 text-xs font-semibold text-ink"
      >
        <ChevronRight className="h-4 w-4 rotate-180" />
        Menu
      </button>
      <span className="text-xs font-bold tracking-tight text-ink">German Driving Notes</span>
      <span className="w-16" />
    </header>
  )
}

export function CategoryBadge({ categoryId }: { categoryId: CategoryId }) {
  const category = categories.find((item) => item.id === categoryId)
  const Icon = categoryIcons[categoryId]
  if (!category) return null
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/8 px-2.5 py-1 text-[11px] font-semibold text-navy">
      <Icon className="h-3.5 w-3.5" />
      {category.shortTitle}
    </span>
  )
}
