import type { ComponentType } from 'react'
import {
  BlindSpotDiagram,
  CockpitDiagram,
  LaneChangeDiagram,
  LanePositionDiagram,
  MotorwayLaneChangeDiagram,
} from './scenes/basics'
import {
  BlockedJunctionDiagram,
  LeftTurnDiagram,
  LeftTurnIslandDiagram,
  LeftTurnLightDiagram,
  LeftTurnMultilaneDiagram,
  LeftTurnOneWayDiagram,
  PriorityRoadDiagram,
  RailwayCrossingDiagram,
  RightBeforeLeftDiagram,
  RightCyclistDiagram,
  RightPedestrianDiagram,
  RightRedDiagram,
  RightTurnDiagram,
  TJunctionDiagram,
  TrafficLightsDiagram,
  YieldStopDiagram,
} from './scenes/junctions'
import {
  AutobahnExitDiagram,
  AutobahnMergeDiagram,
  BreakdownDiagram,
  CrosswalkDiagram,
  EmergencyBrakingDiagram,
  HillParkingDiagram,
  OvertakeCyclistDiagram,
  OvertakingDiagram,
  ParallelParkingDiagram,
  RettungsgasseDiagram,
  RoundaboutDiagram,
  RoundaboutMultiDiagram,
  SchoolBusDiagram,
  ThreePointDiagram,
  UTurnDiagram,
  WinterDiagram,
} from './scenes/manoeuvres'
import {
  C,
  Car,
  Cyclist,
  PathArrow,
  RoadCanvas,
} from './primitives'

const diagrams: Record<string, ComponentType> = {
  cockpit: CockpitDiagram,
  'blind-spot': BlindSpotDiagram,
  'lane-position': LanePositionDiagram,
  'lane-change': LaneChangeDiagram,
  'motorway-lane-change': MotorwayLaneChangeDiagram,
  'right-before-left': RightBeforeLeftDiagram,
  'priority-road': PriorityRoadDiagram,
  'yield-stop': YieldStopDiagram,
  'traffic-lights': TrafficLightsDiagram,
  't-junction': TJunctionDiagram,
  'blocked-junction': BlockedJunctionDiagram,
  'railway-crossing': RailwayCrossingDiagram,
  'left-turn': LeftTurnDiagram,
  'left-turn-light': LeftTurnLightDiagram,
  'left-turn-oneway': LeftTurnOneWayDiagram,
  'left-turn-island': LeftTurnIslandDiagram,
  'left-turn-multilane': LeftTurnMultilaneDiagram,
  'right-turn': RightTurnDiagram,
  'right-cyclist': RightCyclistDiagram,
  'right-pedestrian': RightPedestrianDiagram,
  'right-red': RightRedDiagram,
  'u-turn': UTurnDiagram,
  'three-point': ThreePointDiagram,
  roundabout: RoundaboutDiagram,
  'roundabout-multi': RoundaboutMultiDiagram,
  merge: AutobahnMergeDiagram,
  exit: AutobahnExitDiagram,
  rettungsgasse: RettungsgasseDiagram,
  overtaking: OvertakingDiagram,
  'overtake-cyclist': OvertakeCyclistDiagram,
  emergency: EmergencyBrakingDiagram,
  breakdown: BreakdownDiagram,
  'parallel-parking': ParallelParkingDiagram,
  'hill-parking': HillParkingDiagram,
  crosswalk: CrosswalkDiagram,
  'school-bus': SchoolBusDiagram,
  winter: WinterDiagram,
}

export function ScenarioDiagram({ id }: { id: string }) {
  const Diagram = diagrams[id]
  if (Diagram) return <Diagram />
  return (
    <RoadCanvas title="Diagram placeholder">
      <Car x={400} y={280} color={C.ego} dark={C.egoDark} />
      <PathArrow d="M400 320 L400 180" color={C.path} />
      <Cyclist x={520} y={300} />
    </RoadCanvas>
  )
}

export function DiagramLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-soft">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-3 w-5 rounded-sm bg-[#2563eb]" />
        You
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-3 w-5 rounded-sm bg-[#94a3b8]" />
        Other traffic
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-0.5 w-6 bg-[#16a34a]" />
        Intended path
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-0.5 w-6 bg-[#dc2626]" />
        Hazard / conflict
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-sm border-2 border-[#17334f]/30 bg-[#f2b705]" />
        Traffic sign
      </span>
    </div>
  )
}
