import type { QuizVisualId } from '../components/diagrams/quiz/QuizVisuals'
import { signs } from './signs'

export type QuizMode = 'mixed' | 'rules' | 'signs' | 'visual'
export type QuizTopic = 'priority' | 'turns' | 'autobahn' | 'safety' | 'manoeuvres' | 'rules' | 'signs'

export interface QuizQuestion {
  id: string
  topic: QuizTopic
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
  scenarioId?: string
  signKey?: string
  visual?: QuizVisualId
  link?: string
  linkLabel?: string
}

export const quizModeLabels: Record<QuizMode, string> = {
  mixed: 'Mixed quiz',
  rules: 'Road rules',
  signs: 'Traffic signs',
  visual: 'Visual situations',
}

export const manualQuestions: QuizQuestion[] = [
  {
    id: 'priority-right-before-left',
    topic: 'priority',
    prompt: 'At an unsigned junction, who has priority?',
    options: [
      'Traffic approaching from the right',
      'Traffic approaching from the left',
      'The vehicle on the wider road',
      'Whoever arrives first',
    ],
    correctIndex: 0,
    explanation:
      'At junctions without signs, markings or traffic lights, right before left applies (Rechts vor Links).',
    scenarioId: 'right-before-left',
  },
  {
    id: 'priority-diamond',
    topic: 'priority',
    prompt: 'You see a yellow diamond with a white border. What does it mean?',
    options: [
      'You have priority along this road until a sign cancels it',
      'You must stop at the next junction',
      'The road is a one-way street',
      'You are entering a 30 km/h zone',
    ],
    correctIndex: 0,
    explanation:
      'This is the priority-road sign (Vorfahrtstraße). It continues until a yield sign, stop sign or end-of-priority sign.',
    scenarioId: 'priority-road',
  },
  {
    id: 'priority-stop',
    topic: 'priority',
    prompt: 'What does the stop sign require?',
    options: [
      'A complete stop at the stop line, then proceed when clear',
      'Slow down and continue if no one is coming',
      'Stop only for buses',
      'Stop only when a traffic light is red',
    ],
    correctIndex: 0,
    explanation:
      'The stop sign requires a full standstill at the stop line. Look left, right and ahead before moving.',
    scenarioId: 'yield-stop',
  },
  {
    id: 'priority-roundabout',
    topic: 'priority',
    prompt: 'In a normal roundabout, who has priority?',
    options: [
      'Traffic already in the circle',
      'Traffic entering the circle',
      'Traffic from the right',
      'The largest vehicle',
    ],
    correctIndex: 0,
    explanation:
      'Traffic already circulating has priority. Signal right only when you are about to leave.',
    scenarioId: 'roundabout-entering',
  },
  {
    id: 'priority-blocked',
    topic: 'priority',
    prompt: 'The light is green but traffic beyond the junction is stopped. May you enter?',
    options: [
      'No, only if you can clear the junction completely',
      'Yes, green always means go',
      'Yes, if you are turning right',
      'Yes, but only after honking',
    ],
    correctIndex: 0,
    explanation:
      'Green does not help if your exit is blocked. Enter only when you can leave the junction without stopping inside it.',
    scenarioId: 'blocked-junction',
  },
  {
    id: 'turns-oncoming',
    topic: 'turns',
    prompt: 'Turning left across oncoming traffic: who goes first?',
    options: [
      'Oncoming traffic going straight or turning right',
      'You, because you indicated',
      'The car behind you',
      'Cyclists only if they are in your lane',
    ],
    correctIndex: 0,
    explanation:
      'A left turn crosses the oncoming lane, so oncoming vehicles have priority unless a green arrow protects your turn.',
    scenarioId: 'left-turn-oncoming',
  },
  {
    id: 'turns-plain-green',
    topic: 'turns',
    prompt: 'You have a plain green light and want to turn left. What applies?',
    options: [
      'You must still yield to oncoming traffic',
      'The turn is protected',
      'You may ignore oncoming traffic',
      'You must wait for a green arrow even if the road is clear',
    ],
    correctIndex: 0,
    explanation:
      'Only a green arrow protects a left turn. A plain green light still requires you to yield to oncoming traffic.',
    scenarioId: 'left-turn-traffic-light',
  },
  {
    id: 'turns-island',
    topic: 'turns',
    prompt: 'A raised island separates your left-turn lane from oncoming traffic. What changes?',
    options: [
      'Nothing about priority — you still yield to oncoming traffic',
      'The island gives you priority',
      'You may drive over it if the road is empty',
      'It makes the junction a roundabout',
    ],
    correctIndex: 0,
    explanation:
      'An island separates traffic but does not grant right of way. You must still wait for a safe gap and must not drive over it.',
    scenarioId: 'left-turn-island',
  },
  {
    id: 'turns-cyclist',
    topic: 'turns',
    prompt: 'You turn right and a cyclist is going straight beside you. Who has priority?',
    options: ['The cyclist', 'You', 'The faster vehicle', 'The car behind you'],
    correctIndex: 0,
    explanation:
      'A cyclist going straight has priority over a right-turning vehicle. Check the right shoulder before turning.',
    scenarioId: 'right-turn-cyclist',
  },
  {
    id: 'turns-pedestrian',
    topic: 'turns',
    prompt: 'You turn right into a side road with a pedestrian crossing. Who goes first?',
    options: [
      'Pedestrians crossing the side road',
      'You, if you indicate',
      'Cyclists only',
      'The car behind you',
    ],
    correctIndex: 0,
    explanation:
      'Pedestrians crossing the road you are turning into have priority. Stop before the crossing and wait until they are clear.',
    scenarioId: 'right-turn-pedestrian',
  },
  {
    id: 'turns-oneway',
    topic: 'turns',
    prompt: 'You turn left into a one-way street. Where do you position?',
    options: [
      'At the left edge of your lane',
      'At the right kerb',
      'In the oncoming lane',
      'In the middle of the crossing',
    ],
    correctIndex: 0,
    explanation:
      'In a one-way street you may position at the left edge for a left turn. Check the one-way sign before changing position.',
    scenarioId: 'left-turn-oneway',
  },
  {
    id: 'turns-multilane',
    topic: 'turns',
    prompt: 'Two lanes turn left in parallel. What must you do?',
    options: [
      'Stay in your lane and follow the markings through the junction',
      'Move to the inner lane mid-turn',
      'Turn into the far lane',
      'Use the oncoming lane if it is empty',
    ],
    correctIndex: 0,
    explanation:
      'Parallel turning vehicles must stay in their own lanes. Do not cut across the marking or the car beside you.',
    scenarioId: 'left-turn-multilane',
  },
  {
    id: 'turns-u-turn',
    topic: 'turns',
    prompt: 'Where is a U-turn forbidden?',
    options: [
      'On the Autobahn, in one-way streets, at crossings and in tunnels',
      'Only in towns',
      'Only at traffic lights',
      'Nowhere if you indicate',
    ],
    correctIndex: 0,
    explanation:
      'Turning around is forbidden where it would endanger traffic or is explicitly prohibited, including Autobahns, one-way streets, pedestrian crossings and tunnels.',
    scenarioId: 'u-turn-rules',
  },
  {
    id: 'autobahn-merge',
    topic: 'autobahn',
    prompt: 'Merging onto the Autobahn: who has priority?',
    options: ['Traffic already on the Autobahn', 'Merging traffic', 'The faster car', 'Trucks'],
    correctIndex: 0,
    explanation:
      'Traffic already on the Autobahn has priority. Use the acceleration lane to match speed and merge into a safe gap.',
    scenarioId: 'autobahn-merge',
  },
  {
    id: 'autobahn-rettungsgasse',
    topic: 'autobahn',
    prompt: 'When must you form the Rettungsgasse?',
    options: [
      'As soon as traffic slows or stops',
      'Only after seeing an emergency vehicle',
      'Only on three-lane sections',
      'Only after an accident',
    ],
    correctIndex: 0,
    explanation:
      'Form the rescue lane immediately when traffic slows, before you hear sirens. Do not wait for an emergency vehicle to appear.',
    scenarioId: 'rettungsgasse',
  },
  {
    id: 'autobahn-keep-right',
    topic: 'autobahn',
    prompt: 'On a multi-lane road with a free right lane, where should you drive?',
    options: ['In the right lane', 'In the middle lane', 'In the left lane', 'In any lane you prefer'],
    correctIndex: 0,
    explanation:
      'Keep right. Use the left lanes only for overtaking or when traffic density requires it, and return right when safe.',
    scenarioId: 'motorway-lane-change',
  },
  {
    id: 'autobahn-missed-exit',
    topic: 'autobahn',
    prompt: 'You miss your Autobahn exit. What do you do?',
    options: [
      'Continue to the next exit',
      'Reverse on the hard shoulder',
      'Turn around through the barrier',
      'Stop and wait for a gap',
    ],
    correctIndex: 0,
    explanation:
      'Continue to the next exit. Reversing or turning around on the Autobahn is forbidden and extremely dangerous.',
    scenarioId: 'autobahn-exit',
  },
  {
    id: 'safety-shoulder',
    topic: 'safety',
    prompt: 'When is the shoulder check required?',
    options: [
      'Before any change of direction, including turning and changing lane',
      'Only on the Autobahn',
      'Only at night',
      'Only when reversing',
    ],
    correctIndex: 0,
    explanation:
      'Make a visible shoulder check whenever you change your line of travel. Mirrors alone cannot cover the blind spot.',
    scenarioId: 'mirrors-blind-spot',
  },
  {
    id: 'safety-zebra',
    topic: 'safety',
    prompt: 'A pedestrian is waiting at a zebra crossing. What do you do?',
    options: [
      'Stop and let them cross',
      'Drive on if you are under 30 km/h',
      'Wave them across while moving',
      'Honk so they wait',
    ],
    correctIndex: 0,
    explanation:
      'Pedestrians have priority at a zebra crossing once they show they want to cross. Stop before the stripes and wait.',
    scenarioId: 'crosswalk-pedestrians',
  },
  {
    id: 'safety-school-bus',
    topic: 'safety',
    prompt: 'How do you pass a school bus with flashing hazard lights?',
    options: [
      'At walking speed and without overtaking',
      'At 50 km/h',
      'Overtake quickly',
      'Only if the bus is empty',
    ],
    correctIndex: 0,
    explanation:
      'When a school bus shows flashing hazard lights, pass at walking speed and do not overtake. Children may cross unexpectedly.',
    scenarioId: 'school-bus',
  },
  {
    id: 'safety-cyclist-distance',
    topic: 'safety',
    prompt: 'Minimum overtaking distance to a cyclist outside built-up areas?',
    options: ['2 m', '1 m', '0.5 m', '3 m'],
    correctIndex: 0,
    explanation:
      'Keep at least 2 m outside built-up areas, and 1.5 m in town. If you cannot keep that distance, wait behind.',
    scenarioId: 'overtaking-cyclist',
  },
  {
    id: 'safety-winter',
    topic: 'safety',
    prompt: 'When are winter tyres required?',
    options: [
      'In wintry road conditions',
      'From October to April every year',
      'Only on the Autobahn',
      'Only when it is snowing',
    ],
    correctIndex: 0,
    explanation:
      'Winter tyres are required in wintry conditions such as snow, ice, slush or frost. They are not tied to a fixed calendar period.',
    scenarioId: 'winter-driving',
  },
  {
    id: 'safety-alcohol',
    topic: 'safety',
    prompt: 'Alcohol limit for novice drivers during probation?',
    options: ['0.0‰', '0.5‰', '0.3‰', '1.1‰'],
    correctIndex: 0,
    explanation:
      'During probation and for drivers under 21, the limit is 0.0‰. The general limit is 0.5‰, with consequences from 0.3‰ if impaired.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'safety-phone',
    topic: 'safety',
    prompt: 'When may you use a handheld phone while driving?',
    options: ['Never — hands-free only', 'At a red light', 'In slow traffic', 'When the road is empty'],
    correctIndex: 0,
    explanation:
      'Using a handheld phone while driving is prohibited, even while waiting at a red light. Only hands-free use is allowed.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'safety-distance',
    topic: 'safety',
    prompt: 'What is the “half the speedometer” rule?',
    options: [
      'Following distance in metres is about half your speed in km/h',
      'Drive at half the speed limit',
      'Keep half a car length',
      'Use half the brake pressure',
    ],
    correctIndex: 0,
    explanation:
      'At 100 km/h keep about 50 m, at 80 km/h about 40 m. Increase the gap in rain, snow or ice.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'rules-default-outside',
    topic: 'rules',
    prompt: 'Default speed limit for cars outside built-up areas?',
    options: ['100 km/h', '80 km/h', '50 km/h', '130 km/h'],
    correctIndex: 0,
    explanation:
      'Cars and motorcycles may drive up to 100 km/h outside built-up areas unless a sign shows a lower limit.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'rules-autobahn-recommended',
    topic: 'rules',
    prompt: 'Recommended speed on derestricted Autobahn sections?',
    options: ['130 km/h', '100 km/h', '150 km/h', 'There is no recommendation'],
    correctIndex: 0,
    explanation:
      '130 km/h is the recommended speed where no limit is posted. It is not a legal maximum on derestricted sections.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'rules-parking-junction',
    topic: 'rules',
    prompt: 'How far from a junction must you not park?',
    options: ['5 m', '15 m', '1 m', '50 m'],
    correctIndex: 0,
    explanation:
      'Parking is prohibited within 5 m of junctions and pedestrian crossings, and within 15 m of bus and tram stops.',
    link: '/rules',
    linkLabel: 'Open rules and numbers',
  },
  {
    id: 'manoeuvre-emergency',
    topic: 'manoeuvres',
    prompt: 'Correct emergency braking in a car with ABS?',
    options: [
      'Press the brake hard and keep it pressed while steering',
      'Pump the brake pedal',
      'Brake gently only',
      'Use the handbrake',
    ],
    correctIndex: 0,
    explanation:
      'With ABS, press the brake firmly and continuously. The pedal may vibrate; keep the pressure and steer if needed.',
    scenarioId: 'emergency-braking',
  },
  {
    id: 'manoeuvre-warning-triangle',
    topic: 'manoeuvres',
    prompt: 'How far behind the car should the warning triangle be on the Autobahn?',
    options: ['About 200 m', '20 m', '50 m', '5 m'],
    correctIndex: 0,
    explanation:
      'Place the triangle well behind the vehicle: about 50 m in town, 100 m on country roads and 200 m on the Autobahn.',
    scenarioId: 'breakdown',
  },
  {
    id: 'manoeuvre-hill',
    topic: 'manoeuvres',
    prompt: 'Parking downhill: how should the wheels be turned?',
    options: ['Toward the kerb', 'Away from the kerb', 'Straight ahead', 'Whichever way they were'],
    correctIndex: 0,
    explanation:
      'Facing downhill, turn the wheels toward the kerb. Facing uphill, turn them away from the kerb so the tyre catches it if the car rolls.',
    scenarioId: 'hill-parking',
  },
  {
    id: 'manoeuvre-parallel',
    topic: 'manoeuvres',
    prompt: 'Parallel parking: when must you check the blind spot?',
    options: [
      'Before reversing and before opening the door',
      'Only after parking',
      'Only in the mirror',
      'Never if the road is empty',
    ],
    correctIndex: 0,
    explanation:
      'Check all around before each reversing movement and again before opening the door for cyclists and traffic.',
    scenarioId: 'parallel-parking',
  },
  {
    id: 'manoeuvre-right-red',
    topic: 'manoeuvres',
    prompt: 'Green arrow at a red light: what must you do before turning right?',
    options: [
      'Stop completely, then yield to traffic and pedestrians',
      'Turn without stopping',
      'Wait for a full green',
      'Honk and go',
    ],
    correctIndex: 0,
    explanation:
      'The green arrow allows a right turn on red only after a complete stop. You must yield to crossing traffic, cyclists and pedestrians.',
    scenarioId: 'right-turn-on-red',
  },
  {
    id: 'rules-amber',
    topic: 'rules',
    prompt: 'Amber light as you approach. What do you do?',
    options: ['Stop if you can do so safely', 'Accelerate', 'Always continue', 'Reverse'],
    correctIndex: 0,
    explanation:
      'Amber is a stop signal. Stop unless you are too close to stop safely; never speed up to beat the light.',
    scenarioId: 'traffic-lights',
  },
]

