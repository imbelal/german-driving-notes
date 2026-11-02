import {
  ArrowLeftRight,
  CarFront,
  CornerUpLeft,
  CornerUpRight,
  FastForward,
  GitFork,
  Milestone,
  RefreshCw,
  ShieldCheck,
  SquareParking,
  TriangleAlert,
  Undo2,
  type LucideIcon,
} from 'lucide-react'
import type { CategoryId } from '../content/types'

export const categoryIcons: Record<CategoryId, LucideIcon> = {
  basics: CarFront,
  'lane-changes': ArrowLeftRight,
  junctions: GitFork,
  'left-turns': CornerUpLeft,
  'right-turns': CornerUpRight,
  'u-turns': Undo2,
  roundabouts: RefreshCw,
  autobahn: Milestone,
  overtaking: FastForward,
  emergency: TriangleAlert,
  parking: SquareParking,
  safety: ShieldCheck,
}
