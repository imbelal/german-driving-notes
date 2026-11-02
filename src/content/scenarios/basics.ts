import type { Scenario } from '../types'

export const basicsScenarios: Scenario[] = [
  {
    id: 'cockpit-drill',
    category: 'basics',
    title: 'Cockpit drill before you drive',
    germanTerm: 'Sitzposition und Fahrzeugkontrolle',
    summary:
      'Set up your seat, steering wheel, mirrors and belt before the engine starts. A correct position gives you full control, better visibility and less fatigue on long drives.',
    keyRule:
      'You should reach every control with a slightly bent arm and see the road clearly over the steering wheel.',
    diagram: 'cockpit',
    difficulty: 1,
    steps: [
      {
        title: 'Seat and backrest',
        detail:
          'Sit deep in the seat. Press the clutch fully with your left leg while your knee stays slightly bent. The backrest should be upright enough that your shoulders touch it.',
      },
      {
        title: 'Steering wheel',
        detail:
          'Hold the wheel at about 9 and 3 o’clock. With your shoulders against the seat, your arms should be slightly bent when the wheel is straight.',
      },
      {
        title: 'Head restraint',
        detail:
          'Set the top of the head restraint level with the top of your head, as close to your head as comfortable. This protects your neck in a rear-end impact.',
      },
      {
        title: 'Mirrors',
        detail:
          'Set the interior mirror so you see the whole rear window. Set the side mirrors so a small part of your own car is visible and the horizon sits around the middle.',
      },
      {
        title: 'Belt and controls',
        detail:
          'Fasten the belt without twists. Check lights, indicators, handbrake, gear position and that doors are closed before moving off.',
      },
    ],
    mistakes: [
      'Sitting too far back, so the clutch cannot be pressed fully.',
      'Setting mirrors after moving off instead of during the cockpit drill.',
      'Leaning the seat back so far that the head restraint is useless.',
    ],
    examTips: [
      'Examiners look for a routine: seat, head restraint, mirrors, belt, controls. Do it in the same order every time.',
      'You should be able to see a little of your own car in the side mirrors — that is your reference for judging distance.',
    ],
    rules: [
      'The driver must be able to control the vehicle at all times (StVO §23).',
      'Seat belts must be worn correctly whenever the vehicle is moving.',
    ],
    tags: ['seat', 'mirrors', 'belt', 'position', 'pre-drive'],
  },
  {
    id: 'mirrors-blind-spot',
    category: 'basics',
    title: 'Mirrors and the shoulder check',
    germanTerm: 'Spiegel und Schulterblick',
    summary:
      'Mirrors show most of the traffic behind you, but every car has blind spots. The shoulder check is the only way to see a cyclist or car hiding beside you.',
    keyRule:
      'Mirror, signal, shoulder check — in that order, every time you change direction or lane.',
    diagram: 'blind-spot',
    difficulty: 1,
    steps: [
      {
        title: 'Interior mirror first',
        detail:
          'Check the interior mirror to read the traffic situation behind you. It shows the centre of the road and approaching vehicles best.',
      },
      {
        title: 'Side mirror on the moving side',
        detail:
          'Before moving left, check the left side mirror; before moving right, check the right side mirror. Compare what you see with the interior mirror.',
      },
      {
        title: 'Shoulder check',
        detail:
          'Turn your head briefly and look over the shoulder on the side you want to move to. Do not rely on the mirror alone — blind spots hide motorcycles, cyclists and small cars.',
      },
      {
        title: 'Act only when clear',
        detail:
          'If a vehicle is in or entering the blind spot, wait. After the check, keep your movement smooth so other road users can predict it.',
      },
    ],
    mistakes: [
      'Turning the head for so long that you lose sight of the road ahead.',
      'Checking only the side mirror and skipping the shoulder check.',
      'Signalling after the manoeuvre instead of before it.',
    ],
    examTips: [
      'The shoulder check must be visible to the examiner — exaggerate it slightly.',
      'Before pulling away from the kerb, check the left blind spot for cyclists.',
    ],
    rules: [
      'Before changing lane or pulling out, you must make sure no other road user is endangered (StVO §7).',
      'A shoulder check is required even when moving off from a parking space.',
    ],
    tags: ['mirrors', 'blind spot', 'Schulterblick', 'observation'],
  },
  {
    id: 'lane-position',
    category: 'basics',
    title: 'Lane position and keeping right',
    germanTerm: 'Spurhaltung und Rechtsfahrgebot',
    summary:
      'In Germany you drive on the right. Keep a steady position in the centre of your lane, leave space for cyclists and never drift toward the centre line.',
    keyRule:
      'Keep right, drive in the centre of your lane, and give cyclists at least 1.5 m in town and 2 m outside built-up areas when passing.',
    diagram: 'lane-position',
    difficulty: 1,
    steps: [
      {
        title: 'Find the lane centre',
        detail:
          'Aim far ahead, not at the road directly in front of the bonnet. The car follows your eyes; looking far ahead keeps the car centred.',
      },
      {
        title: 'Keep right in your direction',
        detail:
          'On a multi-lane road, use the right-hand lane unless you are overtaking, turning left, or traffic density requires otherwise.',
      },
      {
        title: 'Leave room beside parked cars',
        detail:
          'When passing parked cars, leave at least 1 m and watch for doors opening. Near cyclists, keep at least 1.5 m in built-up areas and 2 m outside them.',
      },
      {
        title: 'Do not straddle markings',
        detail:
          'Stay inside your lane. Solid lines must not be crossed; dashed lines may be crossed only for a deliberate lane change.',
      },
    ],
    mistakes: [
      'Driving too close to the centre line, leaving no room for oncoming cyclists.',
      'Hugging the right edge and clipping the kerb.',
      'Using the left lane when the right lane is free.',
    ],
    examTips: [
      'The examiner checks lane position constantly — small corrections are better than one large swerve.',
      'On narrow roads, slow down rather than moving into the oncoming lane to pass obstacles.',
    ],
    rules: [
      'Vehicles must use the right-hand lane (Rechtsfahrgebot, StVO §2).',
      'Minimum passing distances to cyclists: 1.5 m in built-up areas, 2 m outside.',
    ],
    tags: ['lane', 'position', 'right-hand traffic', 'cyclists'],
  },
  {
    id: 'lane-change-basic',
    category: 'lane-changes',
    title: 'Changing lanes on an urban road',
    germanTerm: 'Fahrstreifenwechsel',
    summary:
      'A lane change is a short, deliberate manoeuvre. Check, signal, check again, then move smoothly without surprising anyone.',
    keyRule:
      'Mirror, signal, shoulder check, move. If any check is unclear, stay in your lane.',
    diagram: 'lane-change',
    difficulty: 2,
    steps: [
      {
        title: 'Read the new lane',
        detail:
          'Check the interior mirror and the side mirror on the side you want to move to. Look far ahead to confirm the new lane is moving and has space.',
      },
      {
        title: 'Signal early',
        detail:
          'Indicate in good time, before you start moving. The indicator tells other road users what you plan; it does not give you priority.',
      },
      {
        title: 'Shoulder check',
        detail:
          'Turn your head to check the blind spot on the moving side. This is where cyclists and motorcycles often hide.',
      },
      {
        title: 'Move smoothly',
        detail:
          'Steer gently into the new lane, keep your speed constant and cancel the indicator once you are centred.',
      },
    ],
    mistakes: [
      'Signalling as you turn the wheel, which is too late.',
      'Only looking in the mirror and missing a cyclist in the blind spot.',
      'Slowing down sharply in the middle of the lane change.',
    ],
    examTips: [
      'Signal for long enough that the examiner clearly sees it before the movement.',
      'If a vehicle is approaching fast in the target lane, let it pass and try again.',
    ],
    rules: [
      'A lane change must not endanger or obstruct other traffic (StVO §7).',
      'Indicators must be used before changing lane and before pulling out.',
    ],
    tags: ['lane change', 'indicator', 'shoulder check', 'urban'],
  },
  {
    id: 'motorway-lane-change',
    category: 'lane-changes',
    title: 'Changing lanes on the Autobahn',
    germanTerm: 'Spurwechsel auf der Autobahn',
    summary:
      'At Autobahn speeds, small errors become large. Use mirrors, indicator and shoulder check, and match the speed of traffic in the target lane before you move.',
    keyRule:
      'Never force a gap. If the target lane is busy, adjust speed, wait for a safe gap and move only when the whole manoeuvre fits.',
    diagram: 'motorway-lane-change',
    difficulty: 3,
    steps: [
      {
        title: 'Scan far ahead',
        detail:
          'Check traffic ahead and the target lane early. Look for vehicles closing fast from behind, especially on the left.',
      },
      {
        title: 'Mirror and signal',
        detail:
          'Check the interior mirror, then the side mirror, then indicate. On the Autobahn, indicator timing must be earlier because closing speeds are high.',
      },
      {
        title: 'Shoulder check',
        detail:
          'Turn your head to clear the blind spot. A motorcycle can be hidden there for several seconds.',
      },
      {
        title: 'Match speed and move',
        detail:
          'Adjust your speed to the target lane, then move over smoothly. Do not brake while cutting in front of a faster vehicle.',
      },
      {
        title: 'Return right',
        detail:
          'After overtaking, return to the right lane when there is a safe gap. Do not sit in the middle or left lane without reason.',
      },
    ],
    mistakes: [
      'Pulling out in front of a fast car without matching its speed.',
      'Staying in the left lane after the overtaking manoeuvre.',
      'Missing a motorcycle during the shoulder check.',
    ],
    examTips: [
      'On the Autobahn, look further ahead and use the mirrors more often than in town.',
      'If you miss a gap, do not brake hard to force it — continue, adjust and wait.',
    ],
    rules: [
      'Keep right; use the left lane only for overtaking (StVO §2).',
      'Lane changes at high speed must not cause braking or evasive action for others.',
    ],
    tags: ['Autobahn', 'lane change', 'speed', 'motorway'],
  },
]
