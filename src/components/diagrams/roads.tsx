import type { ReactNode } from 'react'
import { C } from './primitives'

export const V = {
  centerX: 400,
  laneWidth: 90,
  asphaltLeft: 310,
  asphaltRight: 490,
}

export const H = {
  centerY: 280,
  laneWidth: 90,
  asphaltTop: 190,
  asphaltBottom: 370,
}

export function northLane(index = 0) {
  return V.centerX + V.laneWidth / 2 + index * V.laneWidth
}

export function southLane(index = 0) {
  return V.centerX - V.laneWidth / 2 - index * V.laneWidth
}

export function eastLane(index = 0, centerY = H.centerY) {
  return centerY + H.laneWidth / 2 + index * H.laneWidth
}

export function westLane(index = 0, centerY = H.centerY) {
  return centerY - H.laneWidth / 2 - index * H.laneWidth
}

export function Crossroad({
  children,
  crosswalks = true,
}: {
  children: ReactNode
  crosswalks?: boolean
}) {
  return (
    <g>
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="290" y="0" width="220" height="560" fill={C.sidewalk} />
      <rect x="0" y="170" width="800" height="220" fill={C.sidewalk} />
      <rect x="310" y="0" width="180" height="560" fill={C.asphalt} />
      <rect x="0" y="190" width="800" height="180" fill={C.asphalt} />
      <rect x="310" y="190" width="180" height="180" fill={C.asphaltLight} opacity="0.5" />
      <line x1="400" y1="0" x2="400" y2="182" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="400" y1="378" x2="400" y2="560" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="0" y1="280" x2="302" y2="280" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="498" y1="280" x2="800" y2="280" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="310" y1="0" x2="310" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="490" y1="0" x2="490" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="0" y1="190" x2="800" y2="190" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="0" y1="370" x2="800" y2="370" stroke={C.line} strokeWidth="2" opacity="0.45" />
      {crosswalks && (
        <>
          <ZebraVertical y={142} />
          <ZebraVertical y={392} />
          <ZebraHorizontal x={262} />
          <ZebraHorizontal x={506} />
        </>
      )}
      {children}
    </g>
  )
}

export function ZebraVertical({ y }: { y: number }) {
  return (
    <g opacity="0.92">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={318 + i * 24}
          y={y}
          width="13"
          height="28"
          rx="2"
          fill={C.line}
        />
      ))}
    </g>
  )
}

export function ZebraHorizontal({ x }: { x: number }) {
  return (
    <g opacity="0.92">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={x}
          y={198 + i * 24}
          width="28"
          height="13"
          rx="2"
          fill={C.line}
        />
      ))}
    </g>
  )
}

export function StopLine({
  x,
  y,
  width = 90,
  vertical = false,
}: {
  x: number
  y: number
  width?: number
  vertical?: boolean
}) {
  return vertical ? (
    <rect x={x} y={y} width="10" height={width} fill={C.line} />
  ) : (
    <rect x={x} y={y} width={width} height="10" fill={C.line} />
  )
}

export function TJunction({ children, crosswalk = true }: { children: ReactNode; crosswalk?: boolean }) {
  return (
    <g>
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="290" y="0" width="220" height="560" fill={C.sidewalk} />
      <rect x="0" y="170" width="800" height="220" fill={C.sidewalk} />
      <rect x="310" y="370" width="180" height="190" fill={C.asphalt} />
      <rect x="0" y="190" width="800" height="180" fill={C.asphalt} />
      <rect x="310" y="190" width="180" height="180" fill={C.asphaltLight} opacity="0.5" />
      <line x1="400" y1="0" x2="400" y2="182" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="400" y1="384" x2="400" y2="560" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="0" y1="280" x2="302" y2="280" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="498" y1="280" x2="800" y2="280" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="310" y1="370" x2="280" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="490" y1="370" x2="520" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      {crosswalk && <ZebraVertical y={408} />}
      {children}
    </g>
  )
}

