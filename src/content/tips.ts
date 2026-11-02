export interface DrivingTip {
  id: string
  title: string
  germanTerm: string
  summary: string
  steps: string[]
  warning: string
  related: string[]
  visual: string
}

export const drivingTips: DrivingTip[] = [
  {
    id: 'speed',
    title: 'Control your speed smoothly',
    germanTerm: 'Geschwindigkeit halten',
    summary:
      'Read the limit early and make small adjustments. A steady speed is easier to control than a series of late corrections.',
    steps: [
      'Look for signs, town boundaries and 30 zones well ahead.',
      'Ease off the accelerator before the limit changes, not after it.',
      'Use small, smooth pedal inputs and check the speedometer in short glances.',
      'In 30 zones, actively check your speed — it is easy to creep over.',
    ],
    warning: 'Do not stare at the speedometer. Your eyes belong on the road.',
    related: ['traffic-lights', 'lane-position', 'winter-driving'],
    visual: 'speed',
  },
  {
    id: 'center',
    title: 'Stay centred in your lane',
    germanTerm: 'Spur halten',
    summary:
      'Aim far ahead and keep equal space on both sides. The car follows your eyes, so looking down pulls you off line.',
    steps: [
      'Look towards the horizon, not at the bonnet.',
      'Keep a small, equal gap to both lane edges.',
      'Make tiny steering corrections early instead of one big correction late.',
      'On narrow roads, slow down rather than drifting towards the centre.',
    ],
    warning: 'Fixating on the car ahead or the bonnet makes lane position worse.',
    related: ['lane-position', 'lane-change-basic', 'right-turn-basic'],
    visual: 'center',
  },
  {
    id: 'wheel-position',
    title: 'Know where your wheels are',
    germanTerm: 'Radposition und Referenzpunkte',
    summary:
      'Reference points help you judge kerbs, parking spaces and narrow gaps without leaning out of the window.',
    steps: [
      'In a safe area, line up a kerb or marking with a fixed point on the bonnet.',
      'Check that point from your normal seating position.',
      'Use the mirrors and a short glance to confirm the gap.',
      'Keep the same seat position after setting your reference points.',
    ],
    warning: 'Reference points change if you move the seat or drive a different car.',
    related: ['parallel-parking', 'lane-position', 'right-turn-basic'],
    visual: 'wheel-position',
  },
  {
    id: 'steering',
    title: 'Steer smoothly through turns',
    germanTerm: 'Lenken',
    summary:
      'Hold the wheel at 9 and 3, push-pull the rim and look through the corner. Smooth hands make a smooth turn.',
    steps: [
      'Keep both hands at 9 and 3 unless you are changing gear.',
      'Push and pull the rim; do not cross your hands.',
      'Look through the turn to where you want the car to go.',
      'Unwind the wheel smoothly as the car straightens.',
    ],
    warning: 'Do not let the wheel spin back on its own — keep control as you straighten.',
    related: ['left-turn-oncoming', 'right-turn-basic', 'roundabout-entering'],
    visual: 'steering',
  },
  {
    id: 'vision',
    title: 'Look far ahead and scan',
    germanTerm: 'Blickführung',
    summary:
      'Good observation is a rhythm: far ahead, mirrors, side roads, then back to the road. Do not lock onto one point.',
    steps: [
      'Look as far ahead as the road allows.',
      'Check the interior and side mirrors every few seconds.',
      'Scan side roads, crossings, parked cars and cyclists.',
      'Look through bends, not at the kerb in front of you.',
    ],
    warning: 'A short speedometer glance is fine; staring at the dashboard is not.',
    related: ['mirrors-blind-spot', 'right-before-left', 'crosswalk-pedestrians'],
    visual: 'vision',
  },
  {
    id: 'braking',
    title: 'Brake early and smoothly',
    germanTerm: 'Sanft bremsen',
    summary:
      'Ease off early, build brake pressure progressively and release slightly before stopping. The car stays settled and the traffic behind can react.',
    steps: [
      'Ease off the accelerator as soon as you see the hazard.',
      'Build brake pressure smoothly rather than stamping on the pedal.',
      'Keep enough distance from the car ahead.',
      'Release a little just before stopping to finish without a jolt.',
    ],
    warning: 'Late, hard braking unsettles the car and the traffic behind.',
    related: ['emergency-braking', 'traffic-lights', 'school-bus'],
    visual: 'braking',
  },
  {
    id: 'pull-away',
    title: 'Pull away from the kerb safely',
    germanTerm: 'Anfahren vom Fahrbahnrand',
    summary:
      'Pulling out starts with observation, not with the accelerator. Check the mirror, signal, turn your head and only then move into the lane.',
    steps: [
      'Check the interior mirror and the left side mirror before moving.',
      'Signal left early so traffic behind knows your intention.',
      'Turn your head to check the left blind spot for cyclists and cars.',
      'Give way to traffic already in the lane, then pull out smoothly without swinging wide.',
    ],
    warning: 'A cyclist in your blind spot is invisible in the mirror. Always turn your head.',
    related: ['mirrors-blind-spot', 'lane-change-basic', 'cockpit-drill'],
    visual: 'pull-away',
  },
  {
    id: 'junction-scan',
    title: 'Scan the junction and around the A-pillar',
    germanTerm: 'Blickführung an der Kreuzung',
    summary:
      'At a junction, scan right, left and right again. Move your head so the A-pillar cannot hide a cyclist or pedestrian.',
    steps: [
      'Approach slowly enough to stop if something appears.',
      'Look right first at an unsigned junction, then left, then right again.',
      'Move your head slightly to see around the A-pillar.',
      'Check cyclists and pedestrians before moving, even when the road looks clear.',
    ],
    warning: 'The A-pillar can hide a whole pedestrian or cyclist. Eyes alone are not enough.',
    related: ['right-before-left', 't-junction', 'crosswalk-pedestrians'],
    visual: 'junction-scan',
  },
  {
    id: 'country-bend',
    title: 'Brake before the bend',
    germanTerm: 'Kurvenfahren auf der Landstraße',
    summary:
      'Slow down before the bend, look through to the exit and accelerate gently once the car is straightening. Braking mid-corner unsettles the car.',
    steps: [
      'Read the bend and reduce speed before you turn in.',
      'Look through the curve towards the exit, not at the kerb in front of you.',
      'Stay in your lane and do not cut the inside corner.',
      'Accelerate gently only when the road starts to straighten.',
    ],
    warning: 'Late braking in a bend can make the car unstable. Slow down before the corner.',
    related: ['lane-position', 'overtaking-basics', 'winter-driving'],
    visual: 'country-bend',
  },
]