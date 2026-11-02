import { C, Car, Label, PathArrow, RoadCanvas } from '../primitives'
import { Crossroad, RoundaboutBase, UrbanRoad } from '../roads'

export function StepVisual({ id, step }: { id: string; step: number }) {
  switch (id) {
    case 'left-turn':
      return <LeftTurnStep step={step} />
    case 'left-island':
      return <LeftIslandStep step={step} />
    case 'merge':
      return <MergeStep step={step} />
    case 'roundabout':
      return <RoundaboutStep step={step} />
    case 'parking':
      return <ParkingStep step={step} />
    default:
      return null
  }
}

function LeftTurnStep({ step }: { step: number }) {
  const ego = [
    { x: 445, y: 500, rotate: 0 },
    { x: 445, y: 390, rotate: 0 },
    { x: 430, y: 290, rotate: -25 },
    { x: 330, y: 235, rotate: -90 },
  ][Math.min(step, 3)]
  const path = [
    undefined,
    'M445 500 L445 380',
    'M445 500 L445 330 Q445 280 420 270',
    'M445 500 L445 330 Q445 235 370 235 L220 235',
  ][Math.min(step, 3)]
  const oncoming = [
    { x: 355, y: 90 },
    { x: 355, y: 200 },
    { x: 355, y: 440 },
    null,
  ][Math.min(step, 3)]
  const guide = ['Signal early', 'Wait for the gap', 'Turn into the nearest lane', 'Check the exit'][Math.min(step, 3)]

  return (
    <RoadCanvas title="Step-by-step left turn across oncoming traffic" label="Left turn step-through">
      <Crossroad>
        {path && <PathArrow d={path} color={C.path} />}
        <Car x={ego.x} y={ego.y} rotate={ego.rotate} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        {oncoming && <Car x={oncoming.x} y={oncoming.y} rotate={180} color={C.other} />}
        <Label x={400} y={72} text={guide} tone={step >= 3 ? 'green' : 'amber'} />
      </Crossroad>
    </RoadCanvas>
  )
}

function LeftIslandStep({ step }: { step: number }) {
  const ego = [
    { x: 440, y: 520, rotate: 0 },
    { x: 440, y: 400, rotate: 0 },
    { x: 430, y: 300, rotate: -25 },
    { x: 350, y: 240, rotate: -70 },
  ][Math.min(step, 3)]
  const path = [
    undefined,
    'M440 520 L440 400',
    'M440 520 L440 330 Q440 280 420 270',
    'M440 520 L440 330 Q440 240 360 240 L180 240',
  ][Math.min(step, 3)]
  const oncoming = [
    { x: 360, y: 74 },
    { x: 360, y: 220 },
    { x: 360, y: 440 },
    null,
  ][Math.min(step, 3)]
  const guide = ['Use the left-turn lane', 'Island gives no priority', 'Turn around the island', 'Do not cut the corner'][Math.min(step, 3)]

  return (
    <RoadCanvas title="Step-by-step left turn with a traffic island" label="Traffic island step-through">
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="220" y="0" width="360" height="560" fill={C.sidewalk} />
      <rect x="0" y="100" width="800" height="360" fill={C.sidewalk} />
      <rect x="240" y="0" width="320" height="560" fill={C.asphalt} />
      <rect x="0" y="120" width="800" height="320" fill={C.asphalt} />
      <line x1="400" y1="0" x2="400" y2="112" stroke={C.line} strokeWidth="3" strokeDasharray="14 12" />
      <line x1="400" y1="520" x2="400" y2="560" stroke={C.line} strokeWidth="3" strokeDasharray="14 12" />
      <line x1="320" y1="0" x2="320" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="480" y1="0" x2="480" y2="112" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="320" y1="448" x2="320" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="480" y1="448" x2="480" y2="560" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="0" y1="200" x2="232" y2="200" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="0" y1="280" x2="232" y2="280" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="0" y1="360" x2="232" y2="360" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="568" y1="200" x2="800" y2="200" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="568" y1="280" x2="800" y2="280" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="568" y1="360" x2="800" y2="360" stroke={C.line} strokeWidth="2.5" strokeDasharray="14 12" opacity="0.85" />
      <line x1="240" y1="0" x2="240" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="560" y1="0" x2="560" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="0" y1="120" x2="800" y2="120" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="0" y1="440" x2="800" y2="440" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <rect x="385" y="430" width="30" height="90" rx="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2.5" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={390} y1={508 - i * 20} x2={410} y2={492 - i * 20} stroke="#cbd5e1" strokeWidth="3" />
      ))}
      {path && <PathArrow d={path} color={C.path} />}
      <Car x={ego.x} y={ego.y} rotate={ego.rotate} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
      {oncoming && <Car x={oncoming.x} y={oncoming.y} rotate={180} color={C.other} />}
      <Label x={630} y={480} text={guide} tone={step >= 3 ? 'red' : 'amber'} />
    </RoadCanvas>
  )
}

