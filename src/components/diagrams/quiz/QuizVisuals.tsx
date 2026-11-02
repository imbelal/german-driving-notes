import {
  Bus,
  C,
  Car,
  Cyclist,
  Pedestrian,
  RoadCanvas,
  Sign,
  TrafficLight,
} from '../primitives'
import { Crossroad, RailwayRoad, RoundaboutBase, StopLine, UrbanRoad } from '../roads'

export type QuizVisualId =
  | 'right-before-left'
  | 'priority-road'
  | 'stop-sign'
  | 'green-left'
  | 'green-arrow'
  | 'blocked-junction'
  | 'left-island'
  | 'right-cyclist'
  | 'roundabout'
  | 'autobahn-merge'
  | 'rettungsgasse'
  | 'overtake-cyclist'
  | 'crosswalk'
  | 'school-bus'
  | 'railway-crossing'
  | 'emergency'

function EmergencyVehicle({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-36" y="-17" width="72" height="34" rx="7" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
      <rect x="-8" y="-17" width="34" height="34" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
      <rect x="14" y="-11" width="14" height="12" rx="2" fill="#bfdbfe" />
      <rect x="-28" y="-11" width="14" height="12" rx="2" fill="#bfdbfe" />
      <rect x="-36" y="8" width="72" height="5" fill={C.hazard} />
      <rect x="-24" y="-9" width="12" height="7" rx="2" fill="#3b82f6" />
      <circle cx="-18" cy="-17" r="4" fill="#3b82f6" />
    </g>
  )
}

