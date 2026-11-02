export interface TechnicalQuestion {
  id: string
  kind: 'show' | 'tell'
  questionDe: string
  questionEn: string
  answerDe: string
  answerEn: string
}

export interface TechnicalSection {
  id: string
  title: string
  description: string
  items: TechnicalQuestion[]
}

export const technicalSections: TechnicalSection[] = [
  {
    id: 'before',
    title: 'Before you drive',
    description: 'Cockpit setup, safety equipment and the pre-drive check.',
    items: [
      {
        id: 'seat',
        kind: 'show',
        questionDe: 'Bitte zeigen Sie mir, wie Sie den Sitz einstellen.',
        questionEn: 'Show me how you adjust the seat.',
        answerDe:
          'Ich sitze tief und aufrecht. Die Kupplung lässt sich mit leicht gebeugtem Knie ganz durchtreten, und die Kopfstütze ist auf Kopfhöhe eingestellt.',
        answerEn:
          'I sit deep and upright. I can press the clutch fully with a slightly bent knee, and the head restraint is level with my head.',
      },
      {
        id: 'mirrors',
        kind: 'show',
        questionDe: 'Wie stellen Sie die Spiegel ein?',
        questionEn: 'How do you adjust the mirrors?',
        answerDe:
          'Der Innenspiegel zeigt das ganze Heckfenster. In den Außenspiegeln sehe ich den Horizont in der Mitte und einen kleinen Teil meines eigenen Fahrzeugs.',
        answerEn:
          'The interior mirror shows the whole rear window. In the side mirrors the horizon is in the middle and a small part of my own car is visible.',
      },
      {
        id: 'warning-triangle',
        kind: 'show',
        questionDe: 'Wo ist das Warndreieck?',
        questionEn: 'Where is the warning triangle?',
        answerDe: 'Das Warndreieck befindet sich im Kofferraum und ist von außen schnell erreichbar.',
        answerEn: 'The warning triangle is in the boot and can be reached quickly from outside.',
      },
      {
        id: 'first-aid',
        kind: 'show',
        questionDe: 'Wo ist der Verbandskasten?',
        questionEn: 'Where is the first-aid kit?',
        answerDe: 'Der Verbandskasten liegt im Kofferraum oder unter dem Beifahrersitz.',
        answerEn: 'The first-aid kit is in the boot or under the passenger seat.',
      },
      {
        id: 'warning-vest',
        kind: 'show',
        questionDe: 'Wo ist die Warnweste?',
        questionEn: 'Where is the warning vest?',
        answerDe:
          'Die Warnweste liegt griffbereit im Fahrzeug, zum Beispiel im Handschuhfach oder in der Fahrertür.',
        answerEn:
          'The warning vest is kept within reach in the car, for example in the glovebox or the driver’s door.',
      },
      {
        id: 'safety-equipment',
        kind: 'tell',
        questionDe: 'Was gehört zur Sicherheitsausrüstung?',
        questionEn: 'What safety equipment is required?',
        answerDe:
          'Zur Pflichtausrüstung gehören Warndreieck, Verbandskasten und Warnweste. Ein Feuerlöscher ist für Pkw nicht vorgeschrieben.',
        answerEn:
          'The mandatory equipment is a warning triangle, first-aid kit and warning vest. A fire extinguisher is not required in a passenger car.',
      },
      {
        id: 'pre-drive-check',
        kind: 'tell',
        questionDe: 'Was machen Sie vor Fahrtantritt?',
        questionEn: 'What do you check before driving off?',
        answerDe:
          'Ich prüfe Reifen, Beleuchtung, Flüssigkeiten, Spiegel, Sitz und Sicherheitsgurt. Ich achte auf Warnleuchten und Hindernisse rund um das Fahrzeug.',
        answerEn:
          'I check the tyres, lights, fluids, mirrors, seat and seat belt. I watch for warning lights and obstacles around the car.',
      },
      {
        id: 'wipers-washer',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Scheibenwischer und die Waschanlage?',
        questionEn: 'How do you check the wipers and washer system?',
        answerDe:
          'Ich prüfe die Wischerblätter auf Schäden, den Füllstand der Waschanlage und die Einstellung der Düsen.',
        answerEn:
          'I check the wiper blades for damage, the washer fluid level and the alignment of the nozzles.',
      },
    ],
  },
  {
    id: 'lights',
    title: 'Lights and visibility',
    description: 'Light controls, signalling and how to check the lamps.',
    items: [
      {
        id: 'dipped-beam',
        kind: 'show',
        questionDe: 'Bitte schalten Sie das Abblendlicht ein.',
        questionEn: 'Turn on the dipped beam, please.',
        answerDe:
          'Ich drehe den Lichtschalter auf Abblendlicht. Die blaue Fernlichtleuchte darf nicht leuchten.',
        answerEn:
          'I turn the light switch to dipped beam. The blue main-beam indicator must not be on.',
      },
      {
        id: 'main-beam',
        kind: 'show',
        questionDe: 'Bitte schalten Sie das Fernlicht ein.',
        questionEn: 'Turn on the main beam, please.',
        answerDe:
          'Ich schalte das Fernlicht nur ein, wenn die Straße frei ist und niemand geblendet wird. Bei Gegenverkehr schalte ich rechtzeitig ab.',
        answerEn:
          'I use main beam only when the road is clear and nobody is dazzled. I dip the lights early for oncoming traffic.',
      },
      {
        id: 'rear-fog',
        kind: 'tell',
        questionDe: 'Wann benutzen Sie die Nebelschlussleuchte?',
        questionEn: 'When do you use the rear fog light?',
        answerDe:
          'Die Nebelschlussleuchte darf ich nur bei Sichtweite unter 50 Metern einschalten, nicht bei normalem Regen.',
        answerEn:
          'The rear fog light may only be used when visibility is below 50 metres, not in normal rain.',
      },
      {
        id: 'brake-lights',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Bremsleuchten?',
        questionEn: 'How do you check the brake lights?',
        answerDe:
          'Ich lasse die Bremsleuchten von einer zweiten Person prüfen oder nutze eine Spiegelung, zum Beispiel an einer Wand.',
        answerEn:
          'I have a second person check the brake lights or use a reflection, for example in a wall or window.',
      },
      {
        id: 'indicators',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Blinker?',
        questionEn: 'How do you check the indicators?',
        answerDe: 'Ich betätige den Blinker und kontrolliere alle Leuchten rundum, notfalls mit Hilfe.',
        answerEn: 'I operate the indicator and check all the lamps around the car, with help if needed.',
      },
      {
        id: 'lights-alone',
        kind: 'tell',
        questionDe: 'Wie prüfen Sie die Beleuchtung allein?',
        questionEn: 'How do you check the lights on your own?',
        answerDe:
          'Ich nutze eine Wand, ein Schaufenster oder eine andere Reflexion und prüfe der Reihe nach Abblendlicht, Fernlicht, Blinker, Brems- und Rückleuchten.',
        answerEn:
          'I use a wall, shop window or another reflection and check dipped beam, main beam, indicators, brake lights and rear lights one after another.',
      },
    ],
  },
  {
    id: 'tyres',
    title: 'Tyres, brakes and wheels',
    description: 'Pressure, tread, brake checks and changing a wheel.',
    items: [
      {
        id: 'tyre-pressure',
        kind: 'tell',
        questionDe: 'Wie prüfen Sie den Reifendruck?',
        questionEn: 'How do you check the tyre pressure?',
        answerDe:
          'Ich prüfe den Druck bei kalten Reifen mit einem Messgerät. Der Wert muss der Herstellerangabe entsprechen, auch für das Reserverad.',
        answerEn:
          'I check the pressure when the tyres are cold with a gauge. It must match the manufacturer’s figure, including the spare wheel.',
      },
      {
        id: 'tread-depth',
        kind: 'tell',
        questionDe: 'Wie viel Profiltiefe muss ein Reifen haben?',
        questionEn: 'What is the minimum tyre tread depth?',
        answerDe: 'Mindestens 1,6 Millimeter.',
        answerEn: 'At least 1.6 millimetres.',
      },
      {
        id: 'tread-check',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Profiltiefe?',
        questionEn: 'How do you check the tread depth?',
        answerDe:
          'Ich nutze ein Profiltiefenmessgerät oder die Verschleißanzeiger im Profil. Gemessen wird in den Hauptprofilrillen.',
        answerEn:
          'I use a tread depth gauge or the wear indicators in the tread. I measure in the main grooves.',
      },
      {
        id: 'damaged-tyre',
        kind: 'tell',
        questionDe: 'Woran erkennen Sie einen beschädigten Reifen?',
        questionEn: 'How do you recognise a damaged tyre?',
        answerDe:
          'Ich achte auf Schnitte, Beulen, Risse, Fremdkörper und ungleichmäßige Abnutzung an Lauffläche und Flanke.',
        answerEn:
          'I look for cuts, bulges, cracks, foreign objects and uneven wear on the tread and sidewall.',
      },
      {
        id: 'brake-check',
        kind: 'tell',
        questionDe: 'Wie prüfen Sie die Bremsen?',
        questionEn: 'How do you check the brakes?',
        answerDe:
          'Ich prüfe den Pedalweg und den Druckpunkt, den Bremsflüssigkeitsstand und ob das Fahrzeug beim Bremsen geradeaus läuft.',
        answerEn:
          'I check pedal travel and feel, the brake fluid level and whether the car brakes in a straight line.',
      },
      {
        id: 'brake-fluid',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Bremsflüssigkeit?',
        questionEn: 'How do you check the brake fluid?',
        answerDe:
          'Ich kontrolliere den Stand zwischen MIN und MAX und lasse die Flüssigkeit nach Herstellervorgabe wechseln.',
        answerEn:
          'I check the level between MIN and MAX and have the fluid changed according to the manufacturer’s schedule.',
      },
      {
        id: 'wheel-change',
        kind: 'tell',
        questionDe: 'Wie wechseln Sie ein Rad?',
        questionEn: 'How do you change a wheel?',
        answerDe:
          'Handbremse an, Gang einlegen, Rad vorne und hinten sichern, Radmuttern lösen, Fahrzeug anheben, Rad wechseln und Muttern über Kreuz festziehen.',
        answerEn:
          'Apply the parking brake, select a gear, chock the wheel diagonally opposite, loosen the bolts, raise the car, change the wheel and tighten the bolts in a cross pattern.',
      },
      {
        id: 'puncture',
        kind: 'tell',
        questionDe: 'Was machen Sie bei einer Reifenpanne?',
        questionEn: 'What do you do if you get a puncture?',
        answerDe:
          'Warnblinklicht an, Fahrzeug aus dem Verkehrsbereich bringen, Warnweste anziehen, Warndreieck aufstellen und Hilfe rufen.',
        answerEn:
          'Switch on the hazard lights, get the car out of the traffic area, put on the warning vest, set up the triangle and call for help.',
      },
    ],
  },
  {
    id: 'bonnet',
    title: 'Under the bonnet',
    description: 'Fluids, battery, fuses and the main engine warning lights.',
    items: [
      {
        id: 'open-bonnet',
        kind: 'show',
        questionDe: 'Bitte öffnen Sie die Motorhaube.',
        questionEn: 'Open the bonnet, please.',
        answerDe:
          'Ich ziehe den Entriegelungshebel im Innenraum, öffne die Haube und sichere sie mit der Gasdruckfeder oder der Stange.',
        answerEn:
          'I pull the release lever inside the car, open the bonnet and secure it with the gas strut or the support rod.',
      },
      {
        id: 'oil-level',
        kind: 'show',
        questionDe: 'Wie prüfen Sie den Ölstand?',
        questionEn: 'How do you check the oil level?',
        answerDe:
          'Das Fahrzeug steht eben, der Motor ist aus. Ich ziehe den Messstab, wische ihn ab, stecke ihn wieder ein und lese den Stand zwischen MIN und MAX ab.',
        answerEn:
          'The car is level and the engine is off. I pull the dipstick, wipe it, insert it again and read the level between MIN and MAX.',
      },
      {
        id: 'coolant',
        kind: 'show',
        questionDe: 'Wie prüfen Sie das Kühlmittel?',
        questionEn: 'How do you check the coolant?',
        answerDe:
          'Ich prüfe den Stand nur bei kaltem Motor am Ausgleichsbehälter zwischen MIN und MAX. Bei heißem Motor öffne ich den Deckel nicht.',
        answerEn:
          'I check the level only when the engine is cold at the expansion tank between MIN and MAX. I never open the cap when the engine is hot.',
      },
      {
        id: 'washer-fluid',
        kind: 'show',
        questionDe: 'Wie prüfen Sie die Scheibenwaschflüssigkeit?',
        questionEn: 'How do you check the washer fluid?',
        answerDe:
          'Ich prüfe den Füllstand des Scheibenwaschbehälters und fülle bei Bedarf mit Scheibenwaschmittel auf.',
        answerEn:
          'I check the washer fluid reservoir and top it up with screen wash when needed.',
      },
      {
        id: 'battery',
        kind: 'show',
        questionDe: 'Wo ist die Batterie und wie prüfen Sie sie?',
        questionEn: 'Where is the battery and how do you check it?',
        answerDe:
          'Die Batterie sitzt im Motorraum oder unter dem Kofferraumboden. Ich prüfe die Pole auf Korrosion und den Halt der Batterie.',
        answerEn:
          'The battery is in the engine bay or under the boot floor. I check the terminals for corrosion and make sure the battery is secure.',
      },
      {
        id: 'fuse-box',
        kind: 'show',
        questionDe: 'Wo ist der Sicherungskasten?',
        questionEn: 'Where is the fuse box?',
        answerDe: 'Der Sicherungskasten ist im Innenraum oder im Motorraum. Ich prüfe die Belegung im Handbuch.',
        answerEn:
          'The fuse box is in the interior or the engine bay. I check the fuse layout in the owner’s manual.',
      },
      {
        id: 'oil-pressure-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Öldruck-Warnleuchte?',
        questionEn: 'What does the oil pressure warning light mean?',
        answerDe:
          'Die rote Öldruckleuchte bedeutet: sofort anhalten und den Motor abstellen. Ich prüfe den Ölstand und rufe Hilfe, wenn der Druck nicht stimmt.',
        answerEn:
          'The red oil pressure light means stop immediately and switch off the engine. I check the oil level and call for help if the pressure is not right.',
      },
      {
        id: 'charging-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Ladekontrollleuchte?',
        questionEn: 'What does the battery charging light mean?',
        answerDe:
          'Die Ladekontrollleuchte bedeutet, dass die Lichtmaschine die Batterie nicht lädt. Ich fahre nicht weiter und lasse die Ursache prüfen.',
        answerEn:
          'The charging light means the alternator is not charging the battery. I do not continue driving and have the cause checked.',
      },
    ],
  },
  {
    id: 'warning',
    title: 'Warning lights',
    description: 'What the most common dashboard symbols mean and what to do.',
    items: [
      {
        id: 'brake-warning-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Bremsen-Warnleuchte?',
        questionEn: 'What does the brake warning light mean?',
        answerDe:
          'Die rote Bremsenleuchte kann die angezogene Handbremse, zu wenig Bremsflüssigkeit oder einen Bremsdefekt anzeigen. Ich prüfe die Handbremse und halte bei Zweifel an.',
        answerEn:
          'The red brake light can mean the parking brake is on, the brake fluid is low or there is a brake fault. I check the parking brake and stop if in doubt.',
      },
      {
        id: 'abs-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die ABS-Warnleuchte?',
        questionEn: 'What does the ABS warning light mean?',
        answerDe:
          'Die gelbe ABS-Leuchte zeigt einen Fehler im Antiblockiersystem. Das Fahrzeug bleibt bremsbar, aber ich passe die Fahrweise an und lasse den Fehler prüfen.',
        answerEn:
          'The yellow ABS light indicates a fault in the anti-lock braking system. The car can still brake, but I adapt my driving and have the fault checked.',
      },
      {
        id: 'esp-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die ESP-Warnleuchte?',
        questionEn: 'What does the ESP warning light mean?',
        answerDe:
          'Die ESP-Leuchte zeigt einen Eingriff oder einen Fehler im Stabilitätsprogramm. Ich fahre vorsichtig und lasse die Ursache prüfen.',
        answerEn:
          'The ESP light shows that the stability programme is active or has a fault. I drive carefully and have the cause checked.',
      },
      {
        id: 'engine-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Motor-Warnleuchte?',
        questionEn: 'What does the engine warning light mean?',
        answerDe:
          'Die gelbe Motorleuchte zeigt einen Fehler in der Motorsteuerung oder Abgasreinigung. Ich fahre vorsichtig und lasse den Fehler auslesen.',
        answerEn:
          'The yellow engine light indicates a fault in engine management or emissions control. I drive carefully and have the fault read out.',
      },
      {
        id: 'tyre-pressure-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Reifendruck-Warnleuchte?',
        questionEn: 'What does the tyre pressure warning light mean?',
        answerDe:
          'Die Reifendruckleuchte zeigt Druckverlust oder einen Sensorfehler. Ich prüfe den Reifendruck und suche nach Beschädigungen.',
        answerEn:
          'The tyre pressure light indicates pressure loss or a sensor fault. I check the pressures and look for damage.',
      },
      {
        id: 'coolant-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Kühlmittel-Warnleuchte?',
        questionEn: 'What does the coolant warning light mean?',
        answerDe:
          'Die Kühlmittel-Warnleuchte zeigt zu wenig Kühlmittel oder Überhitzung. Ich halte an, lasse den Motor abkühlen und prüfe den Stand nicht bei heißem Motor.',
        answerEn:
          'The coolant warning light indicates low coolant or overheating. I stop, let the engine cool and never check the level when the engine is hot.',
      },
      {
        id: 'airbag-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Airbag-Warnleuchte?',
        questionEn: 'What does the airbag warning light mean?',
        answerDe:
          'Die Airbag-Leuchte zeigt einen Fehler im Rückhaltesystem. Das Fahrzeug sollte nicht weitergefahren werden, bis der Fehler geprüft ist.',
        answerEn:
          'The airbag light indicates a fault in the restraint system. The car should not be driven until the fault has been checked.',
      },
      {
        id: 'dpf-light',
        kind: 'tell',
        questionDe: 'Was bedeutet die Partikelfilter-Warnleuchte?',
        questionEn: 'What does the diesel particulate filter warning light mean?',
        answerDe:
          'Die Partikelfilter-Leuchte zeigt eine Beladung des Filters. Ich fahre nach Herstellervorgabe weiter, damit die Regeneration stattfinden kann, und vermeide kurze Stopps.',
        answerEn:
          'The particulate filter light indicates that the filter is loaded. I continue driving as the manufacturer specifies so regeneration can take place, and avoid short stops.',
      },
    ],
  },
  {
    id: 'breakdown',
    title: 'Breakdown, safety and eco driving',
    description: 'What to do when something goes wrong, and how to drive efficiently.',
    items: [
      {
        id: 'breakdown',
        kind: 'tell',
        questionDe: 'Was machen Sie bei einer Panne?',
        questionEn: 'What do you do if you break down?',
        answerDe:
          'Warnblinklicht an, Fahrzeug aus dem Verkehrsbereich bringen, Warnweste anziehen, Warndreieck aufstellen und hinter der Leitplanke Hilfe rufen.',
        answerEn:
          'Switch on the hazard lights, get the car out of the traffic area, put on the warning vest, set up the triangle and call for help from behind the barrier.',
      },
      {
        id: 'autobahn-breakdown',
        kind: 'tell',
        questionDe: 'Wie sichern Sie eine Panne auf der Autobahn?',
        questionEn: 'How do you secure a breakdown on the Autobahn?',
        answerDe:
          'Warnblinklicht an, auf den Standstreifen fahren, Warnweste anziehen, Warndreieck etwa 200 Meter hinter dem Fahrzeug aufstellen und hinter der Leitplanke warten.',
        answerEn:
          'Switch on the hazard lights, move onto the hard shoulder, put on the warning vest, place the triangle about 200 metres behind the car and wait behind the barrier.',
      },
      {
        id: 'triangle-placement',
        kind: 'tell',
        questionDe: 'Wohin stellen Sie das Warndreieck?',
        questionEn: 'Where do you place the warning triangle?',
        answerDe:
          'Etwa 50 Meter innerorts, 100 Meter außerorts und 200 Meter auf der Autobahn. Das Dreieck steht hinter dem Fahrzeug und ist für den Verkehr sichtbar.',
        answerEn:
          'About 50 metres in town, 100 metres on country roads and 200 metres on the Autobahn. It goes behind the car and must be visible to traffic.',
      },
      {
        id: 'accident',
        kind: 'tell',
        questionDe: 'Was tun Sie bei einem Unfall?',
        questionEn: 'What do you do at an accident scene?',
        answerDe:
          'Unfallstelle sichern, Warnblinklicht, Warnweste, Warndreieck, Erste Hilfe und Notruf 112. Verletzte nur bei akuter Gefahr bewegen.',
        answerEn:
          'Secure the scene, use hazard lights, warning vest and triangle, give first aid and call 112. Move injured people only if there is immediate danger.',
      },
      {
        id: 'rettungsgasse',
        kind: 'tell',
        questionDe: 'Was ist die Rettungsgasse?',
        questionEn: 'What is the Rettungsgasse?',
        answerDe:
          'Die linke Spur fährt nach links, alle anderen Spuren nach rechts. Die Gasse bleibt zwischen der linken und der nächsten Spur frei.',
        answerEn:
          'The left lane moves left and all other lanes move right. The gap stays free between the leftmost lane and the next lane.',
      },
      {
        id: 'eco-driving',
        kind: 'tell',
        questionDe: 'Wie fahren Sie kraftstoffsparend?',
        questionEn: 'How do you drive efficiently?',
        answerDe:
          'Früh hochschalten, vorausschauend fahren, unnötiges Bremsen und Standlauf vermeiden und den richtigen Reifendruck halten.',
        answerEn:
          'Shift up early, drive with anticipation, avoid unnecessary braking and idling, and keep the tyres at the correct pressure.',
      },
      {
        id: 'aquaplaning',
        kind: 'tell',
        questionDe: 'Wie verhalten Sie sich bei Aquaplaning?',
        questionEn: 'What do you do if you aquaplane?',
        answerDe:
          'Gas wegnehmen, Lenkrad ruhig halten und nicht abrupt bremsen. Nach dem Wasserverlust vorsichtig wieder beschleunigen.',
        answerEn:
          'Ease off the accelerator, keep the steering steady and do not brake abruptly. Accelerate gently again once the tyres grip.',
      },
      {
        id: 'brake-failure',
        kind: 'tell',
        questionDe: 'Was tun Sie bei Bremsversagen?',
        questionEn: 'What do you do if the brakes fail?',
        answerDe:
          'Mehrmals pumpen, in einen niedrigen Gang schalten, die Handbremse vorsichtig ziehen und eine Ausweichmöglichkeit nutzen. Warnblinklicht einschalten.',
        answerEn:
          'Pump the brake several times, shift to a lower gear, apply the parking brake gently and use an escape route. Switch on the hazard lights.',
      },
    ],
  },
]
