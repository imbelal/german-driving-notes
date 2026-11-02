import type { CategoryId, Scenario } from '../types'
import { basicsScenarios } from './basics'
import { junctionScenarios } from './junctions'
import { manoeuvreScenarios } from './manoeuvres'

export const scenarios: Scenario[] = [
  ...basicsScenarios,
  ...junctionScenarios,
  ...manoeuvreScenarios,
]

export const scenarioMap = Object.fromEntries(
  scenarios.map((scenario) => [scenario.id, scenario]),
) as Record<string, Scenario>

export function scenariosByCategory(category: CategoryId): Scenario[] {
  return scenarios.filter((scenario) => scenario.category === category)
}

export function countByCategory(category: CategoryId): number {
  return scenarios.filter((scenario) => scenario.category === category).length
}

export function relatedScenarios(scenario: Scenario, limit = 3): Scenario[] {
  const sameCategory = scenarios.filter(
    (item) => item.category === scenario.category && item.id !== scenario.id,
  )
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  const tagMatches = scenarios.filter(
    (item) =>
      item.id !== scenario.id &&
      !sameCategory.includes(item) &&
      item.tags?.some((tag) => scenario.tags?.includes(tag)),
  )

  return [...sameCategory, ...tagMatches].slice(0, limit)
}