export function QuizVisual({ id }: { id: QuizVisualId }) {
  switch (id) {
    case 'right-before-left':
      return (
        <RoadCanvas title="Open crossroad with a car approaching from the right" label="Quiz diagram">
          <Crossroad>
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
            <Car x={690} y={235} rotate={-90} color={C.other} />
          </Crossroad>
        </RoadCanvas>
      )
    case 'priority-road':
      return (
        <RoadCanvas title="Priority road with a side-road vehicle" label="Quiz diagram">
          <Crossroad>
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
            <Car x={628} y={235} rotate={-90} color={C.other} />
            <Sign x={536} y={442} type="priority" size={46} />
          </Crossroad>
        </RoadCanvas>
      )
    case 'stop-sign':
      return (
        <RoadCanvas title="Stop sign with a car on the priority road" label="Quiz diagram">
          <Crossroad>
            <StopLine x={400} y={382} width={90} />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
            <Car x={200} y={325} rotate={90} color={C.other} />
            <Sign x={536} y={442} type="stop" size={46} />
          </Crossroad>
        </RoadCanvas>
      )
    case 'green-left':
      return (
        <RoadCanvas title="Plain green light with oncoming traffic and a left-turn wish" label="Quiz diagram">
          <Crossroad>
            <PathLight state="green" />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
            <Car x={355} y={90} rotate={180} color={C.other} />
          </Crossroad>
        </RoadCanvas>
      )
    case 'green-arrow':
      return (
        <RoadCanvas title="Protected left turn with a green arrow signal" label="Quiz diagram">
          <Crossroad>
            <PathLight state="greenArrow" />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
          </Crossroad>
        </RoadCanvas>
      )
    case 'blocked-junction':
      return (
        <RoadCanvas title="Green light with a queue blocking the exit" label="Quiz diagram">
          <Crossroad>
            <PathLight state="green" />
            <Car x={445} y={150} color={C.other} />
            <Car x={445} y={60} color={C.other} />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
          </Crossroad>
        </RoadCanvas>
      )
    case 'left-island':
      return (
        <RoadCanvas title="Left-turn lane separated from oncoming traffic by a raised island" label="Quiz diagram">
          <rect x="0" y="0" width="800" height="560" fill={C.bg} />
          <rect x="220" y="0" width="360" height="560" fill={C.sidewalk} />
          <rect x="0" y="100" width="800" height="360" fill={C.sidewalk} />
          <rect x="240" y="0" width="320" height="560" fill={C.asphalt} />
          <rect x="0" y="120" width="800" height="320" fill={C.asphalt} />
          <line x1="400" y1="0" x2="400" y2="112" stroke={C.line} strokeWidth="3" strokeDasharray="14 12" />
          <line x1="320" y1="0" x2="320" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
          <line x1="480" y1="0" x2="480" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
          <line x1="320" y1="448" x2="320" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
          <line x1="480" y1="448" x2="480" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
          <rect x="385" y="430" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2.5" />
          <Car x={440} y={520} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
          <Car x={360} y={74} rotate={180} color={C.other} />
        </RoadCanvas>
      )
    case 'right-cyclist':
      return (
        <RoadCanvas title="Right turn with a cyclist going straight on the right" label="Quiz diagram">
          <Crossroad>
            <rect x="490" y="0" width="34" height="560" fill="#dbe4ea" />
            <Cyclist x={507} y={370} />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
          </Crossroad>
        </RoadCanvas>
      )
    case 'roundabout':
      return (
        <RoadCanvas title="Approaching a roundabout with a circulating car" label="Quiz diagram">
          <RoundaboutBase>
            <Car x={445} y={506} color={C.ego} dark={C.egoDark} label="You" />
            <Car x={279} y={280} rotate={180} color={C.other} />
          </RoundaboutBase>
        </RoadCanvas>
      )
    case 'autobahn-merge':
      return (
        <RoadCanvas title="Acceleration lane merging onto a three-lane Autobahn" label="Quiz diagram">
          <UrbanRoad oneWay lanesEast={3} centerY={280}>
            <path d="M0 415 L0 505 L430 505 Q510 505 570 415 Z" fill={C.asphalt} />
            <line x1="0" y1="505" x2="430" y2="505" stroke={C.line} strokeWidth="2.5" opacity="0.6" />
            <Car x={190} y={470} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
            <Car x={650} y={370} rotate={90} color={C.other} />
            <Car x={560} y={280} rotate={90} color={C.other} />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'rettungsgasse':
      return (
        <RoadCanvas title="Queued traffic with an emergency vehicle approaching" label="Quiz diagram">
          <UrbanRoad oneWay lanesEast={3} centerY={280}>
            <Car x={360} y={190} rotate={90} color={C.other} />
            <Car x={610} y={190} rotate={90} color={C.other} />
            <Car x={360} y={280} rotate={90} color={C.other} />
            <Car x={610} y={280} rotate={90} color={C.other} />
            <Car x={360} y={370} rotate={90} color={C.other} />
            <Car x={610} y={370} rotate={90} color={C.other} />
            <EmergencyVehicle x={140} y={280} />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'overtake-cyclist':
      return (
        <RoadCanvas title="Cyclist ahead with an oncoming car in the opposite lane" label="Quiz diagram">
          <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="dashed">
            <Car x={280} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <Cyclist x={560} y={350} rotate={90} />
            <Car x={710} y={235} rotate={-90} color={C.other} />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'crosswalk':
      return (
        <RoadCanvas title="Pedestrian waiting at a zebra crossing" label="Quiz diagram">
          <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
            {Array.from({ length: 8 }).map((_, i) => (
              <rect key={i} x={400} y={200 + i * 21} width={70} height={10} rx={2} fill={C.line} />
            ))}
            <Car x={210} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <Pedestrian x={435} y={176} scale={1.1} />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'school-bus':
      return (
        <RoadCanvas title="School bus with hazard lights and children nearby" label="Quiz diagram">
          <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
            <Bus x={530} y={325} rotate={90} hazard />
            <Car x={220} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <Pedestrian x={620} y={360} scale={0.95} />
            <Pedestrian x={660} y={300} scale={0.85} />
          </UrbanRoad>
        </RoadCanvas>
      )
    case 'railway-crossing':
      return (
        <RoadCanvas title="Closed barrier at a railway crossing" label="Quiz diagram">
          <RailwayRoad>
            <rect x="284" y="318" width="232" height="10" fill="#f8fafc" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={292 + i * 56} y="318" width="30" height="10" fill={C.hazard} />
            ))}
            <rect x="274" y="304" width="12" height="52" rx="3" fill="#f8fafc" stroke="#94a3b8" />
            <rect x="514" y="304" width="12" height="52" rx="3" fill="#f8fafc" stroke="#94a3b8" />
            <rect x="514" y="308" width="12" height="18" fill={C.hazard} />
            <rect x="274" y="308" width="12" height="18" fill={C.hazard} />
            <Car x={445} y={500} color={C.ego} dark={C.egoDark} label="You" />
          </RailwayRoad>
        </RoadCanvas>
      )
    case 'emergency':
      return (
        <RoadCanvas title="Pedestrian stepping into the road ahead" label="Quiz diagram">
          <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
            <Car x={250} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
            <Pedestrian x={575} y={320} scale={1.2} />
          </UrbanRoad>
        </RoadCanvas>
      )
    default:
      return null
  }
}

function PathLight({ state }: { state: 'green' | 'greenArrow' }) {
  return <TrafficLight x={540} y={438} state={state} />
}