const visualQuestions: QuizQuestion[] = [
  {
    id: 'visual-right-before-left',
    topic: 'priority',
    prompt: 'At this unsigned junction, who has priority?',
    options: [
      'The car approaching from the right',
      'You, because you are going straight',
      'The car on the wider road',
      'Whoever arrives first',
    ],
    correctIndex: 0,
    explanation:
      'At an unsigned junction, right before left applies. The car coming from your right has priority.',
    scenarioId: 'right-before-left',
    visual: 'right-before-left',
  },
  {
    id: 'visual-priority-road',
    topic: 'priority',
    prompt: 'You are on the priority road. A car is waiting on the side road. What should you do?',
    options: [
      'Continue with care and watch for mistakes',
      'Stop and wave the car out',
      'Yield because you are turning later',
      'Move onto the side road',
    ],
    correctIndex: 0,
    explanation:
      'The yellow diamond gives you priority along the road, but you should still approach ready to react if a side-road driver misjudges your speed.',
    scenarioId: 'priority-road',
    visual: 'priority-road',
  },
  {
    id: 'visual-stop-sign',
    topic: 'priority',
    prompt: 'What must you do here?',
    options: [
      'Stop completely at the stop line, then look and proceed',
      'Slow down and continue if the crossing road looks clear',
      'Stop only if a car is coming',
      'Honk before entering',
    ],
    correctIndex: 0,
    explanation:
      'A stop sign requires a full standstill at the stop line. Look left, right and ahead before moving.',
    scenarioId: 'yield-stop',
    visual: 'stop-sign',
  },
  {
    id: 'visual-green-left',
    topic: 'turns',
    prompt: 'The light is plain green. You want to turn left. What applies?',
    options: [
      'You must yield to oncoming traffic',
      'You have a protected turn',
      'You may ignore oncoming traffic',
      'You must wait for a green arrow even when the road is clear',
    ],
    correctIndex: 0,
    explanation:
      'A plain green light does not protect a left turn. Wait for a safe gap in oncoming traffic before turning.',
    scenarioId: 'left-turn-traffic-light',
    visual: 'green-left',
  },
  {
    id: 'visual-green-arrow',
    topic: 'turns',
    prompt: 'The left-turn signal shows a green arrow. What does it mean?',
    options: [
      'Your left turn is protected by the signal',
      'You still have to yield to oncoming traffic',
      'You may only turn right',
      'You must stop before turning',
    ],
    correctIndex: 0,
    explanation:
      'A green arrow protects the movement shown. Oncoming traffic should be stopped, but still check for pedestrians and cyclists clearing the junction.',
    scenarioId: 'left-turn-traffic-light',
    visual: 'green-arrow',
  },
  {
    id: 'visual-blocked-junction',
    topic: 'priority',
    prompt: 'The light is green, but the road beyond the junction is full. What do you do?',
    options: [
      'Wait before the junction until you can clear it',
      'Enter because green means go',
      'Follow the car ahead into the junction',
      'Stop in the junction and wait',
    ],
    correctIndex: 0,
    explanation:
      'Never block a junction. Wait before the stop line until there is enough space to leave the junction completely.',
    scenarioId: 'blocked-junction',
    visual: 'blocked-junction',
  },
  {
    id: 'visual-left-island',
    topic: 'turns',
    prompt: 'You want to turn left past the raised island. Who has priority?',
    options: [
      'Oncoming traffic',
      'You, because the island separates the lanes',
      'The car behind you',
      'Cyclists only if they are on the road',
    ],
    correctIndex: 0,
    explanation:
      'The raised island does not give you priority. You must still yield to oncoming traffic and must not drive over the island.',
    scenarioId: 'left-turn-island',
    visual: 'left-island',
  },
  {
    id: 'visual-right-cyclist',
    topic: 'turns',
    prompt: 'You want to turn right. The cyclist is going straight. What should you do?',
    options: [
      'Wait and let the cyclist pass',
      'Turn before the cyclist reaches you',
      'Sound the horn and turn',
      'Move onto the cycle lane to block it',
    ],
    correctIndex: 0,
    explanation:
      'A cyclist going straight has priority over your right turn. Check the right shoulder and wait for a clear path.',
    scenarioId: 'right-turn-cyclist',
    visual: 'right-cyclist',
  },
  {
    id: 'visual-roundabout',
    topic: 'priority',
    prompt: 'You are entering the roundabout. Who has priority?',
    options: [
      'The car already in the circle',
      'You, because you are entering from the right',
      'The car behind you',
      'The larger vehicle',
    ],
    correctIndex: 0,
    explanation:
      'Traffic already circulating has priority. Enter only when there is a safe gap, and signal right when leaving.',
    scenarioId: 'roundabout-entering',
    visual: 'roundabout',
  },
  {
    id: 'visual-autobahn-merge',
    topic: 'autobahn',
    prompt: 'You are on the acceleration lane. What is the correct action?',
    options: [
      'Match the speed of traffic and merge into a safe gap',
      'Stop at the end of the lane and wait',
      'Merge immediately at low speed',
      'Move directly to the middle lane',
    ],
    correctIndex: 0,
    explanation:
      'Use the acceleration lane to match traffic speed. Traffic already on the Autobahn has priority, so merge into a gap without forcing anyone to brake.',
    scenarioId: 'autobahn-merge',
    visual: 'autobahn-merge',
  },
  {
    id: 'visual-rettungsgasse',
    topic: 'autobahn',
    prompt: 'Traffic has slowed and an emergency vehicle is approaching. What should you do?',
    options: [
      'Form the Rettungsgasse immediately',
      'Wait until the vehicle is directly behind you',
      'Use the hard shoulder to keep moving',
      'Stop in the left lane',
    ],
    correctIndex: 0,
    explanation:
      'Form the rescue lane as soon as traffic slows: the left lane moves left and all other lanes move right. Do not wait for sirens.',
    scenarioId: 'rettungsgasse',
    visual: 'rettungsgasse',
  },
  {
    id: 'visual-overtake-cyclist',
    topic: 'safety',
    prompt: 'You want to overtake the cyclist. The oncoming car is approaching. What do you do?',
    options: [
      'Stay behind and wait until the oncoming lane is clear',
      'Overtake quickly before the car arrives',
      'Pass closely and continue',
      'Use the horn to warn the cyclist',
    ],
    correctIndex: 0,
    explanation:
      'Do not overtake unless you can keep at least 1.5 m in town or 2 m outside while the oncoming lane is clear. Otherwise wait behind.',
    scenarioId: 'overtaking-cyclist',
    visual: 'overtake-cyclist',
  },
  {
    id: 'visual-crosswalk',
    topic: 'safety',
    prompt: 'A pedestrian is waiting at the zebra crossing. What do you do?',
    options: [
      'Stop and let them cross',
      'Continue if you are under 30 km/h',
      'Wave them across while moving',
      'Honk so they wait',
    ],
    correctIndex: 0,
    explanation:
      'Pedestrians have priority at a zebra crossing once they show they want to cross. Stop before the stripes and wait.',
    scenarioId: 'crosswalk-pedestrians',
    visual: 'crosswalk',
  },
  {
    id: 'visual-school-bus',
    topic: 'safety',
    prompt: 'The school bus has flashing hazard lights. How do you pass?',
    options: [
      'At walking speed and without overtaking',
      'At 50 km/h',
      'Overtake quickly before children appear',
      'Only if the bus is empty',
    ],
    correctIndex: 0,
    explanation:
      'When a school bus shows flashing hazard lights, pass at walking speed and do not overtake. Children may cross unexpectedly.',
    scenarioId: 'school-bus',
    visual: 'school-bus',
  },
  {
    id: 'visual-railway',
    topic: 'safety',
    prompt: 'The barrier is closed. What do you do?',
    options: [
      'Stop before the tracks and wait',
      'Drive around the barrier',
      'Cross quickly if no train is visible',
      'Stop on the tracks and check',
    ],
    correctIndex: 0,
    explanation:
      'A closed barrier means stop. Never drive around it or stop on the tracks; wait until the crossing is fully open.',
    scenarioId: 'railway-crossing',
    visual: 'railway-crossing',
  },
  {
    id: 'visual-emergency',
    topic: 'manoeuvres',
    prompt: 'A pedestrian steps into the road ahead. What is your first reaction?',
    options: [
      'Brake hard and keep steering under control',
      'Swerve into the oncoming lane',
      'Sound the horn and continue',
      'Release the accelerator only',
    ],
    correctIndex: 0,
    explanation:
      'Brake firmly and immediately. Keep both hands on the wheel and steer around the hazard only if there is space and control.',
    scenarioId: 'emergency-braking',
    visual: 'emergency',
  },
]

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const options = shuffle(
    question.options.map((text, index) => ({ text, correct: index === question.correctIndex })),
  )
  return {
    ...question,
    options: options.map((option) => option.text),
    correctIndex: options.findIndex((option) => option.correct),
  }
}

