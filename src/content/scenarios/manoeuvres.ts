import type { Scenario } from '../types'

export const manoeuvreScenarios: Scenario[] = [
  {
    id: 'u-turn-rules',
    category: 'u-turns',
    title: 'Where U-turns are allowed',
    germanTerm: 'Wenden',
    summary:
      'Turning around is allowed only where it can be done safely and is not forbidden. Autobahns, one-way streets, pedestrian crossings, tunnels and unclear situations are off-limits.',
    keyRule:
      'Turning around is forbidden wherever it would endanger traffic or is explicitly prohibited. When in doubt, drive around the block instead.',
    diagram: 'u-turn',
    difficulty: 2,
    steps: [
      {
        title: 'Check the law first',
        detail:
          'Never turn on the Autobahn, in one-way streets, on pedestrian crossings, in tunnels or underpasses, at railway crossings, or where visibility is less than about 50 m.',
      },
      {
        title: 'Choose a safe place',
        detail:
          'Use a quiet side road, a suitable junction or a dedicated turning area. Avoid busy roads, bends and crests.',
      },
      {
        title: 'Observe and signal',
        detail:
          'Check mirrors, signal, shoulder check and give way to all traffic, especially cyclists and oncoming vehicles.',
      },
      {
        title: 'Turn in one smooth movement',
        detail:
          'If the road is too narrow, use a three-point turn rather than forcing a wide U-turn across kerbs.',
      },
    ],
    mistakes: [
      'Turning around on the Autobahn or in a one-way street.',
      'Forgetting the shoulder check and cutting off a cyclist.',
      'Blocking both lanes while manoeuvring in traffic.',
    ],
    examTips: [
      'If asked to turn around, choose a safe location and explain why you rejected unsafe options.',
      'Reversing on the Autobahn is strictly forbidden — even if you missed an exit.',
    ],
    rules: [
      'Turning around is prohibited where traffic is unclear or other road users would be endangered (StVO §9).',
      'Wenden is forbidden on Autobahns, in one-way streets, at pedestrian crossings, in tunnels and at railway crossings.',
    ],
    tags: ['U-turn', 'Wenden', 'prohibited', 'turning'],
  },
  {
    id: 'three-point-turn',
    category: 'u-turns',
    title: 'Three-point turn',
    germanTerm: 'Wenden in drei Zügen',
    summary:
      'A three-point turn lets you reverse direction on a narrow road. It needs full observation, slow speed and precise steering — and it is only legal where turning around is allowed.',
    keyRule:
      'Observe all around, turn left forward, reverse right, then turn left forward again — slowly and with a shoulder check at every phase.',
    diagram: 'three-point',
    difficulty: 3,
    steps: [
      {
        title: 'Prepare and observe',
        detail:
          'Stop at the right edge, signal left, check mirrors and blind spots in both directions. Confirm there is no traffic and that turning is allowed.',
      },
      {
        title: 'First move: forward left',
        detail:
          'Turn the wheel fully left and move forward slowly until you are close to the far kerb. Keep checking for oncoming traffic.',
      },
      {
        title: 'Second move: reverse right',
        detail:
          'Select reverse, check all around again — especially the blind spot — and reverse with full right lock until the car is angled the other way.',
      },
      {
        title: 'Third move: forward left',
        detail:
          'Select first gear, check again, turn left and drive away in the new direction. Straighten the wheel and accelerate gently.',
      },
    ],
    mistakes: [
      'Skipping the 360° observation before reversing.',
      'Reversing too fast and hitting the kerb.',
      'Turning on a road where turning around is prohibited.',
    ],
    examTips: [
      'Pause before each phase, check all around visibly, then move. Examiners want slow, controlled observations.',
      'If traffic approaches mid-manoeuvre, stop and wait rather than rushing.',
    ],
    rules: [
      'Reversing requires particular care and constant observation (StVO §9).',
      'The manoeuvre may only be performed where turning around is permitted.',
    ],
    tags: ['three-point turn', 'Wenden', 'reversing', 'narrow road'],
  },
  {
    id: 'roundabout-entering',
    category: 'roundabouts',
    title: 'Entering and leaving a roundabout',
    germanTerm: 'Kreisverkehr',
    summary:
      'At a roundabout, traffic already in the circle has priority. Enter to the right, do not signal left, and signal right just before your exit.',
    keyRule:
      'Yield to traffic coming from the left inside the circle. Signal right only when you are about to leave.',
    diagram: 'roundabout',
    difficulty: 2,
    steps: [
      {
        title: 'Approach and observe',
        detail:
          'Slow down, look left into the circle and be ready to stop. Check for cyclists and pedestrians at the crossings.',
      },
      {
        title: 'Give way',
        detail:
          'Vehicles already circulating have priority. Enter only when there is a safe gap.',
      },
      {
        title: 'Do not signal left',
        detail:
          'Do not indicate left when entering. The roundabout is a one-way system; a left signal would be misleading.',
      },
      {
        title: 'Signal right to exit',
        detail:
          'Indicate right after passing the exit before yours, then leave the circle. Check the right mirror for cyclists.',
      },
    ],
    mistakes: [
      'Stopping inside the circle to let someone in.',
      'Signalling left on entry.',
      'Forgetting the right signal when leaving.',
    ],
    examTips: [
      'Read the exit signs before entering and know which exit you need.',
      'The right shoulder check before exiting is essential — cyclists may be beside you.',
    ],
    rules: [
      'Traffic in the roundabout has priority unless signs say otherwise (StVO §8).',
      'Indicate right when leaving the roundabout.',
    ],
    tags: ['roundabout', 'Kreisverkehr', 'priority', 'indicator'],
  },
  {
    id: 'roundabout-multilane',
    category: 'roundabouts',
    title: 'Multi-lane roundabouts',
    germanTerm: 'Mehrspuriger Kreisverkehr',
    summary:
      'At multi-lane roundabouts, choose your lane before entering and stay in it. The lane you choose depends on your exit; do not drift across another lane inside the circle.',
    keyRule:
      'Right lane for the first exit or straight on; left lane for later exits — and always follow the road markings.',
    diagram: 'roundabout-multi',
    difficulty: 3,
    steps: [
      {
        title: 'Study the signs',
        detail:
          'Before the roundabout, read the exit diagram and lane arrows. They show which lane serves your destination.',
      },
      {
        title: 'Choose your lane',
        detail:
          'Use the right lane for the first exit or to continue straight. Use the left lane for exits beyond the halfway point, unless markings say otherwise.',
      },
      {
        title: 'Stay in lane',
        detail:
          'Keep your lane through the circle and stay parallel to the vehicle beside you. Do not cut across.',
      },
      {
        title: 'Move right before the exit',
        detail:
          'If your lane requires it, change to the right lane after checking mirrors and blind spot, then signal right and exit.',
      },
    ],
    mistakes: [
      'Entering in the left lane and cutting across to the first exit.',
      'Changing lanes inside the circle without checking.',
      'Following the car beside you instead of the lane markings.',
    ],
    examTips: [
      'If you miss your exit, go around again rather than cutting across lanes.',
      'Some roundabouts use spiral markings — follow the line that leads to your exit.',
    ],
    rules: [
      'Lane markings and signs determine the correct lane (StVO §8 and §9).',
      'Lane changes inside a roundabout must not endanger other traffic.',
    ],
    tags: ['roundabout', 'multi-lane', 'lane choice', 'Kreisverkehr'],
  },
  {
    id: 'autobahn-merge',
    category: 'autobahn',
    title: 'Merging onto the Autobahn',
    germanTerm: 'Auffahren auf die Autobahn',
    summary:
      'Use the acceleration lane to match the speed of traffic, then merge into a gap. Traffic already on the Autobahn has priority; stopping at the end of the lane is dangerous.',
    keyRule:
      'Accelerate to the speed of the traffic flow, indicate, check mirrors and blind spot, then merge smoothly into a gap.',
    diagram: 'merge',
    difficulty: 3,
    steps: [
      {
        title: 'Build speed on the acceleration lane',
        detail:
          'Use the whole acceleration lane (Beschleunigungsstreifen) to reach the speed of traffic. Do not merge slowly.',
      },
      {
        title: 'Observe and signal',
        detail:
          'Check the interior mirror, left mirror and left blind spot. Indicate left to show you intend to merge.',
      },
      {
        title: 'Find a gap',
        detail:
          'Look for a gap that lets you merge without forcing anyone to brake. Adjust your speed rather than your lane position.',
      },
      {
        title: 'Merge and settle',
        detail:
          'Move into the right lane smoothly, cancel the indicator and keep a safe following distance. Do not cross directly to a middle or left lane.',
      },
    ],
    mistakes: [
      'Stopping at the end of the acceleration lane when traffic is busy.',
      'Merging far below the traffic speed.',
      'Assuming traffic on the Autobahn will move over for you.',
    ],
    examTips: [
      'If the lane is full, slow down and look for a gap behind a vehicle — do not stop unless it is truly unavoidable.',
      'The hard shoulder is not a merging lane.',
    ],
    rules: [
      'Traffic already on the Autobahn has priority (StVO §18).',
      'The acceleration lane must be used to match the speed of traffic.',
    ],
    tags: ['Autobahn', 'merge', 'acceleration lane', 'Beschleunigungsstreifen'],
  },
  {
    id: 'autobahn-exit',
    category: 'autobahn',
    title: 'Leaving the Autobahn',
    germanTerm: 'Verlassen der Autobahn',
    summary:
      'Signal early, move onto the deceleration lane and only then reduce speed. Braking hard in the travel lane is a major cause of Autobahn rear-end crashes.',
    keyRule:
      'Signal early, enter the deceleration lane, then brake. Never use the hard shoulder as an exit lane.',
    diagram: 'exit',
    difficulty: 2,
    steps: [
      {
        title: 'Read the exit signs',
        detail:
          'Note the exit number and distance. Move to the right lane in good time, especially on multi-lane sections.',
      },
      {
        title: 'Signal early',
        detail:
          'Indicate right before the deceleration lane begins so drivers behind know your intention.',
      },
      {
        title: 'Use the deceleration lane',
        detail:
          'Move onto the deceleration lane (Verzögerungsstreifen) and only then reduce speed to the limit shown for the exit.',
      },
      {
        title: 'Adjust to the new road',
        detail:
          'Check the speed limit, watch for traffic joining from the right and be ready for a stop at the end of the exit.',
      },
    ],
    mistakes: [
      'Braking in the travel lane before reaching the deceleration lane.',
      'Missing the exit and reversing on the hard shoulder.',
      'Using the hard shoulder as a deceleration lane.',
    ],
    examTips: [
      'If you miss the exit, continue to the next one. Reversing on the Autobahn is forbidden and extremely dangerous.',
      'Check the exit speed limit — motorway exit ramps are often much slower than they look.',
    ],
    rules: [
      'The hard shoulder may not be used for normal driving or as an exit lane (StVO §18).',
      'Reversing on the Autobahn is prohibited.',
    ],
    tags: ['Autobahn', 'exit', 'deceleration lane', 'Ausfahrt'],
  },
  {
    id: 'rettungsgasse',
    category: 'autobahn',
    title: 'Forming the Rettungsgasse',
    germanTerm: 'Rettungsgasse',
    summary:
      'When traffic slows on the Autobahn, you must form a rescue lane immediately — before you hear sirens. It lets emergency vehicles reach the scene without weaving through traffic.',
    keyRule:
      'As soon as traffic slows, the left lane moves left and all other lanes move right, creating a gap between the left lane and the next lane.',
    diagram: 'rettungsgasse',
    difficulty: 3,
    steps: [
      {
        title: 'Start as soon as traffic slows',
        detail:
          'Do not wait for blue lights or sirens. Traffic must form the Rettungsgasse as soon as it starts moving slowly or stops.',
      },
      {
        title: 'Two lanes',
        detail:
          'On a two-lane Autobahn, the left lane moves as far left as possible and the right lane as far right as possible. The gap forms between them.',
      },
      {
        title: 'Three or more lanes',
        detail:
          'The leftmost lane stays left; all other lanes move right. The rescue lane runs between the leftmost lane and the lane next to it.',
      },
      {
        title: 'Keep it open',
        detail:
          'Do not use the gap to get ahead, do not change lanes into it and do not follow emergency vehicles. Keep the lane clear until traffic flows normally.',
      },
    ],
    mistakes: [
      'Waiting until the emergency vehicle is visible before moving aside.',
      'Using the Rettungsgasse to overtake the queue.',
      'Forming the gap on the hard shoulder instead of between the lanes.',
    ],
    examTips: [
      'Remember the rule: “Left goes left, everyone else goes right.”',
      'Forming the Rettungsgasse is required by law and is checked in lessons and exams.',
    ],
    rules: [
      'Drivers must form a rescue lane when traffic slows (StVO §11).',
      'Driving in the Rettungsgasse is prohibited unless you are an emergency vehicle.',
    ],
    tags: ['Rettungsgasse', 'Autobahn', 'emergency lane', 'traffic jam'],
  },
  {
    id: 'overtaking-basics',
    category: 'overtaking',
    title: 'Overtaking safely',
    germanTerm: 'Überholen',
    summary:
      'Overtake on the left, only when you have a clear view and enough space, and never exceed the speed limit. Return to the right lane once it is safe.',
    keyRule:
      'No overtaking unless you can see far enough ahead, the oncoming lane is clear and nobody behind is already overtaking you.',
    diagram: 'overtaking',
    difficulty: 3,
    steps: [
      {
        title: 'Check behind and ahead',
        detail:
          'Check mirrors and the blind spot. Look far ahead for oncoming traffic, junctions, bends and crests. Make sure no one behind is already overtaking.',
      },
      {
        title: 'Signal and move out',
        detail:
          'Indicate left, accelerate smoothly and move into the overtaking lane without cutting in too close.',
      },
      {
        title: 'Pass with enough space',
        detail:
          'Keep a safe lateral distance, especially to cyclists and motorcycles. Do not exceed the speed limit.',
      },
      {
        title: 'Return right',
        detail:
          'Check the interior mirror, indicate right and return to the right lane when you can see the overtaken vehicle in the mirror.',
      },
    ],
    mistakes: [
      'Overtaking at bends, crests, pedestrian crossings or junctions with poor visibility.',
      'Pulling out without checking for a faster vehicle behind.',
      'Cutting back in too soon and forcing the other driver to brake.',
    ],
    examTips: [
      'Overtaking is optional in the exam. If unsure, stay behind and explain why.',
      'Never exceed the speed limit to complete an overtaking manoeuvre.',
    ],
    rules: [
      'Overtaking is normally done on the left (StVO §5).',
      'Overtaking is prohibited where visibility or traffic conditions make it unsafe.',
    ],
    tags: ['overtaking', 'Überholen', 'left lane', 'speed'],
  },
  {
    id: 'overtaking-cyclist',
    category: 'overtaking',
    title: 'Overtaking cyclists',
    germanTerm: 'Radfahrer überholen',
    summary:
      'Cyclists need more space than cars. Keep at least 1.5 m in built-up areas and 2 m outside them, and only overtake when you can see that the oncoming lane is clear.',
    keyRule:
      '1.5 m in town, 2 m outside — and only when the road ahead is clear enough to keep that distance.',
    diagram: 'overtake-cyclist',
    difficulty: 3,
    steps: [
      {
        title: 'Assess the road',
        detail:
          'Check for oncoming traffic, parked cars and the cyclist’s line. If you cannot keep the minimum distance, wait behind.',
      },
      {
        title: 'Check behind',
        detail:
          'Look in the mirror and over your shoulder before moving out. Do not start an overtake if a car is already passing you.',
      },
      {
        title: 'Signal and move wide',
        detail:
          'Indicate left and give the cyclist a wide berth. Do not sound the horn aggressively or rev the engine.',
      },
      {
        title: 'Return when clear',
        detail:
          'Only return to the right once you can see the cyclist safely behind you. Leave room for them to swerve around potholes.',
      },
    ],
    mistakes: [
      'Passing too closely because of oncoming traffic.',
      'Overtaking a cyclist just before turning right.',
      'Honking and squeezing past instead of waiting for a safe gap.',
    ],
    examTips: [
      'If the road is too narrow, stay behind the cyclist at a safe distance — this is the correct answer in the exam.',
      'Watch for cyclists moving around drains, potholes or parked cars.',
    ],
    rules: [
      'Minimum overtaking distance: 1.5 m in built-up areas, 2 m outside (StVO §5).',
      'Cyclists must not be endangered or obstructed when being overtaken.',
    ],
    tags: ['cyclist', 'overtaking', '1.5 metres', 'distance'],
  },
  {
    id: 'emergency-braking',
    category: 'emergency',
    title: 'Emergency braking',
    germanTerm: 'Gefahrenbremsung',
    summary:
      'Emergency braking means stopping as quickly as possible. With ABS, press the brake pedal hard and keep it pressed while steering around the obstacle if necessary.',
    keyRule:
      'Brake hard and continuously, keep the steering under control and do not pump the brake pedal in a car with ABS.',
    diagram: 'emergency',
    difficulty: 3,
    steps: [
      {
        title: 'React immediately',
        detail:
          'Release the accelerator and press the brake pedal firmly and fully. Do not wait to assess the situation before braking.',
      },
      {
        title: 'Keep the brake pressed',
        detail:
          'With ABS, the pedal may vibrate — that is normal. Keep full pressure and steer around the hazard if there is space.',
      },
      {
        title: 'Use the clutch',
        detail:
          'In a manual car, press the clutch before the engine stalls so you keep control and can steer. Do not release the brake early.',
      },
      {
        title: 'Secure the scene',
        detail:
          'After stopping, switch on the hazard lights. If the car is in a dangerous position, move it to safety if possible and warn other traffic.',
      },
    ],
    mistakes: [
      'Pumping the brake pedal in a car with ABS.',
      'Looking only at the obstacle instead of the escape route.',
      'Releasing the brake too early and rolling into the hazard.',
    ],
    examTips: [
      'The examiner may ask for a Gefahrenbremsung. Brake decisively — hesitation is marked as a fault.',
      'Look where you want to go, not at what you want to avoid.',
    ],
    rules: [
      'The driver must be able to stop in time for any foreseeable hazard (StVO §3).',
      'Hazard lights must be used when the vehicle becomes a danger to others.',
    ],
    tags: ['emergency braking', 'Gefahrenbremsung', 'ABS', 'safety'],
  },
  {
    id: 'breakdown',
    category: 'emergency',
    title: 'Breakdown and securing the scene',
    germanTerm: 'Panne und Absicherung',
    summary:
      'If your car breaks down, get it off the carriageway, switch on hazard lights, put on the warning vest and place the triangle before calling for help.',
    keyRule:
      'Hazard lights first, then vest, then warning triangle — and get yourself behind the barrier while you wait.',
    diagram: 'breakdown',
    difficulty: 2,
    steps: [
      {
        title: 'Get off the road',
        detail:
          'Switch on hazard lights immediately and steer to the right, onto the hard shoulder or a safe lay-by. Stop as far from moving traffic as possible.',
      },
      {
        title: 'Put on the warning vest',
        detail:
          'Put on the high-visibility vest before opening the door. Passengers should also wear vests and leave on the side away from traffic.',
      },
      {
        title: 'Place the warning triangle',
        detail:
          'Place the triangle well behind the car: about 50 m in town, 100 m on country roads and 200 m on the Autobahn. Face oncoming traffic while walking back.',
      },
      {
        title: 'Call for help and wait safely',
        detail:
          'Call 110 in an emergency or your breakdown service. Wait behind the crash barrier, not in or beside the car.',
      },
    ],
    mistakes: [
      'Standing between the car and traffic while waiting.',
      'Walking along the carriageway without a warning vest.',
      'Placing the triangle directly behind the car where it is too close to react.',
    ],
    examTips: [
      'The warning triangle is part of the required safety equipment. Know where it is stored before you need it.',
      'On the Autobahn, always leave the car on the traffic side of the barrier and wait behind it.',
    ],
    rules: [
      'Hazard lights, warning vest and warning triangle are required safety equipment (StVO §15 and §53a).',
      'A first-aid kit and warning triangle are mandatory in every car.',
    ],
    tags: ['breakdown', 'Panne', 'warning triangle', 'hard shoulder'],
  },
  {
    id: 'parallel-parking',
    category: 'parking',
    title: 'Parallel parking',
    germanTerm: 'Einparken längs',
    summary:
      'Parallel parking is a controlled reversing manoeuvre. Pull alongside the car in front, reverse at an angle, then straighten with the kerb.',
    keyRule:
      'Check, indicate, reverse slowly with full lock, then straighten and secure the car. If unsure, pull out and try again.',
    diagram: 'parallel-parking',
    difficulty: 3,
    steps: [
      {
        title: 'Check the space',
        detail:
          'Choose a space clearly longer than your car. Check mirrors and blind spot, indicate right and stop parallel to the car in front, about 0.5–1 m away.',
      },
      {
        title: 'Reverse at an angle',
        detail:
          'Select reverse, check all around, and reverse slowly with full right lock until your car is at about 45 degrees to the kerb.',
      },
      {
        title: 'Straighten',
        detail:
          'Turn the wheel fully left and continue reversing. Watch the right mirror and the front corner of your car.',
      },
      {
        title: 'Finish and secure',
        detail:
          'Straighten the wheels, stop close to the kerb without touching it, apply the parking brake and select the correct gear.',
      },
    ],
    mistakes: [
      'Starting too far from the car in front, leaving no room to swing in.',
      'Hitting the kerb while straightening.',
      'Forgetting the 360° observation before reversing.',
    ],
    examTips: [
      'Reverse slowly and use reference points consistently. Corrections are fine; hitting the kerb is not.',
      'Before opening the door, check the blind spot for cyclists approaching from behind.',
    ],
    rules: [
      'Parking must not endanger or obstruct other traffic (StVO §12).',
      'When reversing, you must check all around and give way to other road users.',
    ],
    tags: ['parking', 'parallel parking', 'Einparken', 'reversing'],
  },
  {
    id: 'hill-parking',
    category: 'parking',
    title: 'Parking on a hill',
    germanTerm: 'Parken am Berg',
    summary:
      'On a slope, secure the car against rolling away: parking brake, appropriate gear and the wheels turned toward the kerb when facing downhill.',
    keyRule:
      'Parking brake on, first gear uphill, reverse downhill, and turn the wheels so the kerb stops the car if it rolls.',
    diagram: 'hill-parking',
    difficulty: 2,
    steps: [
      {
        title: 'Stop and secure',
        detail:
          'Stop close to the kerb, apply the parking brake firmly and select first gear when facing uphill or reverse when facing downhill.',
      },
      {
        title: 'Turn the wheels',
        detail:
          'Facing downhill, turn the wheels toward the kerb. Facing uphill, turn them away from the kerb so the tyre would catch the kerb if the car rolled back.',
      },
      {
        title: 'Use a chock if needed',
        detail:
          'On a steep slope or with a heavy vehicle, place a chock or a suitable object behind a wheel.',
      },
      {
        title: 'Check before leaving',
        detail:
          'Check mirrors and blind spot before opening the door. Do not let passengers open doors into traffic.',
      },
    ],
    mistakes: [
      'Leaving the car in neutral with only the handbrake on.',
      'Turning the wheels the wrong way for the slope.',
      'Parking too close to a junction or crossing.',
    ],
    examTips: [
      'Say the routine out loud: “Downhill — wheels to the kerb, reverse gear.”',
      'The examiner may check that the car does not roll when you release the foot brake.',
    ],
    rules: [
      'Vehicles must be secured against rolling away when parked (StVO §14).',
      'Parking is forbidden within 5 m of junctions and pedestrian crossings, and within 15 m of bus stops.',
    ],
    tags: ['parking', 'hill', 'handbrake', 'Parken am Berg'],
  },
  {
    id: 'crosswalk-pedestrians',
    category: 'safety',
    title: 'Pedestrian crossings and zebra crossings',
    germanTerm: 'Fußgängerüberweg',
    summary:
      'At a zebra crossing, pedestrians have priority as soon as they show they want to cross. Approach at a speed that lets you stop and never overtake at a crossing.',
    keyRule:
      'Slow down early, stop before the zebra stripes and let pedestrians cross completely. No overtaking at crossings.',
    diagram: 'crosswalk',
    difficulty: 2,
    steps: [
      {
        title: 'Scan the crossing early',
        detail:
          'Look for pedestrians waiting at either side, children, and people with limited mobility. Ease off the accelerator.',
      },
      {
        title: 'Be ready to stop',
        detail:
          'Cover the brake and approach at walking speed if anyone is near the crossing. Do not rely on them waiting.',
      },
      {
        title: 'Stop before the stripes',
        detail:
          'Stop before the crossing, not on it. Wait until pedestrians have reached the far side or are clearly out of your path.',
      },
      {
        title: 'Pull away gently',
        detail:
          'Check both sides again and accelerate smoothly. Watch for pedestrians who may step out from behind a stopped vehicle.',
      },
    ],
    mistakes: [
      'Overtaking another vehicle that has stopped at a crossing.',
      'Stopping on the crossing while waiting in traffic.',
      'Driving through when a pedestrian is waiting at the edge.',
    ],
    examTips: [
      'At a zebra crossing, pedestrians have priority once they indicate they want to cross. Waiting is always safer.',
      'Do not wave pedestrians across if other lanes are not stopped.',
    ],
    rules: [
      'Pedestrians have priority at zebra crossings (StVO §26).',
      'Overtaking at pedestrian crossings is prohibited.',
    ],
    tags: ['pedestrian', 'zebra crossing', 'Fußgängerüberweg', 'priority'],
  },
  {
    id: 'school-bus',
    category: 'safety',
    title: 'School buses and children',
    germanTerm: 'Schulbus',
    summary:
      'A school bus with flashing hazard lights is a warning: children are getting on or off. Do not overtake and pass at walking speed in both directions.',
    keyRule:
      'Flashing hazards on a school bus: no overtaking, walking speed, and be ready for a child to run into the road.',
    diagram: 'school-bus',
    difficulty: 2,
    steps: [
      {
        title: 'Recognise the signal',
        detail:
          'School buses switch on hazard lights when children are boarding or leaving. The signal applies to traffic in both directions.',
      },
      {
        title: 'Slow to walking speed',
        detail:
          'Reduce speed to walking pace and be ready to stop completely. Children may cross without looking.',
      },
      {
        title: 'Do not overtake',
        detail:
          'Overtaking a school bus with flashing hazard lights is prohibited. Wait until the lights are off and the bus moves away.',
      },
      {
        title: 'Check around the bus',
        detail:
          'Look for children in front of and behind the bus, and for parents or cyclists nearby.',
      },
    ],
    mistakes: [
      'Overtaking the bus while its hazard lights are flashing.',
      'Passing at normal speed because the road looks clear.',
      'Forgetting that the rule applies to oncoming traffic too.',
    ],
    examTips: [
      'If a ball rolls into the road, expect a child to follow. Slow down immediately.',
      'Treat every bus stop near a school as a potential hazard zone.',
    ],
    rules: [
      'School buses with flashing hazard lights must be passed at walking speed, and overtaking is prohibited (StVO §20).',
      'Children are especially vulnerable and unpredictable; drivers must exercise particular care.',
    ],
    tags: ['school bus', 'children', 'hazard lights', 'Schulbus'],
  },
  {
    id: 'winter-driving',
    category: 'safety',
    title: 'Winter driving',
    germanTerm: 'Fahren im Winter',
    summary:
      'Winter demands more distance, gentler inputs and the right tyres. Clear all windows and lights before driving, and adjust speed to the conditions.',
    keyRule:
      'Winter tyres when conditions require them, clear windows, smooth inputs and a much longer following distance.',
    diagram: 'winter',
    difficulty: 2,
    steps: [
      {
        title: 'Prepare the car',
        detail:
          'Fit winter or all-season tyres suitable for the conditions. Clear all windows, mirrors, lights and the roof of snow and ice.',
      },
      {
        title: 'Adjust your speed',
        detail:
          'Drive slower than the limit and increase the following distance significantly. Braking distances can double or more on ice.',
      },
      {
        title: 'Use smooth inputs',
        detail:
          'Accelerate, steer and brake gently. Avoid sudden movements that can break traction. Use a higher gear to reduce wheelspin.',
      },
      {
        title: 'Watch for ice',
        detail:
          'Be extra careful on bridges, shaded stretches, hilltops and wet leaves. Black ice is often invisible.',
      },
    ],
    mistakes: [
      'Driving with only a small clear patch on the windscreen.',
      'Keeping summer tyres in snow and ice.',
      'Braking late because the speed limit has not changed.',
    ],
    examTips: [
      'Winter tyres are required in wintry conditions — summer tyres can lead to a fine and insurance problems.',
      'In snow, use second gear to pull away smoothly and avoid wheelspin.',
    ],
    rules: [
      'Situational winter-tyre requirement applies in Germany (StVO §2).',
      'The vehicle must be safe to drive with clear visibility in all directions.',
    ],
    tags: ['winter', 'snow', 'ice', 'winter tyres', 'safety'],
  },
]
