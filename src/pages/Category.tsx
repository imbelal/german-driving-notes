import { ArrowLeft, Search } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoryMap, categories } from '../content/categories'
import { scenariosByCategory } from '../content/scenarios'
import type { CategoryId } from '../content/types'
import { useProgress } from '../hooks/useProgress'
import { categoryIcons } from '../components/categoryIcons'
import { ProgressBar } from '../components/ProgressBar'
import { ScenarioCard } from '../components/ScenarioCard'

export function Category() {
  const { id } = useParams<{ id: string }>()
  const category = id ? categoryMap[id as CategoryId] : undefined
  const [query, setQuery] = useState('')
  const { isDone } = useProgress()

  if (!category) {
    return (
      <div className="rounded-2xl border border-line bg-card p-10 text-center">
        <h1 className="text-xl font-bold">Category not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm font-semibold text-navy hover:underline">
          Back to overview
        </Link>
      </div>
    )
  }

  const Icon = categoryIcons[category.id]
  const lessons = scenariosByCategory(category.id)
  const filtered = lessons.filter((scenario) => {
    const haystack = [scenario.title, scenario.germanTerm ?? '', scenario.summary, ...(scenario.tags ?? [])]
      .join(' ')
      .toLowerCase()
    return haystack.includes(query.trim().toLowerCase())
  })
  const completed = lessons.filter((scenario) => isDone(scenario.id)).length

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft transition-colors hover:text-navy"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Overview
      </Link>

      <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-white">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">Category</p>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-ink">{category.title}</h1>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-ink-soft">{category.description}</p>
          </div>
        </div>
        <div className="w-full sm:w-48">
          <div className="mb-1.5 flex justify-between text-[10px] font-semibold text-ink-soft">
            <span>Progress</span>
            <span>{completed} / {lessons.length}</span>
          </div>
          <ProgressBar value={completed} total={lessons.length} />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={`/category/${item.id}`}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                item.id === category.id
                  ? 'border-navy bg-navy text-white'
                  : 'border-line bg-card text-ink-soft hover:border-navy/30 hover:text-ink'
              }`}
            >
              {item.shortTitle}
            </Link>
          ))}
        </div>
        <label className="relative block w-full sm:w-56">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter this category…"
            className="w-full rounded-xl border border-line bg-card py-2 pl-9 pr-3 text-xs text-ink placeholder:text-ink-soft/70 focus:border-navy/40 focus:outline-none"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-line bg-card p-8 text-center text-sm text-ink-soft">
          No lessons match “{query}”.
        </p>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {filtered.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}
    </div>
  )
}