function buildSignQuestion(sign: (typeof signs)[number]): QuizQuestion {
  const distractors = shuffle(signs.filter((item) => item.id !== sign.id))
    .slice(0, 3)
    .map((item) => item.name)
  const options = shuffle([sign.name, ...distractors])
  return {
    id: `sign-${sign.id}`,
    topic: 'signs',
    prompt: 'Which traffic sign is shown?',
    options,
    correctIndex: options.indexOf(sign.name),
    explanation: `${sign.name} (${sign.german}): ${sign.meaning}`,
    signKey: sign.key,
    link: '/signs',
    linkLabel: 'Open traffic sign reference',
  }
}

export function buildQuiz(mode: QuizMode, count = 10): QuizQuestion[] {
  if (mode === 'visual') {
    return shuffle(visualQuestions)
      .slice(0, count)
      .map(shuffleQuestionOptions)
  }

  if (mode === 'signs') {
    return shuffle(signs)
      .slice(0, count)
      .map(buildSignQuestion)
      .map(shuffleQuestionOptions)
  }

  if (mode === 'rules') {
    return shuffle(manualQuestions)
      .slice(0, count)
      .map(shuffleQuestionOptions)
  }

  const visualCount = Math.min(3, count)
  const signCount = Math.min(3, count - visualCount)
  const ruleCount = count - visualCount - signCount
  const rules = shuffle(manualQuestions).slice(0, ruleCount).map(shuffleQuestionOptions)
  const signQuestions = shuffle(signs)
    .slice(0, signCount)
    .map(buildSignQuestion)
    .map(shuffleQuestionOptions)
  const visuals = shuffle(visualQuestions).slice(0, visualCount).map(shuffleQuestionOptions)

  return shuffle([...rules, ...signQuestions, ...visuals])
}