function MergeStep({ step }: { step: number }) {
  const ego = [
    { x: 190, y: 470 },
    { x: 330, y: 470 },
    { x: 480, y: 445 },
    { x: 620, y: 370 },
  ][Math.min(step, 3)]
  const path = [
    undefined,
    'M230 470 L360 470',
    'M230 470 Q400 470 490 435',
    'M230 470 Q420 470 500 430 Q560 400 610 370',
  ][Math.min(step, 3)]

  return (
    <RoadCanvas title="Step-by-step Autobahn merge" label="Autobahn merge step-through">
      <UrbanRoad oneWay lanesEast={3} centerY={280}>
        <path d="M0 415 L0 505 L430 505 Q510 505 570 415 Z" fill={C.asphalt} />
        <line x1="0" y1="505" x2="430" y2="505" stroke={C.line} strokeWidth="2.5" opacity="0.6" />
        {path && <PathArrow d={path} color={C.path} />}
        <Car x={ego.x} y={ego.y} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Car x={700} y={370} rotate={90} color={C.other} />
        <Car x={560} y={280} rotate={90} color={C.other} />
        <Label x={180} y={540} text={step < 3 ? 'Acceleration lane' : 'Merged into the right lane'} tone={step < 3 ? 'amber' : 'green'} />
        <Label x={650} y={320} text={step < 3 ? 'Traffic on the Autobahn has priority' : 'Keep a safe following distance'} tone={step < 3 ? 'amber' : 'green'} />
      </UrbanRoad>
    </RoadCanvas>
  )
}

function RoundaboutStep({ step }: { step: number }) {
  const ego = [
    { x: 445, y: 506, rotate: 0 },
    { x: 445, y: 440, rotate: 0 },
    { x: 470, y: 405, rotate: 40 },
    { x: 521, y: 280, rotate: 0 },
    { x: 400, y: 159, rotate: 0 },
  ][Math.min(step, 4)]
  const path = [
    undefined,
    'M445 506 L445 445',
    'M445 506 Q445 420 435 402 A121 121 0 0 0 521 280',
    'M445 506 Q445 420 435 402 A121 121 0 0 0 521 280',
    'M445 506 Q445 420 435 402 A121 121 0 0 0 521 280 A121 121 0 0 0 400 159 L400 70',
  ][Math.min(step, 4)]
  const guide = ['Yield to the circle', 'Yield to the circle', 'Stay in your lane', 'Signal right to exit', 'Exit smoothly'][Math.min(step, 4)]

  return (
    <RoadCanvas title="Step-by-step roundabout entry and exit" label="Roundabout step-through">
      <RoundaboutBase>
        {path && <PathArrow d={path} color={C.path} />}
        <Car x={ego.x} y={ego.y} rotate={ego.rotate} color={C.ego} dark={C.egoDark} label="You" />
        {step < 2 && <Car x={279} y={280} rotate={180} color={C.other} />}
        <Label x={640} y={230} text={guide} tone={step >= 3 ? 'green' : 'amber'} />
      </RoundaboutBase>
    </RoadCanvas>
  )
}

function ParkingStep({ step }: { step: number }) {
  const ego = [
    { x: 720, y: 310, rotate: 90 },
    { x: 690, y: 310, rotate: 90 },
    { x: 620, y: 350, rotate: 70 },
    { x: 570, y: 380, rotate: 80 },
    { x: 530, y: 390, rotate: 90 },
  ][Math.min(step, 4)]
  const path = [
    undefined,
    undefined,
    'M690 310 Q640 315 620 350',
    'M690 310 Q640 315 620 350 L570 380',
    'M690 310 Q640 315 620 350 L570 380 L530 390',
  ][Math.min(step, 4)]
  const guide = ['Check the space', 'Stop alongside', 'Reverse at about 45°', 'Straighten', 'Secure the car'][Math.min(step, 4)]

  return (
    <RoadCanvas title="Step-by-step parallel parking" label="Parallel parking step-through">
      <UrbanRoad lanesEast={1} lanesWest={1} centerY={260} hardShoulder>
        <Car x={380} y={390} rotate={90} color={C.other} />
        <Car x={710} y={390} rotate={90} color={C.other} />
        {path && <PathArrow d={path} color={C.path} dashed />}
        <Car x={ego.x} y={ego.y} rotate={ego.rotate} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <Label x={180} y={440} text="Parking lane" tone="navy" />
        <Label x={610} y={490} text={guide} tone={step >= 3 ? 'green' : 'light'} />
      </UrbanRoad>
    </RoadCanvas>
  )
}
