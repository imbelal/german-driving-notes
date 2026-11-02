export interface StepThroughStep {
  title: string
  detail: string
}

export interface StepThroughLesson {
  scenarioId: string
  title: string
  description: string
  visual: string
  steps: StepThroughStep[]
}

export const stepThroughs: StepThroughLesson[] = [
  {
    scenarioId: 'left-turn-oncoming',
    title: 'Step through the left turn',
    description: 'Watch the approach, the wait and the turn across oncoming traffic.',
    visual: 'left-turn',
    steps: [
      {
        title: 'Approach and signal',
        detail: 'Move into the left-turn position, indicate early and begin looking for a gap in the oncoming traffic.',
      },
      {
        title: 'Wait at the junction',
        detail: 'If oncoming traffic is close, wait before the junction. Do not force the turn.',
      },
      {
        title: 'Turn when clear',
        detail: 'When the oncoming vehicle has passed, turn into the nearest lane of the road you are entering.',
      },
      {
        title: 'Straighten and check',
        detail: 'Unwind the steering, check the exit for cyclists and pedestrians, then accelerate gently.',
      },
    ],
  },
  {
    scenarioId: 'left-turn-island',
    title: 'Step through the island left turn',
    description: 'See how the raised island separates the lanes without giving you priority.',
    visual: 'left-island',
    steps: [
      {
        title: 'Approach in the correct lane',
        detail: 'Use the left-turn lane next to the island. Do not move into the oncoming lane.',
      },
      {
        title: 'Wait for the gap',
        detail: 'The island does not grant priority. Wait until the oncoming traffic has passed.',
      },
      {
        title: 'Turn around the island',
        detail: 'Keep the island on your left and turn into the nearest lane without cutting across it.',
      },
      {
        title: 'Exit and check',
        detail: 'Check for cyclists and pedestrians as you complete the turn and straighten the car.',
      },
    ],
  },
  {
    scenarioId: 'autobahn-merge',
    title: 'Step through the Autobahn merge',
    description: 'Use the acceleration lane, match speed and merge into a safe gap.',
    visual: 'merge',
    steps: [
      {
        title: 'Build speed',
        detail: 'Use the whole acceleration lane to match the speed of traffic on the Autobahn.',
      },
      {
        title: 'Observe and signal',
        detail: 'Check the mirrors, indicate left and turn your head to clear the blind spot.',
      },
      {
        title: 'Find a gap',
        detail: 'Adjust your speed to a gap that lets you merge without forcing anyone to brake.',
      },
      {
        title: 'Merge and settle',
        detail: 'Move into the right lane smoothly, cancel the indicator and keep a safe following distance.',
      },
    ],
  },
  {
    scenarioId: 'roundabout-entering',
    title: 'Step through the roundabout',
    description: 'Approach, yield to the circle, enter to the right and signal for your exit.',
    visual: 'roundabout',
    steps: [
      {
        title: 'Approach and look left',
        detail: 'Slow down and look into the circle. Traffic already circulating has priority.',
      },
      {
        title: 'Yield and enter',
        detail: 'When there is a safe gap, enter to the right without signalling left.',
      },
      {
        title: 'Stay in the circle',
        detail: 'Keep your lane and watch the vehicle beside you. Do not stop inside the roundabout.',
      },
      {
        title: 'Signal right',
        detail: 'Indicate right after the exit before yours and check the right mirror for cyclists.',
      },
      {
        title: 'Exit smoothly',
        detail: 'Leave the circle, cancel the indicator and adjust to the road you have entered.',
      },
    ],
  },
  {
    scenarioId: 'parallel-parking',
    title: 'Step through parallel parking',
    description: 'Stop alongside the front car, reverse at an angle, then straighten into the space.',
    visual: 'parking',
    steps: [
      {
        title: 'Check the space',
        detail: 'Choose a space longer than the car, check the mirrors and signal right.',
      },
      {
        title: 'Stop alongside',
        detail: 'Stop parallel to the car in front, about half a metre away, then select reverse.',
      },
      {
        title: 'Reverse at an angle',
        detail: 'Check all around and reverse with full right lock until the car is at about 45 degrees.',
      },
      {
        title: 'Straighten',
        detail: 'Turn the wheel left and continue reversing, watching the right mirror and the front corner.',
      },
      {
        title: 'Secure the car',
        detail: 'Stop close to the kerb without touching it, apply the parking brake and select the correct gear.',
      },
    ],
  },
]

export const stepThroughMap = Object.fromEntries(
  stepThroughs.map((lesson) => [lesson.scenarioId, lesson]),
) as Record<string, StepThroughLesson>
