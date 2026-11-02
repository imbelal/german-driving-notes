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
  {
    id: 'city-limit',
    name: 'Entering a built-up area',
    german: 'Ortstafel (Zeichen 310)',
    meaning:
      'The yellow town sign marks the start of a built-up area. Inside it the default limit is 50 km/h and tighter parking rules apply.',
    key: 'city-limit',
    group: 'Information',
  },
  {
    id: 'end-city',
    name: 'Leaving a built-up area',
    german: 'Ortstafel, Rückseite (Zeichen 311)',
    meaning:
      'The crossed-out town name marks the end of the built-up area. Outside it the default limit for cars is 100 km/h unless signs show otherwise.',
    key: 'end-city',
    group: 'Information',
  },
  {
    id: 'speed-80',
    name: 'Speed limit 80',
    german: 'Zulässige Höchstgeschwindigkeit 80',
    meaning:
      'Maximum speed is 80 km/h. The limit lasts until it is cancelled or a different limit appears.',
    key: 'speed-80',
    group: 'Speed',
  },
  {
    id: 'speed-100',
    name: 'Speed limit 100',
    german: 'Zulässige Höchstgeschwindigkeit 100',
    meaning:
      'Maximum speed is 100 km/h. This is also the default outside built-up areas for cars when no lower limit is posted.',
    key: 'speed-100',
    group: 'Speed',
  },
  {
    id: 'speed-130',
    name: 'Speed limit 130',
    german: 'Zulässige Höchstgeschwindigkeit 130',
    meaning:
      'Maximum speed is 130 km/h. On derestricted Autobahn sections 130 km/h is only the recommended speed, not a legal maximum.',
    key: 'speed-130',
    group: 'Speed',
  },
  {
    id: 'minimum-speed',
    name: 'Minimum speed',
    german: 'Vorgeschriebene Mindestgeschwindigkeit',
    meaning:
      'You must drive at least at the speed shown. Slow vehicles are not allowed on this stretch.',
    key: 'minimum-speed',
    group: 'Speed',
  },
  {
    id: 'end-restrictions',
    name: 'End of all route restrictions',
    german: 'Ende sämtlicher Streckenverbote',
    meaning:
      'All posted speed limits and overtaking bans on this stretch end. The general limits for the road type apply again.',
    key: 'end-restrictions',
    group: 'Speed',
  },
  {
    id: 'no-parking',
    name: 'No parking',
    german: 'Eingeschränktes Haltverbot',
    meaning:
      'You may stop briefly, for example to let someone in or out, but you may not park. Blue circle with one red diagonal.',
    key: 'no-parking',
    group: 'Prohibition',
  },
  {
    id: 'no-u-turn',
    name: 'No U-turn',
    german: 'Verbot des Wendens',
    meaning:
      'Turning around is prohibited here. Continue to a place where turning is allowed.',
    key: 'no-u-turn',
    group: 'Prohibition',
  },
  {
    id: 'end-no-overtaking',
    name: 'End of no-overtaking',
    german: 'Ende des Überholverbots',
    meaning:
      'The overtaking ban ends. Overtake only when the road ahead is clear and it is safe to do so.',
    key: 'end-no-overtaking',
    group: 'Prohibition',
  },
  {
    id: 'mandatory-left',
    name: 'Turn left only',
    german: 'Vorgeschriebene Fahrtrichtung links',
    meaning:
      'You must turn left here. The blue circle gives a mandatory direction.',
    key: 'mandatory-left',
    group: 'Mandatory',
  },
  {
    id: 'mandatory-right',
    name: 'Turn right only',
    german: 'Vorgeschriebene Fahrtrichtung rechts',
    meaning:
      'You must turn right here. The blue circle gives a mandatory direction.',
    key: 'mandatory-right',
    group: 'Mandatory',
  },
  {
    id: 'mandatory-straight',
    name: 'Straight ahead only',
    german: 'Vorgeschriebene Fahrtrichtung geradeaus',
    meaning:
      'You must continue straight ahead here. Turning is not allowed.',
    key: 'mandatory-straight',
    group: 'Mandatory',
  },
  {
    id: 'keep-right',
    name: 'Pass on the right',
    german: 'Vorgeschriebene Vorbeifahrt rechts',
    meaning:
      'Pass the obstacle or traffic island on the right-hand side.',
    key: 'keep-right',
    group: 'Mandatory',
  },
  {
    id: 'priority-over-oncoming',
    name: 'Priority over oncoming traffic',
    german: 'Vorrang vor dem Gegenverkehr',
    meaning:
      'You have priority through the narrow section. Oncoming traffic must wait for you.',
    key: 'priority-over-oncoming',
    group: 'Priority',
  },
  {
    id: 'roadworks',
    name: 'Roadworks',
    german: 'Arbeitsstelle',
    meaning:
      'Roadworks ahead. Slow down, watch for workers and changed lane guidance, and expect temporary signs.',
    key: 'roadworks',
    group: 'Warning',
  },
  {
    id: 'wild-animals',
    name: 'Wild animals',
    german: 'Wildwechsel',
    meaning:
      'Wild animals may cross. Slow down, watch the verges and be ready to stop, especially at dawn and dusk.',
    key: 'wild-animals',
    group: 'Warning',
  },
  {
    id: 'slippery-road',
    name: 'Slippery road',
    german: 'Schleudergefahr',
    meaning:
      'The road can be slippery, especially when wet. Reduce speed and avoid sudden steering or braking.',
    key: 'slippery-road',
    group: 'Warning',
  },
  {
    id: 'traffic-jam',
    name: 'Traffic jam',
    german: 'Stau',
    meaning:
      'Traffic may be queuing ahead. Slow down early, keep your distance and watch for the Rettungsgasse on motorways.',
    key: 'traffic-jam',
    group: 'Warning',
  },
  {
    id: 'two-way-traffic',
    name: 'Two-way traffic',
    german: 'Gegenverkehr',
    meaning:
      'Oncoming traffic is present again, for example after roadworks. Keep right and expect vehicles in the opposite lane.',
    key: 'two-way-traffic',
    group: 'Warning',
  },
  {
    id: 'bundesstrasse',
    name: 'Federal road',
    german: 'Bundesstraße',
    meaning:
      'A yellow route sign for a Bundesstraße. It helps with navigation; it does not change the speed limit by itself.',
    key: 'bundesstrasse',
    group: 'Information',
  },
  {
    id: 'autobahn-end',
    name: 'End of Autobahn',
    german: 'Ende der Autobahn',
    meaning:
      'Autobahn rules stop here. Expect a different road type, lower speeds and other traffic such as cyclists or pedestrians.',
    key: 'autobahn-end',
    group: 'Information',
  },
  {
    id: 'railway-cross',
    name: 'Railway crossing',
    german: 'Andreaskreuz',
    meaning:
      'Rail traffic has priority. Stop if a train is approaching, and never enter the crossing unless you can clear it.',
    key: 'railway-cross',
    group: 'Warning',
  },
]

export const signGroups = [
  'Priority',
  'Prohibition',
  'Mandatory',
  'Speed',
  'Information',
  'Warning',
] as const
