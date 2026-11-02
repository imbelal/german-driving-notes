export type MistakeSeverity = 'instant' | 'serious' | 'pattern'

export interface DrivingMistake {
  id: string
  rank: number
  title: string
  german: string
  severity: MistakeSeverity
  summary: string
  why: string
  fixes: string[]
  related: string[]
}

export const severityLabels: Record<MistakeSeverity, string> = {
  instant: 'Can be an instant fail',
  serious: 'Serious fault',
  pattern: 'Pattern fault',
}

export const drivingMistakes: DrivingMistake[] = [
  {
    id: 'shoulder-check',
    rank: 1,
    title: 'Missing or late shoulder check',
    german: 'Schulterblick fehlt',
    severity: 'serious',
    summary:
      'Mirrors alone never show the blind spot. Cyclists, e-scooters and motorcycles can sit exactly where you are about to move.',
    why: 'Examiners must see a deliberate head turn before turning, changing lane, pulling out or opening a door. Repeated misses fail the test, and one miss with a cyclist beside you can be treated as a serious fault.',
    fixes: [
      'Use the same routine: interior mirror → side mirror → indicate → shoulder check → move.',
      'Turn your head about 90 degrees for a clear one-second look, then look ahead again.',
      'Make it slightly more visible in the test than in normal driving.',
    ],
    related: ['mirrors-blind-spot', 'right-turn-cyclist', 'lane-change-basic'],
  },
  {
    id: 'right-before-left',
    rank: 2,
    title: 'Ignoring right before left',
    german: 'Rechts vor Links missachtet',
    severity: 'instant',
    summary:
      'At unsigned junctions, traffic from the right has priority. Learners often assume the wider or busier road is automatically the main road.',
    why: 'Right-of-way mistakes are one of the most common practical-test failures. If another road user is affected or your instructor has to intervene, the test can end immediately.',
    fixes: [
      'Look for the absence of signs, lights and markings — that is when right-before-left applies.',
      'Slow down early and look right first, then left, then ahead.',
      'If you are unsure, wait. Do not wave another driver through when you have priority.',
    ],
    related: ['right-before-left', 't-junction', 'priority-road'],
  },
  {
    id: 'too-far-right',
    rank: 3,
    title: 'Driving too far right',
    german: 'Zu weit rechts fahren',
    severity: 'pattern',
    summary:
      'Hugging the kerb leaves no room for cyclists, parked cars, drains or opening doors. It is a common test fault and a real crash risk in town.',
    why: 'The examiner sees poor lane control and a lack of anticipation. You may clip the kerb, hit a parked car or force a cyclist into the road.',
    fixes: [
      'Look far ahead and keep the car centred in its lane, not pressed against the edge.',
      'Leave about 1 m to parked cars and at least 1.5 m to cyclists in town, 2 m outside built-up areas.',
      'On narrow roads, slow down instead of squeezing past.',
    ],
    related: ['lane-position', 'overtaking-cyclist', 'mirrors-blind-spot'],
  },
  {
    id: 'rechtsfahrgebot',
    rank: 4,
    title: 'Not keeping right',
    german: 'Rechtsfahrgebot ignoriert',
    severity: 'serious',
    summary:
      'Sitting in the middle or left lane when the right lane is free blocks faster traffic and forces risky overtaking on the right.',
    why: 'It is a basic rule on multi-lane roads and the Autobahn. Poor lane discipline is marked in the test and creates dangerous speed differences.',
    fixes: [
      'Use the right lane unless you are overtaking, turning left or traffic density requires otherwise.',
      'Return to the right lane after overtaking once there is a safe gap.',
      'On the Autobahn, plan lane changes early instead of drifting in the middle lane.',
    ],
    related: ['motorway-lane-change', 'autobahn-merge', 'overtaking-basics'],
  },
  {
    id: 'wrong-speed',
    rank: 5,
    title: 'Driving too fast or too slowly',
    german: 'Unangepasste Geschwindigkeit',
    severity: 'serious',
    summary:
      'Missing a 30 zone is dangerous, but crawling at 30 km/h in a 50 zone out of nerves is also a fault. The test expects a confident, legal speed.',
    why: 'Too much speed shortens reaction time. Too little speed obstructs traffic and signals uncertainty. Both are marked, especially near schools, crossings and in bad weather.',
    fixes: [
      'Read signs early and adjust speed before the sign, not at it.',
      'Drive with the flow of traffic while staying within the limit.',
      'In rain, darkness or winter conditions, slow down and increase the gap.',
    ],
    related: ['traffic-lights', 'winter-driving', 'lane-position'],
  },
  {
    id: 'autobahn-merge',
    rank: 6,
    title: 'Merging badly onto the Autobahn',
    german: 'Fehler beim Auffahren',
    severity: 'serious',
    summary:
      'Merging too early, too slowly or stopping at the end of the acceleration lane. Traffic already on the Autobahn has priority.',
    why: 'Closing speeds are high. A slow merge forces others to brake, and stopping at the end of the acceleration lane is both dangerous and an exam fault.',
    fixes: [
      'Use the full acceleration lane to match the speed of traffic.',
      'Check mirrors, indicate, shoulder check and merge into a gap without forcing anyone to brake.',
      'Do not cross directly to the middle or left lane. If the gap is not there, adjust speed and wait.',
    ],
    related: ['autobahn-merge', 'motorway-lane-change'],
  },
  {
    id: 'unsafe-lane-change',
    rank: 7,
    title: 'Unsafe lane changes',
    german: 'Spurwechsel ohne sichere Beobachtung',
    severity: 'serious',
    summary:
      'Mirror-only checks, a late indicator and cutting into a gap are classic faults in town and on the Autobahn.',
    why: 'A lane change that causes another driver to brake or swerve is dangerous and can end the test. Cyclists and motorcycles are especially easy to miss.',
    fixes: [
      'Mirror, signal, shoulder check — then move smoothly.',
      'Indicate early and match the speed of the target lane.',
      'If the gap is not clearly safe, wait and try again.',
    ],
    related: ['lane-change-basic', 'motorway-lane-change', 'autobahn-merge'],
  },
  {
    id: 'pedestrians-cyclists',
    rank: 8,
    title: 'Overlooking pedestrians and cyclists',
    german: 'Fußgänger oder Radfahrer übersehen',
    severity: 'instant',
    summary:
      'The right hook, zebra crossings, bus stops and side roads are where vulnerable road users are most often missed.',
    why: 'Pedestrians and cyclists have priority in these situations. A single mistake can cause serious injury and is treated as a serious or immediate fail.',
    fixes: [
      'Slow down before turns, crossings and bus stops — do not arrive at full speed.',
      'Check the right shoulder before every right turn and give cyclists going straight priority.',
      'Stop before the zebra stripes and wait until pedestrians have cleared your path.',
    ],
    related: ['right-turn-cyclist', 'right-turn-pedestrian', 'crosswalk-pedestrians', 'school-bus'],
  },
  {
    id: 'parking',
    rank: 9,
    title: 'Messing up the parking manoeuvre',
    german: 'Fehler beim Einparken',
    severity: 'pattern',
    summary:
      'Hitting the kerb, reversing without a full observation or forgetting to secure the car on a slope.',
    why: 'Parking is a standard test manoeuvre. Kerb contact, poor observation and unsafe reversing are all marked, and corrections are allowed — unsafe guesses are not.',
    fixes: [
      'Reverse slowly, use reference points and check all around before each movement.',
      'If the angle is wrong, pull forward and correct instead of forcing the car in.',
      'Finish with the parking brake, correct gear and wheels turned the right way on a slope.',
    ],
    related: ['parallel-parking', 'hill-parking', 'cockpit-drill'],
  },
  {
    id: 'signals-and-lights',
    rank: 10,
    title: 'Rolling through stop signs or red lights',
    german: 'Stoppschild oder Rotlicht missachtet',
    severity: 'instant',
    summary:
      'Not stopping completely at the line, accelerating on amber or entering a junction you cannot clear.',
    why: 'These are serious traffic offences as well as test failures. A red light, a missed stop sign or a blocked junction can end the test immediately.',
    fixes: [
      'Come to a complete stop at the stop line and look both ways.',
      'Treat amber as stop unless you are too close to stop safely.',
      'Never enter a junction, even on green, unless you can clear it.',
    ],
    related: ['yield-stop', 'traffic-lights', 'right-turn-on-red', 'blocked-junction'],
  },
]

export const alsoCommon = [
  { title: 'Roundabout exits', scenario: 'roundabout-entering' },
  { title: 'Autobahn exits', scenario: 'autobahn-exit' },
  { title: 'Emergency braking', scenario: 'emergency-braking' },
  { title: 'Railway crossings', scenario: 'railway-crossing' },
]
