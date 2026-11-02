import type { Scenario } from '../types'

export const junctionScenarios: Scenario[] = [
  {
    id: 'right-before-left',
    category: 'junctions',
    title: 'Right before left at open junctions',
    germanTerm: 'Rechts vor Links',
    summary:
      'At junctions without signs, markings or traffic lights, the default rule is right before left. You must give way to vehicles approaching from your right — even if you are driving straight on.',
    keyRule:
      'No signs, no lights, no markings: yield to traffic coming from your right and only proceed when the junction is clear.',
    diagram: 'right-before-left',
    difficulty: 2,
    steps: [
      {
        title: 'Recognise the open junction',
        detail:
          'Look for the absence of priority signs, stop lines and traffic lights. Play streets and residential areas often use right-before-left.',
      },
      {
        title: 'Slow down early',
        detail:
          'Approach at a speed that lets you stop if a vehicle appears from the right. Cover the brake if visibility is limited.',
      },
      {
        title: 'Look right, then left',
        detail:
          'Check the road to your right first, because that traffic has priority. Then check the left and ahead for cyclists and pedestrians.',
      },
      {
        title: 'Roll only when clear',
        detail:
          'If a vehicle is coming from the right, stop and let it pass. Do not wave it through — your priority does not remove its duty to be careful.',
      },
    ],
    mistakes: [
      'Assuming a wide road automatically has priority.',
      'Looking only left and pulling out into a car from the right.',
      'Stopping when you have priority and confusing the traffic behind.',
    ],
    examTips: [
      'The examiner will bring you to unsigned junctions deliberately. Say “right before left” out loud if it helps your routine.',
      'A vehicle from the right that is already in the junction has priority even if you arrived first.',
    ],
    rules: [
      'At junctions without priority signs, traffic from the right has priority (StVO §8).',
      'Right-before-left also applies at T-junctions unless signs say otherwise.',
    ],
    tags: ['priority', 'Rechts vor Links', 'junction', 'unsigned'],
  },
  {
    id: 'priority-road',
    category: 'junctions',
    title: 'Driving on a priority road',
    germanTerm: 'Vorfahrtstraße',
    summary:
      'The yellow diamond marks a priority road. You have priority at junctions along the road until a yield sign, stop sign or end-of-priority-road sign cancels it.',
    keyRule:
      'The priority-road sign gives you the right of way along the road — not the right to drive carelessly. Approach every junction ready to react.',
    diagram: 'priority-road',
    difficulty: 1,
    steps: [
      {
        title: 'Confirm the sign applies',
        detail:
          'The yellow diamond with a white border marks the priority road. It continues until a yield sign, stop sign or the end-of-priority-road sign with the diagonal stripe.',
      },
      {
        title: 'Keep your course predictable',
        detail:
          'Stay at a steady speed and do not swerve or hesitate. Other drivers expect you to continue.',
      },
      {
        title: 'Watch the side roads',
        detail:
          'Vehicles joining from the side must yield, but they may misjudge your speed. Be ready to brake if someone pulls out.',
      },
      {
        title: 'Look for pedestrians and cyclists',
        detail:
          'Priority applies to vehicles. Pedestrians at a zebra crossing and cyclists on a cycle crossing still have their own rules and may have priority.',
      },
    ],
    mistakes: [
      'Speeding up because of the sign and losing the ability to react.',
      'Forgetting that a traffic light overrides the priority sign.',
      'Missing the end-of-priority-road sign with the diagonal stripe.',
    ],
    examTips: [
      'Treat priority signs as information, not permission. The examiner wants to see anticipation.',
      'At a junction with both a priority sign and a traffic light, the light controls the junction when it is working.',
    ],
    rules: [
      'Priority signs regulate right of way at junctions (StVO §8).',
      'A priority road (Zeichen 306) continues until a yield sign, stop sign or end-of-priority sign.',
      'Traffic lights and police signals take precedence over priority signs.',
    ],
    tags: ['priority road', 'Vorfahrt', 'yellow diamond', 'junction'],
  },
  {
    id: 'yield-stop',
    category: 'junctions',
    title: 'Yield sign versus stop sign',
    germanTerm: 'Vorfahrt gewähren und Stoppschild',
    summary:
      'The inverted triangle means give way; the octagon means stop completely. Both require you to give priority to traffic on the crossing road, but only the stop sign demands a full stop at the line.',
    keyRule:
      'Triangle: slow, look, give way, continue if clear. Octagon: stop completely at the stop line, look both ways, then go.',
    diagram: 'yield-stop',
    difficulty: 2,
    steps: [
      {
        title: 'Read the sign early',
        detail:
          'An inverted red-and-white triangle (Vorfahrt gewähren) warns you that the crossing road has priority. An octagonal “STOP” sign requires a complete stop.',
      },
      {
        title: 'At a yield sign',
        detail:
          'Approach so that you can stop if necessary. Look left, right and ahead. You may keep rolling only if the road is clearly clear.',
      },
      {
        title: 'At a stop sign',
        detail:
          'Stop with the front of the car at the stop line — not before it unnecessarily and not past it. If there is no line, stop where you can see the crossing traffic.',
      },
      {
        title: 'Look and proceed',
        detail:
          'Look left, right and left again. Give way to vehicles, cyclists and pedestrians on the priority road before moving.',
      },
    ],
    mistakes: [
      'Rolling through a stop sign without coming to a complete standstill.',
      'Stopping too far back where visibility is poor.',
      'Only looking one way before entering the junction.',
    ],
    examTips: [
      'At a stop sign, the examiner must see the car come to a clear standstill — count “one, two” before moving.',
      'If visibility is blocked, creep forward carefully after stopping, but stop again if necessary.',
    ],
    rules: [
      'A stop sign requires a complete stop at the stop line (StVO §8).',
      'A yield sign requires you to give way but not necessarily to stop.',
    ],
    tags: ['yield', 'stop sign', 'priority', 'junction'],
  },
  {
    id: 'traffic-lights',
    category: 'junctions',
    title: 'Traffic lights and amber',
    germanTerm: 'Ampel und Gelbphase',
    summary:
      'Green means go if the way is clear. Amber means stop unless you are too close to stop safely. Red means stop at the line — and never enter a junction you cannot clear.',
    keyRule:
      'Amber is a stop signal, not a request to accelerate. Enter a junction only when your exit is free.',
    diagram: 'traffic-lights',
    difficulty: 2,
    steps: [
      {
        title: 'Approach with a plan',
        detail:
          'Ease off the accelerator as you approach. Read the light and the traffic ahead so you know whether you can clear the junction before it changes.',
      },
      {
        title: 'Green: go only if clear',
        detail:
          'Green gives you permission to proceed, but not priority over pedestrians or vehicles already in the junction. Check left and right for red-light runners.',
      },
      {
        title: 'Amber: stop if you can',
        detail:
          'If you can stop safely, stop. If you are already so close that braking would be dangerous, continue through. Do not speed up to beat the light.',
      },
      {
        title: 'Red: stop at the line',
        detail:
          'Stop behind the stop line and keep crossings and side roads clear. Wait for a clear green before moving.',
      },
      {
        title: 'Do not block the junction',
        detail:
          'Even on green, do not enter if traffic is backed up and your exit is blocked. Stop before the junction and wait.',
      },
    ],
    mistakes: [
      'Accelerating on amber and entering on red.',
      'Entering a green junction when the exit is blocked.',
      'Ignoring pedestrians or cyclists who still have a crossing phase.',
    ],
    examTips: [
      'Explain your reasoning on amber: “I can stop safely, so I stop.”',
      'Watch for a green arrow — it protects only the movement shown by the arrow.',
    ],
    rules: [
      'Traffic lights override priority signs (StVO §37).',
      'Junctions must not be blocked, even when the light is green.',
    ],
    tags: ['traffic light', 'Ampel', 'amber', 'red light', 'junction'],
  },
  {
    id: 't-junction',
    category: 'junctions',
    title: 'T-junctions and side roads',
    germanTerm: 'Einmündung',
    summary:
      'At a T-junction the terminating road must join the through road. Unless signs say otherwise, right-before-left applies, so traffic from the right on the through road has priority.',
    keyRule:
      'Identify which road ends, read the signs, then apply right-before-left if there are none.',
    diagram: 't-junction',
    difficulty: 2,
    steps: [
      {
        title: 'Identify the through road',
        detail:
          'The road that continues straight through is usually the through road. Check for priority signs, stop lines or traffic lights.',
      },
      {
        title: 'Approach slowly',
        detail:
          'Reduce speed so you can stop before the through road. Look for a safe gap in both directions.',
      },
      {
        title: 'Right before left',
        detail:
          'If there are no signs, give way to vehicles from the right on the through road. At a T where you join from the stem, that usually means traffic from the right.',
      },
      {
        title: 'Turn into the correct lane',
        detail:
          'Turn into the nearest lane in your direction, not across the oncoming lane. Check cyclists and pedestrians before turning.',
      },
    ],
    mistakes: [
      'Treating the through road as automatically priority at unsigned T-junctions.',
      'Turning wide into the oncoming lane.',
      'Stopping in the junction and blocking traffic.',
    ],
    examTips: [
      'Look for the line of the kerb — it tells you which road terminates.',
      'Use the same observation routine every time: right, left, ahead, shoulder.',
    ],
    rules: [
      'Right-before-left applies at T-junctions without priority signs (StVO §8).',
      'When turning, use the lane nearest the kerb in your direction.',
    ],
    tags: ['T-junction', 'Einmündung', 'priority', 'turning'],
  },
  {
    id: 'blocked-junction',
    category: 'junctions',
    title: 'Do not block a junction',
    germanTerm: 'Kreuzung nicht blockieren',
    summary:
      'A green light does not help if the road beyond the junction is full. You must wait before the junction until there is space to clear it completely.',
    keyRule:
      'Never enter a junction — even on green — unless you can leave it without stopping inside.',
    diagram: 'blocked-junction',
    difficulty: 2,
    steps: [
      {
        title: 'Look beyond the junction',
        detail:
          'Before crossing the stop line, check that the road on the far side has room for your car.',
      },
      {
        title: 'Stop before the line',
        detail:
          'If traffic is backed up, stop behind the stop line or the junction markings and wait.',
      },
      {
        title: 'Keep crossings clear',
        detail:
          'Do not stop on pedestrian crossings, cycle crossings or tram tracks. These must remain free even in slow traffic.',
      },
      {
        title: 'Move when the exit is free',
        detail:
          'When there is space beyond the junction, proceed and clear it fully. Do not follow the car in front blindly.',
      },
    ],
    mistakes: [
      'Following the car ahead into a full junction and getting stuck on the crossing.',
      'Assuming green means there must be space.',
      'Blocking a side road while waiting in a queue.',
    ],
    examTips: [
      'The examiner may deliberately create a queue. Hold back before the junction and show patience.',
      'Leave enough space behind the car in front to see its rear tyres on the road.',
    ],
    rules: [
      'Junctions must not be blocked (StVO §11 and §37).',
      'Pedestrian crossings and cycle crossings must not be obstructed.',
    ],
    tags: ['blocked junction', 'gridlock', 'green light', 'crossing'],
  },
  {
    id: 'railway-crossing',
    category: 'junctions',
    title: 'Railway crossings',
    germanTerm: 'Bahnübergang',
    summary:
      'Railway crossings demand a complete look and listen, even when the barriers are up. Never stop on the tracks and never try to beat a closing barrier.',
    keyRule:
      'Stop if the signal is red, the barrier is moving or the way beyond is blocked. Never enter unless you can clear the tracks completely.',
    diagram: 'railway-crossing',
    difficulty: 2,
    steps: [
      {
        title: 'Slow down and look',
        detail:
          'Approach at a speed that allows you to stop. Look both ways along the track and listen — trains can be silent and faster than they appear.',
      },
      {
        title: 'Obey signals and barriers',
        detail:
          'A red flashing light, a lowered or moving barrier, or a whistle means stop. Do not go around a barrier.',
      },
      {
        title: 'Check the far side',
        detail:
          'Only cross if there is room on the other side. If traffic is queued beyond the tracks, wait before them.',
      },
      {
        title: 'Cross without stopping',
        detail:
          'Drive over the tracks smoothly and do not change gear on the crossing. If the car stalls, get everyone out and move away immediately.',
      },
    ],
    mistakes: [
      'Crossing while the barrier is still rising.',
      'Stopping on the tracks because of traffic ahead.',
      'Relying on the barrier alone instead of looking and listening.',
    ],
    examTips: [
      'Treat every crossing as active. Look and listen even with open barriers.',
      'If the car stalls on the tracks, leave the vehicle and call the emergency number on the crossing sign.',
    ],
    rules: [
      'Railway crossing signals and barriers must be obeyed (StVO §19).',
      'Vehicles must not stop on railway tracks.',
    ],
    tags: ['railway', 'Bahnübergang', 'barrier', 'tracks'],
  },
  {
    id: 'left-turn-oncoming',
    category: 'left-turns',
    title: 'Left turn across oncoming traffic',
    germanTerm: 'Linksabbiegen mit Gegenverkehr',
    summary:
      'When turning left, you cross the oncoming lane. Position near the centre line, signal early, yield to oncoming vehicles and turn into the nearest lane.',
    keyRule:
      'Oncoming traffic goes first. Wait in the junction only if you can clear it safely when a gap appears.',
    diagram: 'left-turn',
    difficulty: 3,
    steps: [
      {
        title: 'Position and signal',
        detail:
          'Move to the left of your lane, close to the centre line without crossing it, and indicate left early.',
      },
      {
        title: 'Check oncoming traffic',
        detail:
          'Look ahead for oncoming cars, motorcycles and cyclists. Estimate the gap and your turning time before moving.',
      },
      {
        title: 'Give way and turn',
        detail:
          'Let oncoming traffic pass. When clear, turn into the nearest lane of the road you are entering and stay in your half of the road.',
      },
      {
        title: 'Watch the far side',
        detail:
          'Check for pedestrians crossing the road you enter and for cyclists coming from behind on your left.',
      },
    ],
    mistakes: [
      'Cutting the corner into the oncoming lane.',
      'Turning in front of an oncoming car and forcing it to brake.',
      'Forgetting the left shoulder check for cyclists.',
    ],
    examTips: [
      'Wait with the wheels straight so a rear impact does not push you into oncoming traffic.',
      'If oncoming traffic is heavy, wait before the junction rather than inside it when possible.',
    ],
    rules: [
      'Oncoming traffic has priority when turning left (StVO §9).',
      'Turn into the nearest lane in your direction.',
    ],
    tags: ['left turn', 'Linksabbiegen', 'oncoming traffic', 'junction'],
  },
  {
    id: 'left-turn-traffic-light',
    category: 'left-turns',
    title: 'Left turns at traffic lights',
    germanTerm: 'Linksabbiegen an der Ampel',
    summary:
      'A normal green light does not protect a left turn. Only a green arrow gives you priority over oncoming traffic; otherwise you must still yield.',
    keyRule:
      'Green arrow: protected left turn. Normal green: yield to oncoming traffic before turning.',
    diagram: 'left-turn-light',
    difficulty: 3,
    steps: [
      {
        title: 'Read the signal',
        detail:
          'Check whether the left turn has its own arrow. A green arrow means oncoming traffic is stopped for your movement. A plain green circle does not.',
      },
      {
        title: 'Position in the left-turn lane',
        detail:
          'Use the lane marked for left turns. Do not change lanes inside the junction.',
      },
      {
        title: 'With a green arrow',
        detail:
          'Proceed, but still check for pedestrians, cyclists and vehicles that may be clearing the junction.',
      },
      {
        title: 'With a plain green',
        detail:
          'Move into the junction if space allows, yield to oncoming traffic and complete the turn when there is a safe gap. Do not block the junction if you cannot clear it.',
      },
    ],
    mistakes: [
      'Treating a plain green as a protected left turn.',
      'Entering on red to wait for a gap.',
      'Missing a second left-turn lane and drifting across markings.',
    ],
    examTips: [
      'Name the difference out loud: “green arrow means protected; plain green means yield.”',
      'If the light turns amber while you are waiting to turn, complete the turn when safe rather than reversing.',
    ],
    rules: [
      'A green arrow gives priority only for the direction shown (StVO §37).',
      'Left turners must yield to oncoming traffic unless protected by an arrow.',
    ],
    tags: ['left turn', 'traffic light', 'green arrow', 'Ampel'],
  },
  {
    id: 'left-turn-one-way',
    category: 'left-turns',
    title: 'Left turn into a one-way street',
    germanTerm: 'Linksabbiegen in eine Einbahnstraße',
    summary:
      'When turning left into a one-way street, you may position at the left edge of your lane. The turn is shorter and there is no oncoming traffic in the street you enter.',
    keyRule:
      'Position left, signal left and turn tightly into the nearest lane — but still watch for cyclists and pedestrians.',
    diagram: 'left-turn-oneway',
    difficulty: 2,
    steps: [
      {
        title: 'Confirm the one-way street',
        detail:
          'Look for the blue one-way arrow sign at the entrance. Only then may you position near the left edge for the turn.',
      },
      {
        title: 'Position and signal',
        detail:
          'Move to the left side of your lane and indicate early. Do not swing right before turning.',
      },
      {
        title: 'Check for cyclists and pedestrians',
        detail:
          'Cyclists may be passing on your left or crossing the side road. Pedestrians crossing the entrance have priority when you turn.',
      },
      {
        title: 'Turn into the nearest lane',
        detail:
          'Enter the one-way street and stay in the nearest lane. Do not drift across to the far side.',
      },
    ],
    mistakes: [
      'Positioning left when the street is not actually one-way.',
      'Swinging wide to the right before the turn.',
      'Missing cyclists passing on the left.',
    ],
    examTips: [
      'Check the one-way sign before changing your position — guessing is a fail.',
      'A left turn into a one-way street is tighter than a normal left turn; keep speed low.',
    ],
    rules: [
      'In one-way streets, vehicles may position at the left edge when turning left (StVO §9).',
      'Pedestrians crossing the side road have priority when you turn in.',
    ],
    tags: ['left turn', 'one-way', 'Einbahnstraße', 'junction'],
  },
  {
    id: 'left-turn-island',
    category: 'left-turns',
    title: 'Left turn with a traffic island',
    germanTerm: 'Linksabbiegen mit Verkehrsinsel',
    summary:
      'A raised traffic island can separate the left-turn lane from oncoming traffic and make the junction feel protected. It does not give you priority: you must still yield to oncoming vehicles, cyclists and pedestrians.',
    keyRule:
      'The island separates traffic — it does not grant right of way. Wait for oncoming traffic before turning, and never drive over a raised island.',
    diagram: 'left-turn-island',
    difficulty: 3,
    steps: [
      {
        title: 'Read the layout early',
        detail:
          'Identify the marked left-turn lane, the island and the stop line. Use the lane marked for left turns; do not move onto the oncoming side just because an island separates the directions.',
      },
      {
        title: 'Position and signal',
        detail:
          'Move close to the island without touching or mounting it, indicate left and do a left shoulder check. Keep enough space so your car does not straddle the lane marking.',
      },
      {
        title: 'Wait where the junction stays clear',
        detail:
          'If oncoming traffic is present, wait behind the island or stop line. The island is not a waiting area for cars, and you must not block a pedestrian crossing or the oncoming lane while waiting.',
      },
      {
        title: 'Yield and turn',
        detail:
          'Let oncoming vehicles, cyclists and pedestrians pass. When there is a safe gap, turn into the nearest lane on the correct side of any island. Do not cut across the island or swing into the far lane.',
      },
      {
        title: 'Check the exit',
        detail:
          'Look for pedestrians crossing the road you enter and for cyclists coming from behind on your left. Complete the turn smoothly and cancel the indicator.',
      },
    ],
    mistakes: [
      'Assuming the island gives you priority over oncoming traffic.',
      'Driving over or stopping on the raised island.',
      'Positioning in the oncoming lane instead of the marked left-turn lane.',
      'Cutting the corner and turning into the wrong side of the road you enter.',
    ],
    examTips: [
      'The examiner still expects a clear look for oncoming traffic, even when the left-turn lane looks protected by an island.',
      'Treat the island as a hard obstacle, not as a refuge. If you cannot see past it, creep forward carefully without blocking the junction.',
      'If you are unsure whether the gap is safe, wait. Hesitation is better than forcing a turn across oncoming traffic.',
    ],
    rules: [
      'Left turners must yield to oncoming traffic even when their lane is separated by a traffic island or road marking (StVO §9).',
      'Raised traffic islands must not be driven over.',
      'Turn into the nearest lane in your direction and keep crossings clear.',
    ],
    tags: ['left turn', 'traffic island', 'Verkehrsinsel', 'oncoming traffic', 'priority'],
  },
  {
    id: 'left-turn-multilane',
    category: 'left-turns',
    title: 'Left turns from multiple lanes',
    germanTerm: 'Linksabbiegen auf mehrspurigen Straßen',
    summary:
      'When two or more lanes turn left, stay in your lane through the junction. Vehicles beside you turn in parallel, so drifting across the lane marking causes collisions.',
    keyRule:
      'Follow the lane markings through the junction and stay parallel to the vehicle beside you.',
    diagram: 'left-turn-multilane',
    difficulty: 3,
    steps: [
      {
        title: 'Choose the correct lane early',
        detail:
          'Read the arrows and signs on the road. Choose the lane that matches your destination and get into it before the junction.',
      },
      {
        title: 'Keep position',
        detail:
          'Stop in your lane, not across the marking. Keep the wheel straight while waiting.',
      },
      {
        title: 'Turn in parallel',
        detail:
          'Move off with the traffic beside you and follow the curve of your lane. Do not cut across into the other turning lane.',
      },
      {
        title: 'Watch the inner vehicle',
        detail:
          'A car in the inner lane may drift wide. Leave room and be ready to adjust if it does.',
      },
    ],
    mistakes: [
      'Changing lanes inside the junction.',
      'Cutting across the inner lane and hitting the car beside you.',
      'Choosing the wrong lane and forcing a late merge.',
    ],
    examTips: [
      'Look at the lane arrows well before the stop line — they tell you which lane leads where.',
      'Keep a visible gap to the car beside you while turning.',
    ],
    rules: [
      'Lane markings must be followed through the junction (StVO §9).',
      'Parallel turning vehicles must stay in their own lanes.',
    ],
    tags: ['left turn', 'multi-lane', 'lane discipline', 'junction'],
  },
  {
    id: 'right-turn-basic',
    category: 'right-turns',
    title: 'Turning right safely',
    germanTerm: 'Rechtsabbiegen',
    summary:
      'Right turns look simple but hide cyclists and pedestrians. Slow down, check mirrors and the right shoulder, then turn tightly into the nearest lane.',
    keyRule:
      'Mirror, signal, shoulder check, slow, turn into the nearest lane without swinging wide.',
    diagram: 'right-turn',
    difficulty: 2,
    steps: [
      {
        title: 'Prepare early',
        detail:
          'Check the interior and right mirrors, indicate right and reduce speed before the corner.',
      },
      {
        title: 'Shoulder check right',
        detail:
          'Look over your right shoulder for cyclists travelling straight ahead. They have priority over your turn.',
      },
      {
        title: 'Turn tightly',
        detail:
          'Keep close to the right kerb and turn into the nearest lane. Do not swing left before the turn.',
      },
      {
        title: 'Check the exit',
        detail:
          'Look for pedestrians crossing the side road and for vehicles already in the lane you are entering.',
      },
    ],
    mistakes: [
      'Swinging left before turning right, which endangers cyclists.',
      'Turning wide into the second lane.',
      'Skipping the right shoulder check.',
    ],
    examTips: [
      'Keep the speed low enough that you can stop for a pedestrian at the exit.',
      'The turn should be one smooth movement, not a series of corrections.',
    ],
    rules: [
      'Cyclists going straight have priority over a right-turning vehicle (StVO §9).',
      'Turn into the nearest lane in your direction.',
    ],
    tags: ['right turn', 'Rechtsabbiegen', 'cyclist', 'junction'],
  },
  {
    id: 'right-turn-cyclist',
    category: 'right-turns',
    title: 'The right hook and cyclists',
    germanTerm: 'Rechtsabbiegen mit Radverkehr',
    summary:
      'The right hook is one of the most dangerous urban manoeuvres: a car turns right across a cyclist going straight. Mirror and shoulder check are not optional.',
    keyRule:
      'A cyclist going straight beside you has priority. If you cannot see the cycle path clearly, do not turn.',
    diagram: 'right-cyclist',
    difficulty: 3,
    steps: [
      {
        title: 'Check early and often',
        detail:
          'Look in the right mirror and over your right shoulder well before the corner. Cyclists can be faster than they appear and may be hidden by pillars.',
      },
      {
        title: 'Let the cyclist pass',
        detail:
          'If a cyclist is beside or approaching, wait before turning. Do not overtake a cyclist just before a right turn.',
      },
      {
        title: 'Signal clearly',
        detail:
          'Indicate right early so the cyclist knows your intention. Do not assume they will stop.',
      },
      {
        title: 'Turn only when clear',
        detail:
          'When the cycle path is clear, turn tightly and check the exit for cyclists continuing along the road.',
      },
    ],
    mistakes: [
      'Overtaking a cyclist immediately before turning right.',
      'Checking only the mirror and not the blind spot.',
      'Turning while a cyclist is in the cycle path beside you.',
    ],
    examTips: [
      'Examiners watch this closely in town. Make the shoulder check obvious and wait if unsure.',
      'If a cyclist is close behind, slow early and let them pass before the junction.',
    ],
    rules: [
      'Cyclists going straight have priority over right-turning vehicles (StVO §9).',
      'When turning right, you must not endanger cyclists on the cycle path.',
    ],
    tags: ['right hook', 'cyclist', 'right turn', 'blind spot'],
  },
  {
    id: 'right-turn-pedestrian',
    category: 'right-turns',
    title: 'Right turns and pedestrians',
    germanTerm: 'Rechtsabbiegen und Fußgänger',
    summary:
      'Pedestrians crossing the side road you are turning into have priority. Approach slowly enough to stop, and do not block the crossing while waiting.',
    keyRule:
      'When turning into a side road, pedestrians crossing that road go first — including people still crossing from the far side.',
    diagram: 'right-pedestrian',
    difficulty: 2,
    steps: [
      {
        title: 'Approach slowly',
        detail:
          'Reduce speed before the corner so you can stop for a pedestrian. Look at both ends of the crossing.',
      },
      {
        title: 'Check the crossing',
        detail:
          'Look for pedestrians already on the crossing and for those about to step onto it. Make eye contact where possible.',
      },
      {
        title: 'Stop and wait',
        detail:
          'Stop before the crossing, not on it. Wait until pedestrians have crossed your path completely.',
      },
      {
        title: 'Turn when clear',
        detail:
          'Check for cyclists and vehicles, then turn into the nearest lane. Do not accelerate hard away from the corner.',
      },
    ],
    mistakes: [
      'Stopping on the pedestrian crossing while waiting for traffic.',
      'Turning while a pedestrian is still crossing the side road.',
      'Focusing only on the right and missing pedestrians from the left.',
    ],
    examTips: [
      'If a pedestrian hesitates, wait — do not wave them across, as other traffic may not stop.',
      'Keep the car behind the stop line even if the crossing looks empty.',
    ],
    rules: [
      'Pedestrians crossing the road you turn into have priority (StVO §9).',
      'Pedestrian crossings must be kept clear.',
    ],
    tags: ['pedestrian', 'right turn', 'crossing', 'priority'],
  },
  {
    id: 'right-turn-on-red',
    category: 'right-turns',
    title: 'Right turn on red and the green arrow',
    germanTerm: 'Rechtsabbiegen bei Rot und Grünpfeil',
    summary:
      'In Germany, red still means stop. You may turn right on red only where a green arrow sign allows it — and only after stopping completely at the line.',
    keyRule:
      'No green arrow: no right turn on red. With a green arrow: stop first, then yield to cross traffic and pedestrians.',
    diagram: 'right-red',
    difficulty: 3,
    steps: [
      {
        title: 'Identify the green arrow',
        detail:
          'A small green arrow sign beside the red light may permit a right turn. Without it, red means wait.',
      },
      {
        title: 'Stop completely',
        detail:
          'Stop at the stop line even if the road looks clear. The green arrow does not allow a rolling turn.',
      },
      {
        title: 'Yield to everyone',
        detail:
          'Give way to vehicles on the crossing road, cyclists and pedestrians. The arrow does not give you priority.',
      },
      {
        title: 'Turn carefully',
        detail:
          'When the way is clear, turn right into the nearest lane. If traffic is heavy, wait for the next green.',
      },
    ],
    mistakes: [
      'Turning right on red without a green arrow — a red-light offence.',
      'Rolling through the stop line instead of stopping fully.',
      'Assuming the arrow gives priority over crossing traffic.',
    ],
    examTips: [
      'The green arrow is rare. Look for it, but default to waiting on red.',
      'At a green arrow, the complete stop must be visible and the yield must be obvious.',
    ],
    rules: [
      'Right turn on red is allowed only with the green arrow sign (StVO §37).',
      'A full stop at the stop line is required before using the green arrow.',
    ],
    tags: ['right on red', 'green arrow', 'Grünpfeil', 'traffic light'],
  },
]
