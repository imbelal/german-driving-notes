import type { SignEntry } from './types'

export const signs: SignEntry[] = [
  {
    id: 'priority-road',
    name: 'Priority road',
    german: 'Vorfahrtstraße',
    meaning:
      'You have priority along this road until a yield sign, stop sign or end-of-priority-road sign cancels it.',
    key: 'priority',
    group: 'Priority',
  },
  {
    id: 'end-priority',
    name: 'End of priority road',
    german: 'Ende der Vorfahrtstraße',
    meaning:
      'Your priority road ends here. From this point, the normal right-before-left rule applies unless another sign says otherwise.',
    key: 'end-priority',
    group: 'Priority',
  },
  {
    id: 'yield',
    name: 'Give way',
    german: 'Vorfahrt gewähren',
    meaning:
      'Give priority to traffic on the crossing road. Stop only if necessary — but be ready to stop.',
    key: 'yield',
    group: 'Priority',
  },
  {
    id: 'stop',
    name: 'Stop',
    german: 'Halt! Vorfahrt gewähren',
    meaning:
      'Come to a complete stop at the stop line, look both ways, then proceed when the road is clear.',
    key: 'stop',
    group: 'Priority',
  },
  {
    id: 'roundabout',
    name: 'Roundabout',
    german: 'Kreisverkehr',
    meaning:
      'Traffic in the roundabout has priority. Give way to vehicles coming from the left.',
    key: 'roundabout',
    group: 'Priority',
  },
  {
    id: 'no-entry',
    name: 'No entry',
    german: 'Verbot der Einfahrt',
    meaning:
      'Do not enter this road. It is usually the exit of a one-way street or a motorway slip road.',
    key: 'no-entry',
    group: 'Prohibition',
  },
  {
    id: 'one-way',
    name: 'One-way street',
    german: 'Einbahnstraße',
    meaning:
      'Traffic flows only in the direction of the arrow. You may position at the left edge to turn left.',
    key: 'one-way',
    group: 'Information',
  },
  {
    id: 'no-overtaking',
    name: 'No overtaking',
    german: 'Überholverbot',
    meaning:
      'Do not overtake multi-track vehicles. Overtaking cyclists and motorcycles may still be allowed if safe.',
    key: 'no-overtaking',
    group: 'Prohibition',
  },
  {
    id: 'speed-30',
    name: 'Speed limit 30',
    german: 'Zulässige Höchstgeschwindigkeit 30',
    meaning:
      'Maximum speed is 30 km/h until cancelled by another sign or a junction.',
    key: 'speed-30',
    group: 'Speed',
  },
  {
    id: 'speed-50',
    name: 'Speed limit 50',
    german: 'Zulässige Höchstgeschwindigkeit 50',
    meaning:
      'Maximum speed is 50 km/h. In built-up areas this is the default limit when no sign shows a lower one.',
    key: 'speed-50',
    group: 'Speed',
  },
  {
    id: 'end-speed',
    name: 'End of speed limit',
    german: 'Ende der Geschwindigkeitsbeschränkung',
    meaning:
      'The shown limit ends. The default limit for the road type applies again.',
    key: 'end-speed',
    group: 'Speed',
  },
  {
    id: 'pedestrian-crossing',
    name: 'Pedestrian crossing',
    german: 'Fußgängerüberweg',
    meaning:
      'Zebra crossing ahead. Pedestrians have priority once they indicate they want to cross.',
    key: 'pedestrian-crossing',
    group: 'Warning',
  },
  {
    id: 'school',
    name: 'School / children',
    german: 'Schule / Kinder',
    meaning:
      'Children may be crossing. Slow down and be ready for unpredictable movement.',
    key: 'school',
    group: 'Warning',
  },
  {
    id: 'autobahn',
    name: 'Autobahn',
    german: 'Bundesautobahn',
    meaning:
      'Motorway regulations apply: no pedestrians, cyclists or slow vehicles; keep right except to overtake.',
    key: 'autobahn',
    group: 'Information',
  },
  {
    id: 'no-stopping',
    name: 'No stopping',
    german: 'Absolutes Haltverbot',
    meaning:
      'You may not stop at all, not even briefly. Blue circle with a red cross and red border.',
    key: 'no-stopping',
    group: 'Prohibition',
  },
  {
    id: 'parking',
    name: 'Parking',
    german: 'Parken',
    meaning:
      'Parking is allowed in the marked area. Check for time limits and payment machines.',
    key: 'parking',
    group: 'Information',
  },
  {
    id: 'priority-junction',
    name: 'Priority at the next junction',
    german: 'Vorfahrt an der nächsten Kreuzung',
    meaning:
      'You have priority only at the next junction, not beyond it. This is sign 301, not the yellow priority-road diamond.',
    key: 'priority-next',
    group: 'Priority',
  },
  {
    id: 'traffic-light',
    name: 'Traffic light ahead',
    german: 'Lichtzeichenanlage',
    meaning:
      'Traffic lights ahead. Be ready to stop and watch for the amber phase.',
    key: 'traffic-light',
    group: 'Warning',
  },
]

export const signGroups = [
  'Priority',
  'Prohibition',
  'Speed',
  'Information',
  'Warning',
] as const
