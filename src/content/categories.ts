import type { Category, CategoryId } from './types'

export const categories: Category[] = [
  {
    id: 'basics',
    title: 'Driving Basics',
    shortTitle: 'Basics',
    description: 'Seating, mirrors, blind spots and holding a safe lane position.',
  },
  {
    id: 'lane-changes',
    title: 'Lane Changes',
    shortTitle: 'Lane changes',
    description: 'Mirror–signal–shoulder check routines for urban roads and the Autobahn.',
  },
  {
    id: 'junctions',
    title: 'Junctions & Priority',
    shortTitle: 'Junctions',
    description: 'Right-before-left, priority roads, yield and stop signs, and blocked junctions.',
  },
  {
    id: 'left-turns',
    title: 'Left Turns',
    shortTitle: 'Left turns',
    description: 'Turning across oncoming traffic, protected arrows and one-way streets.',
  },
  {
    id: 'right-turns',
    title: 'Right Turns',
    shortTitle: 'Right turns',
    description: 'The right hook, cyclists, pedestrians and turning on a green arrow.',
  },
  {
    id: 'u-turns',
    title: 'U-Turns & Turning Around',
    shortTitle: 'U-turns',
    description: 'Where turning is legal, and how to perform a safe three-point turn.',
  },
  {
    id: 'roundabouts',
    title: 'Roundabouts',
    shortTitle: 'Roundabouts',
    description: 'Entering, signalling and leaving single and multi-lane roundabouts.',
  },
  {
    id: 'autobahn',
    title: 'Autobahn',
    shortTitle: 'Autobahn',
    description: 'Acceleration lanes, exits, lane discipline and the Rettungsgasse.',
  },
  {
    id: 'overtaking',
    title: 'Overtaking',
    shortTitle: 'Overtaking',
    description: 'Safe overtaking, no-overtaking zones, cyclists and trams.',
  },
  {
    id: 'emergency',
    title: 'Emergencies',
    shortTitle: 'Emergencies',
    description: 'Emergency braking with ABS, breakdowns and securing the scene.',
  },
  {
    id: 'parking',
    title: 'Parking',
    shortTitle: 'Parking',
    description: 'Parallel parking, hill parking and where stopping is forbidden.',
  },
  {
    id: 'safety',
    title: 'Safety & Special Traffic',
    shortTitle: 'Safety',
    description: 'School buses, winter conditions and vulnerable road users.',
  },
]

export const categoryMap: Record<CategoryId, Category> = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<CategoryId, Category>
