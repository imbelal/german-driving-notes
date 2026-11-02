export interface QuickRuleSection {
  id: string
  title: string
  intro: string
  items: { label: string; value: string; note?: string }[]
}

export const speedLimits = [
  { road: 'Built-up areas', limit: '50 km/h', note: 'The default limit in town unless a sign shows a lower speed.' },
  { road: 'Outside built-up areas', limit: '100 km/h', note: 'Applies to cars and motorcycles unless a sign says otherwise.' },
  { road: 'Autobahn and dual carriageways', limit: '130 km/h', note: 'Recommended speed where no limit is posted. It is not a legal maximum.' },
  { road: 'Traffic-calming areas', limit: 'Walking pace', note: 'Often marked with a blue residential-area sign.' },
]

export const quickRuleSections: QuickRuleSection[] = [
  {
    id: 'distance',
    title: 'Following distance',
    intro: 'Keep enough space to stop even if the car ahead brakes suddenly.',
    items: [
      {
        label: 'Half the speedometer',
        value: 'Distance in metres ≈ half your speed in km/h',
        note: 'At 100 km/h that is about 50 m. At 50 km/h, about 25 m.',
      },
      {
        label: 'Time gap',
        value: 'At least 3 seconds in dry weather',
        note: 'Double it in rain; leave much more on snow and ice.',
      },
      {
        label: 'At traffic lights',
        value: 'Stop so you can see the rear tyres of the car ahead',
        note: 'This leaves room to steer around if it breaks down.',
      },
    ],
  },
  {
    id: 'alcohol',
    title: 'Alcohol, points and phone',
    intro: 'The limits that catch out learners and new drivers most often.',
    items: [
      {
        label: 'Novice and probationary drivers',
        value: '0.0‰',
        note: 'Applies during the probation period and to drivers under 21.',
      },
      {
        label: 'General alcohol limit',
        value: '0.5‰',
        note: 'From 0.3‰ there can already be consequences if you show signs of impairment.',
      },
      {
        label: 'Points',
        value: '8 points revoke the licence',
        note: 'Serious offences add points; some also bring a driving ban.',
      },
      {
        label: 'Phone',
        value: 'Hands-free only',
        note: 'Using a handheld phone while driving is an offence, even while waiting at a red light.',
      },
    ],
  },
  {
    id: 'equipment',
    title: 'Car equipment and tyres',
    intro: 'The basics that must be in the car and safe to use.',
    items: [
      {
        label: 'Mandatory equipment',
        value: 'Warning triangle, first-aid kit and warning vest',
        note: 'A vest for every occupant is strongly recommended.',
      },
      {
        label: 'Tyre tread',
        value: 'At least 1.6 mm',
        note: 'More is safer, especially in rain. Winter tyres are required in wintry conditions.',
      },
      {
        label: 'Lights',
        value: 'Dipped beam in rain, fog and darkness',
        note: 'Rear fog light only when visibility is below about 50 m.',
      },
      {
        label: 'Children',
        value: 'Child seat under 12 years or below 150 cm',
        note: 'The seat must be suitable for the child’s height and weight.',
      },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency numbers',
    intro: 'Save these before you need them.',
    items: [
      { label: 'Police', value: '110' },
      { label: 'Fire and ambulance', value: '112', note: 'Works across Europe and from any phone.' },
      { label: 'Breakdown service', value: 'Your provider’s number', note: 'Keep it in the car or phone.' },
    ],
  },
  {
    id: 'parking',
    title: 'Parking and stopping distances',
    intro: 'Where you must keep the road clear.',
    items: [
      { label: 'Junctions and pedestrian crossings', value: 'No parking within 5 m' },
      { label: 'Bus and tram stops', value: 'No parking within 15 m' },
      { label: 'Fire hydrants and driveways', value: 'Keep access clear' },
      { label: 'Pedestrian crossings', value: 'Never stop on the crossing' },
    ],
  },
]