export function UrbanRoad({
  children,
  lanesEast = 1,
  lanesWest = 1,
  oneWay = false,
  centerY = H.centerY,
  laneWidth = H.laneWidth,
  centerMarking = 'solid',
  hardShoulder = false,
  snow = false,
}: {
  children: ReactNode
  lanesEast?: number
  lanesWest?: number
  oneWay?: boolean
  centerY?: number
  laneWidth?: number
  centerMarking?: 'solid' | 'dashed' | 'double'
  hardShoulder?: boolean
  snow?: boolean
}) {
  const lanes = oneWay ? lanesEast : lanesEast + lanesWest
  const total = lanes * laneWidth
  const top = centerY - total / 2
  const bottom = centerY + total / 2
  const shoulder = hardShoulder ? 58 : 0
  const asphalt = snow ? '#dbe4ea' : C.asphalt

  return (
    <g>
      <rect x="0" y="0" width="800" height="560" fill={snow ? C.snow : C.bg} />
      <rect x="0" y={top - 22} width="800" height={total + 44 + shoulder} fill={snow ? '#e2e8f0' : C.sidewalk} />
      <rect x="0" y={top} width="800" height={total + shoulder} fill={asphalt} />
      {hardShoulder && (
        <>
          <rect x="0" y={bottom} width="800" height={shoulder} fill={C.asphaltDark} />
          <line x1="0" y1={bottom} x2="800" y2={bottom} stroke={C.line} strokeWidth="2.5" opacity="0.8" />
        </>
      )}
      {!oneWay && (
        <>
          {centerMarking === 'dashed' ? (
            <line x1="0" y1={centerY} x2="800" y2={centerY} stroke={C.line} strokeWidth="3" strokeDasharray="16 12" />
          ) : centerMarking === 'double' ? (
            <>
              <line x1="0" y1={centerY - 3} x2="800" y2={centerY - 3} stroke={C.line} strokeWidth="2.5" />
              <line x1="0" y1={centerY + 3} x2="800" y2={centerY + 3} stroke={C.line} strokeWidth="2.5" />
            </>
          ) : (
            <line x1="0" y1={centerY} x2="800" y2={centerY} stroke={C.line} strokeWidth="3" />
          )}
        </>
      )}
      {oneWay
        ? Array.from({ length: lanesEast - 1 }).map((_, i) => (
            <line
              key={`o${i}`}
              x1="0"
              y1={top + (i + 1) * laneWidth}
              x2="800"
              y2={top + (i + 1) * laneWidth}
              stroke={C.line}
              strokeWidth="3"
              strokeDasharray="16 12"
              opacity="0.9"
            />
          ))
        : Array.from({ length: lanesEast - 1 }).map((_, i) => (
            <line
              key={`e${i}`}
              x1="0"
              y1={centerY + (i + 1) * laneWidth}
              x2="800"
              y2={centerY + (i + 1) * laneWidth}
              stroke={C.line}
              strokeWidth="3"
              strokeDasharray="16 12"
              opacity="0.9"
            />
          ))}
      {!oneWay &&
        Array.from({ length: lanesWest - 1 }).map((_, i) => (
          <line
            key={`w${i}`}
            x1="0"
            y1={centerY - (i + 1) * laneWidth}
            x2="800"
            y2={centerY - (i + 1) * laneWidth}
            stroke={C.line}
            strokeWidth="3"
            strokeDasharray="16 12"
            opacity="0.9"
          />
        ))}
      <line x1="0" y1={top + 3} x2="800" y2={top + 3} stroke={C.line} strokeWidth="2" opacity="0.5" />
      <line x1="0" y1={bottom - 3} x2="800" y2={bottom - 3} stroke={C.line} strokeWidth="2" opacity="0.5" />
      {snow && (
        <g opacity="0.55" stroke="#94a3b8" strokeWidth="14" strokeLinecap="round">
          <line x1="0" y1={centerY + 45} x2="800" y2={centerY + 45} />
          <line x1="0" y1={centerY - 45} x2="800" y2={centerY - 45} />
        </g>
      )}
      {children}
    </g>
  )
}

export function RailwayRoad({ children }: { children: ReactNode }) {
  return (
    <g>
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="290" y="0" width="220" height="560" fill={C.sidewalk} />
      <rect x="310" y="0" width="180" height="560" fill={C.asphalt} />
      <line x1="400" y1="0" x2="400" y2="236" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="400" y1="312" x2="400" y2="560" stroke={C.line} strokeWidth="3" strokeDasharray="14 14" />
      <line x1="310" y1="0" x2="310" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <line x1="490" y1="0" x2="490" y2="560" stroke={C.line} strokeWidth="2" opacity="0.45" />
      <rect x="285" y="240" width="230" height="68" fill="#d8d4c8" />
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={i} x={290 + i * 11} y="244" width="6" height="60" fill="#a8a29e" />
      ))}
      <line x1="285" y1="260" x2="515" y2="260" stroke="#6b7280" strokeWidth="4" />
      <line x1="285" y1="288" x2="515" y2="288" stroke="#6b7280" strokeWidth="4" />
      {children}
    </g>
  )
}

export function RoundaboutBase({ children }: { children: ReactNode }) {
  return (
    <g>
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="290" y="0" width="220" height="560" fill={C.sidewalk} />
      <rect x="0" y="170" width="800" height="220" fill={C.sidewalk} />
      <rect x="310" y="0" width="180" height="560" fill={C.asphalt} />
      <rect x="0" y="190" width="800" height="180" fill={C.asphalt} />
      <circle cx="400" cy="280" r="178" fill={C.sidewalk} />
      <circle cx="400" cy="280" r="160" fill={C.asphalt} />
      <circle cx="400" cy="280" r="82" fill={C.island} stroke="#7a9a69" strokeWidth="4" />
      <circle cx="400" cy="280" r="122" fill="none" stroke={C.line} strokeWidth="3" strokeDasharray="15 13" opacity="0.85" />
      <circle cx="400" cy="280" r="160" fill="none" stroke={C.line} strokeWidth="2" opacity="0.4" />
      <circle cx="400" cy="280" r="82" fill="none" stroke={C.line} strokeWidth="2" opacity="0.4" />
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 400 + Math.cos(rad) * 175
        const y1 = 280 + Math.sin(rad) * 175
        const x2 = 400 + Math.cos(rad) * 300
        const y2 = 280 + Math.sin(rad) * 300
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={C.line}
            strokeWidth="3"
            strokeDasharray="14 12"
            opacity="0.55"
          />
        )
      })}
      <path d="M 400 470 A 190 190 0 0 1 590 280" fill="none" stroke={C.line} strokeWidth="3" strokeDasharray="10 16" opacity="0.35" />
      {children}
    </g>
  )
}
