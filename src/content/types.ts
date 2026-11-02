export type CategoryId =
  | 'basics'
  | 'lane-changes'
  | 'junctions'
  | 'left-turns'
  | 'right-turns'
  | 'u-turns'
  | 'roundabouts'
  | 'autobahn'
  | 'overtaking'
  | 'emergency'
  | 'parking'
  | 'safety'

export interface ScenarioStep {
  title: string
  detail: string
  marker?: number
}

export interface Scenario {
  id: string
  category: CategoryId
  title: string
  germanTerm?: string
  summary: string
  keyRule: string
  steps: ScenarioStep[]
  mistakes: string[]
  examTips: string[]
  rules?: string[]
  tags?: string[]
  diagram: string
  difficulty: 1 | 2 | 3
}

export interface Category {
  id: CategoryId
  title: string
  shortTitle: string
  description: string
}

export interface SignEntry {
  id: string
  name: string
  german: string
  meaning: string
  key: string
  group: 'Priority' | 'Prohibition' | 'Mandatory' | 'Speed' | 'Information' | 'Warning'
}

export interface Checklist {
  id: string
  title: string
  description: string
  items: string[]
}
