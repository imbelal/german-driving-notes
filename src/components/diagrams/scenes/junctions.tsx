import {
  C,
  Car,
  Cyclist,
  Label,
  Marker,
  PathArrow,
  Pedestrian,
  RoadCanvas,
  Sign,
  TrafficLight,
} from '../primitives'
import { Crossroad, RailwayRoad, StopLine, TJunction } from '../roads'

export function RightBeforeLeftDiagram() {
  return (
    <RoadCanvas
      title="Open crossroad: ego vehicle must give way to a car approaching from the right"
      label="Right before left diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 44" color={C.path} dashed opacity={0.9} />
        <Car x={690} y={235} rotate={-90} color={C.other} label="From the right" />
        <PathArrow d="M724 235 L250 235" color={C.amber} width={4} dashed />
        <circle cx="445" cy="235" r="26" fill={C.hazard} opacity="0.18" />
        <circle cx="445" cy="235" r="26" fill="none" stroke={C.hazard} strokeWidth="2.5" strokeDasharray="6 5" />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <Label x={400} y={64} text="Right before left" tone="amber" />
        <Label x={620} y={480} text="Give way" tone="red" />
        <Label x={655} y={300} text="Priority" tone="amber" />
        <Marker x={445} y={235} n={1} tone="red" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function PriorityRoadDiagram() {
  return (
    <RoadCanvas
      title="Priority road: ego vehicle has right of way while side-road traffic yields"
      label="Priority road diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 44" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <Car x={628} y={235} rotate={-90} color={C.other} />
        <PathArrow d="M600 235 L522 235" color={C.amber} dashed width={4} />
        <StopLine x={500} y={190} width={90} vertical />
        <Sign x={536} y={442} type="priority" size={46} />
        <Sign x={536} y={154} type="yield" size={42} />
        <Label x={590} y={500} text="Priority sign" tone="green" />
        <Label x={640} y={184} text="Yield to you" tone="amber" />
        <Label x={400} y={64} text="Vorfahrtstraße" tone="amber" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function YieldStopDiagram() {
  return (
    <RoadCanvas
      title="Yield and stop signs compared at a priority junction"
      label="Yield and stop sign diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 398" color={C.path} dashed />
        <PathArrow d="M170 325 L690 325" color={C.amber} width={4} dashed opacity={0.9} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <Car x={210} y={325} rotate={90} color={C.other} label="Priority traffic" />
        <Sign x={536} y={442} type="yield" size={48} />
        <Sign x={120} y={84} type="yield" size={46} />
        <Sign x={250} y={84} type="stop" size={46} />
        <Label x={120} y={126} text="Give way" />
        <Label x={250} y={126} text="Stop first" tone="red" />
        <Label x={610} y={480} text="Yield, do not block" tone="amber" />
        <circle cx="445" cy="325" r="24" fill={C.hazard} opacity="0.15" />
        <Marker x={445} y={325} n={1} tone="red" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function TrafficLightsDiagram() {
  return (
    <RoadCanvas
      title="Traffic light phases at a crossroad with a green signal for the ego vehicle"
      label="Traffic lights diagram"
    >
      <Crossroad>
        <StopLine x={400} y={382} width={90} />
        <PathArrow d="M445 496 L445 44" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <TrafficLight x={540} y={438} state="green" />
        <TrafficLight x={262} y={156} state="red" scale={0.85} />
        <Label x={620} y={452} text="Green: go if clear" tone="green" />
        <Label x={250} y={72} text="Other direction: red" tone="red" />
        <Label x={400} y={66} text="Ampel" tone="amber" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function TJunctionDiagram() {
  return (
    <RoadCanvas
      title="T-junction where the ego vehicle turns right and must respect traffic from the right"
      label="T-junction diagram"
    >
      <TJunction>
        <PathArrow d="M445 496 L445 360 Q445 325 500 325 L660 325" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <Car x={670} y={235} rotate={-90} color={C.other} label="From right" />
        <PathArrow d="M704 235 L280 235" color={C.amber} width={4} dashed />
        <Label x={635} y={450} text="Traffic from right" tone="amber" />
        <Label x={400} y={80} text="T-junction" />
        <circle cx="445" cy="325" r="22" fill={C.hazard} opacity="0.14" />
      </TJunction>
    </RoadCanvas>
  )
}

export function BlockedJunctionDiagram() {
  return (
    <RoadCanvas
      title="Blocked junction: ego vehicle waits before the stop line because the exit is full"
      label="Blocked junction diagram"
    >
      <Crossroad>
        <rect x="400" y="190" width="90" height="180" fill={C.hazard} opacity="0.1" />
        <StopLine x={400} y={382} width={90} />
        <Car x={445} y={150} color={C.other} label="Queue" />
        <Car x={445} y={60} color={C.other} />
        <PathArrow d="M445 496 L445 396" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <Label x={620} y={440} text="Do not enter" tone="red" />
        <Label x={620} y={290} text="Exit blocked" tone="red" />
        <Label x={400} y={70} text="Keep junction clear" tone="amber" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function RailwayCrossingDiagram() {
  return (
    <RoadCanvas
      title="Closed railway crossing with barrier and red signal"
      label="Railway crossing diagram"
    >
      <RailwayRoad>
        <rect x="284" y="318" width="232" height="10" fill="#f8fafc" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={292 + i * 56} y="318" width="30" height="10" fill={C.hazard} />
        ))}
        <rect x="274" y="304" width="12" height="52" rx="3" fill="#f8fafc" stroke="#94a3b8" />
        <rect x="514" y="304" width="12" height="52" rx="3" fill="#f8fafc" stroke="#94a3b8" />
        <rect x="514" y="312" width="12" height="18" fill={C.hazard} />
        <rect x="274" y="312" width="12" height="18" fill={C.hazard} />
        <TrafficLight x={548} y={360} state="red" scale={0.8} />
        <PathArrow d="M445 496 L445 334" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
        <Label x={620} y={430} text="Stop" tone="red" />
        <Label x={620} y={300} text="Never stop on tracks" tone="red" />
        <Label x={400} y={84} text="Bahnübergang" tone="amber" />
        <rect x="400" y="332" width="90" height="8" fill={C.line} />
      </RailwayRoad>
    </RoadCanvas>
  )
}

export function LeftTurnDiagram() {
  return (
    <RoadCanvas
      title="Left turn across oncoming traffic at a crossroad"
      label="Left turn diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 330 Q445 235 370 235 L200 235" color={C.path} />
        <PathArrow d="M355 72 L355 510" color={C.amber} width={4} dashed />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Car x={355} y={90} rotate={180} color={C.other} label="Oncoming" />
        <circle cx="362" cy="238" r="24" fill={C.hazard} opacity="0.18" />
        <Marker x={362} y={238} n={2} tone="red" />
        <Label x={645} y={120} text="Oncoming traffic first" tone="amber" />
        <Label x={220} y={300} text="Nearest lane" tone="green" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function LeftTurnLightDiagram() {
  return (
    <RoadCanvas
      title="Protected left turn with a green arrow while oncoming traffic has red"
      label="Left turn at traffic lights diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 330 Q445 235 370 235 L200 235" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Car x={355} y={112} rotate={180} color={C.other} label="Waiting" />
        <TrafficLight x={548} y={434} state="greenArrow" label="Green arrow" />
        <TrafficLight x={258} y={172} state="red" scale={0.8} />
        <StopLine x={310} y={170} width={90} />
        <Label x={640} y={500} text="Protected left turn" tone="green" />
        <Label x={255} y={92} text="Oncoming: red" tone="red" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function LeftTurnOneWayDiagram() {
  return (
    <RoadCanvas
      title="Left turn from a one-way street into a one-way street"
      label="Left turn into one-way street diagram"
    >
      <Crossroad>
        <PathArrow d="M355 496 L355 330 Q355 235 286 235 L176 235" color={C.path} />
        <Car x={355} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <g transform="rotate(-90 540 442)">
          <Sign x={540} y={442} type="one-way" size={44} />
        </g>
        <g transform="rotate(180 540 168)">
          <Sign x={540} y={168} type="one-way" size={44} />
        </g>
        <PathArrow d="M400 500 L400 420" color={C.white} width={4} />
        <PathArrow d="M400 120 L400 40" color={C.white} width={4} />
        <PathArrow d="M690 280 L610 280" color={C.white} width={4} />
        <PathArrow d="M180 280 L100 280" color={C.white} width={4} />
        <Label x={640} y={480} text="One-way: position left" tone="amber" />
        <Label x={655} y={330} text="Entering one-way" tone="green" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function LeftTurnMultilaneDiagram() {
  return (
    <RoadCanvas
      title="Two vehicles turning left in parallel from two left-turn lanes"
      label="Multi-lane left turn diagram"
    >
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="220" y="0" width="360" height="560" fill={C.sidewalk} />
      <rect x="0" y="100" width="800" height="360" fill={C.sidewalk} />
      <rect x="240" y="0" width="320" height="560" fill={C.asphalt} />
      <rect x="0" y="120" width="800" height="320" fill={C.asphalt} />
      <rect x="240" y="120" width="320" height="320" fill={C.asphaltLight} opacity="0.45" />
      <line x1="320" y1="0" x2="320" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="480" y1="0" x2="480" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="320" y1="448" x2="320" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="480" y1="448" x2="480" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="400" y1="448" x2="400" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="0" y1="200" x2="232" y2="200" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="0" y1="360" x2="232" y2="360" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="568" y1="200" x2="800" y2="200" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <line x1="568" y1="360" x2="800" y2="360" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" />
      <PathArrow d="M440 496 L440 280 Q440 240 380 240 L176 240" color={C.path} />
      <PathArrow d="M520 496 L520 280 Q520 160 380 160 L176 160" color={C.amber} />
      <Car x={440} y={510} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
      <Car x={520} y={510} color={C.other} label="Parallel car" indicator="left" />
      <Label x={650} y={470} text="Stay in your lane" tone="green" />
      <Label x={640} y={120} text="Follow the markings" />
      <Marker x={440} y={280} n={1} />
      <Marker x={520} y={280} n={2} />
    </RoadCanvas>
  )
}

export function RightTurnDiagram() {
  return (
    <RoadCanvas title="Right turn into the nearest lane" label="Right turn diagram">
      <Crossroad>
        <PathArrow d="M445 496 L445 345 Q445 325 492 325 L666 325" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <polygon points="468,468 560,495 542,545 468,524" fill={C.hazard} opacity="0.26" />
        <Marker x={520} y={510} n={2} tone="red" />
        <Label x={620} y={450} text="Mirror + shoulder" tone="amber" />
        <Label x={620} y={390} text="Nearest lane" tone="green" />
        <Label x={470} y={370} text="Do not swing wide" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function RightCyclistDiagram() {
  return (
    <RoadCanvas
      title="Right hook: ego vehicle turns across a cyclist travelling straight ahead"
      label="Right turn with cyclist diagram"
    >
      <Crossroad>
        <rect x="490" y="0" width="34" height="560" fill="#dbe4ea" />
        <line x1="490" y1="0" x2="490" y2="560" stroke={C.line} strokeWidth="2" opacity="0.7" />
        <line x1="524" y1="0" x2="524" y2="560" stroke={C.line} strokeWidth="2" opacity="0.7" />
        <PathArrow d="M507 480 L507 150" color={C.cycle} width={5} />
        <PathArrow d="M445 496 L445 345 Q445 325 492 325 L660 325" color={C.path} />
        <Cyclist x={507} y={370} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <circle cx="507" cy="325" r="26" fill={C.hazard} opacity="0.2" />
        <Marker x={507} y={325} n={1} tone="red" />
        <Label x={660} y={380} text="Cyclist goes straight" tone="navy" />
        <Label x={660} y={440} text="They have priority" tone="red" />
        <Label x={630} y={130} text="Check right blind spot" tone="amber" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function RightPedestrianDiagram() {
  return (
    <RoadCanvas
      title="Right turn across a pedestrian crossing on the side road"
      label="Right turn with pedestrian diagram"
    >
      <Crossroad>
        <PathArrow d="M445 496 L445 345 Q445 325 492 325 L640 325" color={C.path} />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <Pedestrian x={524} y={300} scale={1.15} />
        <circle cx="524" cy="325" r="28" fill={C.hazard} opacity="0.17" />
        <Marker x={524} y={325} n={1} tone="red" />
        <Label x={650} y={430} text="Pedestrians first" tone="red" />
        <Label x={650} y={490} text="Stop before the crossing" tone="amber" />
        <Label x={524} y={250} text="Crossing the side road" />
      </Crossroad>
    </RoadCanvas>
  )
}

export function RightRedDiagram() {
  return (
    <RoadCanvas
      title="Right turn on red only with a green arrow, after a complete stop"
      label="Right turn on red diagram"
    >
      <Crossroad>
        <StopLine x={400} y={382} width={90} />
        <TrafficLight x={536} y={430} state="red" />
        <g>
          <rect x="580" y="404" width="50" height="50" rx="7" fill="#ffffff" stroke={C.navy} strokeOpacity="0.25" />
          <PathArrow d="M594 429 L614 429 M606 420 L616 429 L606 438" color={C.path} width={3.5} />
        </g>
        <Label x={605} y={474} text="Green arrow" tone="green" />
        <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <PathArrow d="M445 496 L445 345 Q445 325 492 325 L660 325" color={C.path} dashed />
        <Car x={160} y={325} rotate={90} color={C.other} label="Cross traffic" />
        <PathArrow d="M200 325 L520 325" color={C.amber} width={4} dashed />
        <circle cx="492" cy="325" r="24" fill={C.hazard} opacity="0.16" />
        <Label x={640} y={390} text="Yield to everyone" tone="red" />
        <Label x={400} y={70} text="Red means stop first" tone="red" />
      </Crossroad>
    </RoadCanvas>
  )
}
