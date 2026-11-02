import {
  C,
  Car,
  Cyclist,
  Label,
  Pedestrian,
  PathArrow,
  RoadCanvas,
  Sign,
  TrafficLight,
} from '../primitives'
import { Crossroad, StopLine, UrbanRoad } from '../roads'

export function TipVisual({ id }: { id: string }) {
  switch (id) {
    case 'speed':
      return (
        <RoadCanvas title="Speedometer and speed-limit signs" label="Speed control tip">
          <rect x="0" y="0" width="800" height="560" fill={C.bg} />
          <rect x="500" y="0" width="230" height="560" fill={C.sidewalk} />
          <rect x="520" y="0" width="180" height="560" fill={C.asphalt} />
          <line x1="610" y1="0" x2="610" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.8" />
          <Car x={610} y={420} color={C.ego} dark={C.egoDark} label="You" />
          <Sign x={735} y={190} type="speed-50" size={46} />
          <Sign x={735} y={310} type="speed-30" size={46} />
          <Label x={650} y={80} text="Read signs early" />
          <Label x={650} y={520} text="Small pedal adjustments" />
          <circle cx="220" cy="300" r="145" fill="#ffffff" stroke={C.navy} strokeWidth="4" />
          <path d="M 90 300 A 130 130 0 0 1 350 300" fill="none" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round" />
          {Array.from({ length: 7 }).map((_, index) => {
            const angle = Math.PI + (index / 6) * Math.PI
            const x1 = 220 + 108 * Math.cos(angle)
            const y1 = 300 + 108 * Math.sin(angle)
            const x2 = 220 + 128 * Math.cos(angle)
            const y2 = 300 + 128 * Math.sin(angle)
            return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.navy} strokeWidth="4" />
          })}
          <line x1="220" y1="300" x2="220" y2="185" stroke={C.hazard} strokeWidth="6" strokeLinecap="round" />
          <circle cx="220" cy="300" r="12" fill={C.navy} />
          <text x="220" y="166" textAnchor="middle" fontSize="22" fontWeight="800" fill={C.navy}>50</text>
          <text x="88" y="335" textAnchor="middle" fontSize="15" fontWeight="700" fill="#4a5c72">0</text>
          <text x="352" y="335" textAnchor="middle" fontSize="15" fontWeight="700" fill="#4a5c72">100</text>
          <Label x={220} y={480} text="Speedometer" tone="navy" />
        </RoadCanvas>
      )
    case 'center':
      return (
        <RoadCanvas title="Car centred in its lane with equal space on both sides" label="Lane centring tip">
          <UrbanRoad lanesEast={1} lanesWest={1} centerY={280}>
            <Car x={260} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <line x1="330" y1="325" x2="760" y2="325" stroke={C.path} strokeWidth="3" strokeDasharray="10 9" opacity="0.85" />
            <line x1="360" y1="280" x2="360" y2="300" stroke={C.navy} strokeWidth="2.5" />
            <line x1="360" y1="350" x2="360" y2="370" stroke={C.navy} strokeWidth="2.5" />
            <Label x={610} y={210} text="Look far ahead" tone="green" />
            <Label x={600} y={435} text="Equal space each side" />
            <Label x={560} y={290} text="Lane centre" tone="green" />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'wheel-position':
      return (
        <RoadCanvas title="Wheel paths and reference points from the driver's seat" label="Wheel position tip">
          <rect x="0" y="0" width="800" height="560" fill={C.bg} />
          <rect x="300" y="0" width="200" height="560" fill={C.sidewalk} />
          <rect x="320" y="0" width="160" height="560" fill={C.asphalt} />
          <line x1="400" y1="0" x2="400" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.6" />
          <Car x={400} y={340} scale={1.25} color={C.ego} dark={C.egoDark} label="You" />
          <line x1="377" y1="300" x2="377" y2="80" stroke={C.amber} strokeWidth="4" strokeDasharray="8 8" />
          <line x1="423" y1="300" x2="423" y2="80" stroke={C.amber} strokeWidth="4" strokeDasharray="8 8" />
          <circle cx="377" cy="80" r="5" fill={C.amber} />
          <circle cx="423" cy="80" r="5" fill={C.amber} />
          <circle cx="382" cy="350" r="8" fill={C.navy} />
          <Label x={245} y={90} text="Left wheel path" tone="amber" />
          <Label x={555} y={90} text="Right wheel path" tone="amber" />
          <Label x={295} y={355} text="Your seat" tone="navy" />
          <Label x={400} y={520} text="Use a fixed reference point" />
        </RoadCanvas>
      )
    case 'steering':
      return (
        <RoadCanvas title="Steering wheel at nine and three with a curved road" label="Steering tip">
          <rect x="0" y="0" width="800" height="560" fill={C.bg} />
          <path d="M 710 560 Q 670 300 520 -20" fill="none" stroke={C.sidewalk} strokeWidth="150" />
          <path d="M 710 560 Q 670 300 520 -20" fill="none" stroke={C.asphalt} strokeWidth="120" />
          <path d="M 710 560 Q 670 300 520 -20" fill="none" stroke={C.line} strokeWidth="3" strokeDasharray="12 12" opacity="0.55" />
          <PathArrow d="M 690 500 Q 650 300 560 70" color={C.path} width={5} />
          <Car x={700} y={500} rotate={-20} color={C.ego} dark={C.egoDark} label="You" />
          <circle cx="210" cy="280" r="105" fill="none" stroke="#1f2937" strokeWidth="14" />
          <circle cx="210" cy="280" r="22" fill="#1f2937" />
          <circle cx="115" cy="280" r="11" fill={C.skin} />
          <circle cx="305" cy="280" r="11" fill={C.skin} />
          <PathArrow d="M 130 210 A 100 100 0 0 1 290 210" color={C.amber} width={4} />
          <Label x={210} y={440} text="Hands at 9 and 3" />
          <Label x={210} y={480} text="Push-pull, do not cross hands" />
          <Label x={620} y={110} text="Look through the corner" tone="green" />
        </RoadCanvas>
      )
    case 'vision':
      return (
        <RoadCanvas title="Vision cone looking far ahead with mirror scans" label="Observation tip">
          <UrbanRoad lanesEast={1} lanesWest={1} centerY={280}>
            <polygon points="235,300 760,200 760,380 235,350" fill={C.path} opacity="0.13" />
            <PathArrow d="M 250 325 L 730 300" color={C.path} dashed width={3} opacity={0.7} />
            <Car x={180} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <Label x={610} y={170} text="Look far ahead" tone="green" />
            <Label x={600} y={440} text="Scan mirrors and side roads" />
            <Label x={300} y={440} text="Keep your eyes moving" />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'braking':
      return (
        <RoadCanvas title="Smooth braking towards a red light" label="Smooth braking tip">
          <UrbanRoad lanesEast={1} lanesWest={1} centerY={280}>
            <StopLine x={600} y={280} width={90} vertical />
            <TrafficLight x={680} y={400} state="red" />
            <Car x={180} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <PathArrow d="M 230 325 L 590 325" color={C.amber} dashed width={4} />
            <Label x={310} y={430} text="Ease off early" tone="amber" />
            <Label x={480} y={470} text="Brake progressively" tone="amber" />
            <Label x={620} y={510} text="Release gently" tone="green" />
            <Label x={680} y={170} text="Stop smoothly" tone="green" />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'pull-away':
      return (
        <RoadCanvas title="Pulling away from the kerb with a cyclist in the blind spot" label="Pulling away tip">
          <UrbanRoad lanesEast={1} lanesWest={1} centerY={280}>
            <polygon points="220,330 310,330 330,400 210,400" fill={C.hazard} opacity="0.28" />
            <Car x={300} y={350} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
            <Cyclist x={220} y={362} rotate={90} />
            <PathArrow d="M 330 350 Q 385 350 400 325 L 540 325" color={C.path} />
            <Label x={220} y={430} text="Blind spot" tone="red" />
            <Label x={420} y={440} text="Mirror → signal → shoulder" />
            <Label x={620} y={175} text="Give way when pulling out" tone="amber" />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'junction-scan':
      return (
        <RoadCanvas title="Scanning right and left at a junction and checking around the A-pillar" label="Junction scan tip">
          <Crossroad>
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
            <Car x={690} y={235} rotate={-90} color={C.other} />
            <Pedestrian x={270} y={300} scale={1.1} />
            <PathArrow d="M 485 470 Q 620 455 690 395" color={C.amber} width={4} dashed />
            <PathArrow d="M 405 470 Q 280 455 210 395" color={C.amber} width={4} dashed />
            <polygon points="395,470 340,390 405,420" fill={C.hazard} opacity="0.22" />
            <Label x={400} y={70} text="Right → left → right" tone="amber" />
            <Label x={650} y={500} text="Move your head around the A-pillar" tone="red" />
            <Label x={640} y={160} text="Check right" tone="amber" />
            <Label x={200} y={440} text="Check left" tone="amber" />
          </Crossroad>
        </RoadCanvas>
      )
    case 'country-bend':
      return (
        <RoadCanvas title="Country-road bend with braking, sightline and exit" label="Country-road bend tip">
          <rect x="0" y="0" width="800" height="560" fill={C.bg} />
          <path d="M 270 560 Q 340 300 640 -20" fill="none" stroke={C.sidewalk} strokeWidth="220" />
          <path d="M 270 560 Q 340 300 640 -20" fill="none" stroke={C.asphalt} strokeWidth="170" />
          <path d="M 270 560 Q 340 300 640 -20" fill="none" stroke={C.line} strokeWidth="4" strokeDasharray="18 14" opacity="0.75" />
          <PathArrow d="M 300 510 Q 360 300 600 30" color={C.path} width={5} />
          <Car x={300} y={500} rotate={20} color={C.ego} dark={C.egoDark} label="You" />
          <Label x={170} y={420} text="Brake before the bend" tone="amber" />
          <Label x={500} y={220} text="Look through to the exit" tone="green" />
          <Label x={680} y={90} text="Accelerate out" tone="green" />
          <Label x={300} y={180} text="Do not cut the corner" tone="red" />
        </RoadCanvas>
      )
    default:
      return null
  }
}
