import type { ReactNode } from 'react'

export const C = {
  bg: '#edf1f3',
  verge: '#dde5e8',
  sidewalk: '#cfd9de',
  asphalt: '#56616e',
  asphaltDark: '#4a5562',
  asphaltLight: '#647080',
  line: '#f8fafc',
  lineSoft: '#cbd5e1',
  ego: '#2563eb',
  egoDark: '#1d4ed8',
  other: '#94a3b8',
  otherDark: '#64748b',
  path: '#16a34a',
  pathDark: '#15803d',
  hazard: '#dc2626',
  amber: '#f2b705',
  navy: '#17334f',
  white: '#ffffff',
  island: '#8fae7e',
  snow: '#f1f5f9',
  skin: '#f0b27a',
  cycle: '#0f766e',
  ped: '#c2410c',
}

export function RoadCanvas({
  title,
  children,
  viewBox = '0 0 800 560',
  label,
}: {
  title: string
  children: ReactNode
  viewBox?: string
  label?: string
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label ?? title}
      className="h-auto w-full rounded-xl bg-[#edf1f3]"
    >
      <title>{title}</title>
      <defs>
        {([C.path, C.hazard, C.ego, C.amber, C.white, C.navy, C.cycle, C.ped] as const).map(
          (color, index) => (
            <marker
              key={color}
              id={`arrow-${index}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
            </marker>
          ),
        )}
        <filter id="soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.18" />
        </filter>
      </defs>
      {children}
    </svg>
  )
}

const markerIndex: Record<string, number> = {
  [C.path]: 0,
  [C.hazard]: 1,
  [C.ego]: 2,
  [C.amber]: 3,
  [C.white]: 4,
  [C.navy]: 5,
  [C.cycle]: 6,
  [C.ped]: 7,
}

export function PathArrow({
  d,
  color = C.path,
  width = 5,
  dashed = false,
  opacity = 1,
  arrow = true,
}: {
  d: string
  color?: string
  width?: number
  dashed?: boolean
  opacity?: number
  arrow?: boolean
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? '10 9' : undefined}
      opacity={opacity}
      markerEnd={arrow ? `url(#arrow-${markerIndex[color] ?? 0})` : undefined}
    />
  )
}

export function Car({
  x,
  y,
  rotate = 0,
  color = C.other,
  dark = C.otherDark,
  label,
  ghost = false,
  scale = 1,
  indicator,
  badge,
}: {
  x: number
  y: number
  rotate?: number
  color?: string
  dark?: string
  label?: string
  ghost?: boolean
  scale?: number
  indicator?: 'left' | 'right' | 'hazard'
  badge?: string
}) {
  return (
    <g>
      <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
        <ellipse cx="0" cy="6" rx="25" ry="40" fill="#0f172a" opacity="0.16" />
        <rect
          x="-23"
          y="-38"
          width="46"
          height="76"
          rx="11"
          fill={color}
          stroke="#0f172a"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          opacity={ghost ? 0.5 : 1}
        />
        <rect
          x="-17"
          y="-28"
          width="34"
          height="20"
          rx="5"
          fill="#e2e8f0"
          opacity={ghost ? 0.5 : 0.95}
        />
        <rect
          x="-17"
          y="9"
          width="34"
          height="18"
          rx="5"
          fill="#cbd5e1"
          opacity={ghost ? 0.4 : 0.9}
        />
        <rect x="-18" y="-3" width="36" height="9" rx="4" fill={dark} opacity="0.55" />
        <rect x="-24" y="-22" width="3" height="8" rx="1.5" fill={dark} />
        <rect x="21" y="-22" width="3" height="8" rx="1.5" fill={dark} />
        <circle cx="-15" cy="34" r="3.2" fill="#fef3c7" />
        <circle cx="15" cy="34" r="3.2" fill="#fef3c7" />
        {indicator === 'left' && <circle cx="-20" cy="28" r="4" fill={C.amber} />}
        {indicator === 'right' && <circle cx="20" cy="28" r="4" fill={C.amber} />}
        {indicator === 'hazard' && (
          <>
            <circle cx="-20" cy="28" r="4" fill={C.amber} />
            <circle cx="20" cy="28" r="4" fill={C.amber} />
          </>
        )}
      </g>
      {label && (
        <g transform={`translate(${x} ${y - 50})`}>
          <rect
            x={-label.length * 3.7 - 7}
            y="-11"
            width={label.length * 7.4 + 14}
            height="20"
            rx="7"
            fill="#ffffff"
            stroke="#17334f"
            strokeOpacity="0.16"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={C.navy}
          >
            {label}
          </text>
        </g>
      )}
      {badge && (
        <g transform={`translate(${x + 40} ${y - 62})`}>
          <circle r="11" fill={C.hazard} stroke="#fff" strokeWidth="2" />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="12"
            fontWeight="800"
            fill="#fff"
          >
            {badge}
          </text>
        </g>
      )}
    </g>
  )
}

export function Bus({
  x,
  y,
  rotate = 0,
  hazard = true,
}: {
  x: number
  y: number
  rotate?: number
  hazard?: boolean
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <ellipse cx="0" cy="8" rx="28" ry="52" fill="#0f172a" opacity="0.16" />
      <rect
        x="-26"
        y="-50"
        width="52"
        height="100"
        rx="10"
        fill="#f2b705"
        stroke="#92400e"
        strokeWidth="2"
      />
      <rect x="-20" y="-44" width="40" height="16" rx="4" fill="#dbeafe" />
      <rect x="-20" y="-18" width="40" height="14" rx="3" fill="#bfdbfe" />
      <rect x="-20" y="2" width="40" height="14" rx="3" fill="#bfdbfe" />
      <rect x="-20" y="22" width="40" height="14" rx="3" fill="#bfdbfe" />
      <rect x="-20" y="42" width="12" height="7" rx="2" fill="#fef3c7" />
      <rect x="8" y="42" width="12" height="7" rx="2" fill="#fef3c7" />
      {hazard && (
        <>
          <circle cx="-21" cy="-30" r="4.5" fill={C.amber} stroke="#92400e" />
          <circle cx="21" cy="-30" r="4.5" fill={C.amber} stroke="#92400e" />
          <circle cx="-21" cy="30" r="4.5" fill={C.amber} stroke="#92400e" />
          <circle cx="21" cy="30" r="4.5" fill={C.amber} stroke="#92400e" />
        </>
      )}
    </g>
  )
}

export function Label({
  x,
  y,
  text,
  tone = 'light',
  anchor = 'middle',
  rotate = 0,
}: {
  x: number
  y: number
  text: string
  tone?: 'light' | 'navy' | 'amber' | 'green' | 'red'
  anchor?: 'start' | 'middle' | 'end'
  rotate?: number
}) {
  const styles = {
    light: { fill: '#ffffff', text: C.navy, stroke: '#17334f' },
    navy: { fill: C.navy, text: '#ffffff', stroke: C.navy },
    amber: { fill: C.amber, text: C.navy, stroke: '#b45309' },
    green: { fill: C.path, text: '#ffffff', stroke: C.pathDark },
    red: { fill: C.hazard, text: '#ffffff', stroke: '#991b1b' },
  }[tone]
  const width = text.length * 6.7 + 16
  const xOffset = anchor === 'middle' ? -width / 2 : anchor === 'end' ? -width : 0
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect
        x={xOffset}
        y="-12"
        width={width}
        height="23"
        rx="7"
        fill={styles.fill}
        stroke={styles.stroke}
        strokeOpacity="0.35"
        opacity="0.97"
      />
      <text
        x={xOffset + width / 2}
        y="4"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="700"
        fill={styles.text}
      >
        {text}
      </text>
    </g>
  )
}

export function Marker({
  x,
  y,
  n,
  tone = 'amber',
}: {
  x: number
  y: number
  n: number
  tone?: 'amber' | 'green' | 'red' | 'navy'
}) {
  const fill = {
    amber: C.amber,
    green: C.path,
    red: C.hazard,
    navy: C.navy,
  }[tone]
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="14" fill="#ffffff" opacity="0.9" />
      <circle r="11.5" fill={fill} stroke="#ffffff" strokeWidth="2" />
      <text
        x="0"
        y="4.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={tone === 'amber' ? C.navy : '#ffffff'}
      >
        {n}
      </text>
    </g>
  )
}

export function Pedestrian({
  x,
  y,
  scale = 1,
  color = C.ped,
}: {
  x: number
  y: number
  scale?: number
  color?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-13" r="6" fill={color} />
      <path
        d="M -5 -4 L 5 -4 L 7 10 L 3 10 L 1 2 L -1 2 L -3 10 L -7 10 Z"
        fill={color}
      />
      <path d="M -1 2 L -6 14 L -2 15 L 3 5 Z" fill={color} />
      <path d="M 1 2 L 7 13 L 10 11 L 6 3 Z" fill={color} />
    </g>
  )
}

export function Cyclist({
  x,
  y,
  rotate = 0,
  scale = 1,
  color = C.cycle,
}: {
  x: number
  y: number
  rotate?: number
  scale?: number
  color?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <g stroke={color} strokeWidth="2.6" fill="none" strokeLinecap="round">
        <circle cx="0" cy="-13" r="8" />
        <circle cx="0" cy="14" r="8" />
        <path d="M 0 -13 L 0 14 M -8 -13 L 8 14 M 8 -13 L -8 14" />
        <path d="M -12 -6 L 12 -6" />
      </g>
      <circle cx="0" cy="-26" r="5.5" fill={color} />
      <path d="M -4 -20 L 4 -20 L 5 -10 L -5 -10 Z" fill={color} />
      <path d="M -5 -10 L -10 2 L -6 4 L 0 -6 Z" fill={color} />
      <path d="M 5 -10 L 10 2 L 6 4 L 0 -6 Z" fill={color} />
    </g>
  )
}

export function WarningTriangle({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M 0 -20 L 21 16 L -21 16 Z"
        fill="#f8fafc"
        stroke={C.hazard}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M 0 -11 L 12 11 L -12 11 Z"
        fill="none"
        stroke={C.hazard}
        strokeWidth="2"
      />
    </g>
  )
}

export function TrafficLight({
  x,
  y,
  state,
  scale = 1,
  label,
}: {
  x: number
  y: number
  state: 'red' | 'amber' | 'green' | 'greenArrow'
  scale?: number
  label?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {label && <Label x={0} y={-52} text={label} />}
      <rect x="-16" y="-38" width="32" height="82" rx="9" fill="#1f2937" />
      <circle cx="0" cy="-22" r="8" fill={state === 'red' ? '#ef4444' : '#4b5563'} />
      <circle
        cx="0"
        cy="0"
        r="8"
        fill={state === 'amber' ? C.amber : state === 'greenArrow' ? C.amber : '#4b5563'}
      />
      <circle cx="0" cy="22" r="8" fill={state === 'green' || state === 'greenArrow' ? '#22c55e' : '#4b5563'} />
      {state === 'greenArrow' && (
        <path d="M -5 22 L 5 22 M 0 17 L 0 27 M -4 21 L 0 17 L 4 21" stroke="#065f46" strokeWidth="2" fill="none" />
      )}
    </g>
  )
}

export function Sign({
  x,
  y,
  type,
  size = 48,
}: {
  x: number
  y: number
  type: string
  size?: number
}) {
  const s = size
  const c = s / 2
  const bg = { x: 0, y: 0 }
  return (
    <g transform={`translate(${x - c} ${y - c})`}>
      {renderSign(type, s, bg)}
    </g>
  )
}

function renderSign(type: string, s: number, _bg: { x: number; y: number }) {
  const center = s / 2
  const diamond = `M ${center} ${s * 0.06} L ${s * 0.94} ${center} L ${center} ${s * 0.94} L ${s * 0.06} ${center} Z`
  switch (type) {
    case 'priority':
      return (
        <>
          <path d={diamond} fill="#fff" stroke="#fff" strokeWidth={s * 0.06} />
          <path d={diamond} fill={C.amber} transform={`translate(${center} ${center}) scale(0.82) translate(${-center} ${-center})`} />
          <path d={diamond} fill="none" stroke="#fff" strokeWidth={s * 0.02} transform={`translate(${center} ${center}) scale(0.68) translate(${-center} ${-center})`} />
        </>
      )
    case 'priority-next':
      return (
        <>
          <path
            d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`}
            fill="#fff"
            stroke={C.hazard}
            strokeWidth={s * 0.09}
            strokeLinejoin="round"
          />
          <path
            d={`M ${center} ${s * 0.34} L ${center} ${s * 0.72} M ${center - s * 0.09} ${s * 0.48} L ${center} ${s * 0.31} L ${center + s * 0.09} ${s * 0.48}`}
            fill="none"
            stroke="#1f2937"
            strokeWidth={s * 0.075}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    case 'end-priority':
      return (
        <>
          <path d={diamond} fill="#fff" stroke="#fff" strokeWidth={s * 0.06} />
          <path d={diamond} fill={C.amber} transform={`translate(${center} ${center}) scale(0.82) translate(${-center} ${-center})`} />
          <path d={`M ${s * 0.16} ${s * 0.84} L ${s * 0.84} ${s * 0.16}`} stroke="#475569" strokeWidth={s * 0.13} />
        </>
      )
    case 'yield':
      return (
        <>
          <path
            d={`M ${s * 0.08} ${s * 0.14} L ${s * 0.92} ${s * 0.14} L ${center} ${s * 0.92} Z`}
            fill="#fff"
            stroke={C.hazard}
            strokeWidth={s * 0.12}
            strokeLinejoin="round"
          />
        </>
      )
    case 'stop':
      return (
        <>
          <path
            d={`M ${s * 0.3} ${s * 0.05} L ${s * 0.7} ${s * 0.05} L ${s * 0.95} ${s * 0.3} L ${s * 0.95} ${s * 0.7} L ${s * 0.7} ${s * 0.95} L ${s * 0.3} ${s * 0.95} L ${s * 0.05} ${s * 0.7} L ${s * 0.05} ${s * 0.3} Z`}
            fill="#b9382a"
            stroke="#fff"
            strokeWidth={s * 0.06}
          />
          <text x={center} y={center + s * 0.09} textAnchor="middle" fontSize={s * 0.27} fontWeight="800" fill="#fff">
            STOP
          </text>
        </>
      )
    case 'no-entry':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.47} fill={C.hazard} />
          <rect x={s * 0.18} y={s * 0.41} width={s * 0.64} height={s * 0.18} rx={s * 0.02} fill="#fff" />
        </>
      )
    case 'one-way':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.22} width={s * 0.92} height={s * 0.56} rx={s * 0.06} fill="#1d4ed8" />
          <path d={`M ${s * 0.22} ${center} L ${s * 0.7} ${center} M ${s * 0.55} ${s * 0.32} L ${s * 0.76} ${center} L ${s * 0.55} ${s * 0.68}`} stroke="#fff" strokeWidth={s * 0.09} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    case 'roundabout':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.47} fill="#1d4ed8" />
          <g transform={`translate(${center} ${center})`}>
            {[0, 120, 240].map((deg) => (
              <g key={deg} transform={`rotate(${deg})`}>
                <path
                  d={`M 0 ${-s * 0.25} A ${s * 0.25} ${s * 0.25} 0 0 1 ${s * 0.25} 0`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth={s * 0.055}
                  strokeLinecap="round"
                />
                <path
                  d={`M ${s * 0.19} ${-s * 0.055} L ${s * 0.3} 0 L ${s * 0.19} ${s * 0.055} Z`}
                  fill="#fff"
                />
              </g>
            ))}
          </g>
          <circle cx={center} cy={center} r={s * 0.07} fill="#1d4ed8" />
        </>
      )
    case 'no-overtaking':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.08} />
          <rect x={s * 0.22} y={s * 0.3} width={s * 0.17} height={s * 0.4} rx={s * 0.04} fill={C.hazard} />
          <rect x={s * 0.6} y={s * 0.3} width={s * 0.17} height={s * 0.4} rx={s * 0.04} fill="#1f2937" />
        </>
      )
    case 'speed-30':
    case 'speed-50':
    case 'speed-60':
    case 'speed-80':
    case 'speed-100':
    case 'speed-130':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} />
          <text x={center} y={center + s * 0.12} textAnchor="middle" fontSize={s * 0.36} fontWeight="800" fill="#1f2937">
            {type.replace('speed-', '')}
          </text>
        </>
      )
    case 'end-speed':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke="#94a3b8" strokeWidth={s * 0.04} />
          <text x={center} y={center + s * 0.11} textAnchor="middle" fontSize={s * 0.34} fontWeight="800" fill="#94a3b8">50</text>
          <line x1={s * 0.2} y1={s * 0.8} x2={s * 0.8} y2={s * 0.2} stroke="#1f2937" strokeWidth={s * 0.055} />
        </>
      )
    case 'end-restrictions':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke="#94a3b8" strokeWidth={s * 0.04} />
          {[0.28, 0.42, 0.56, 0.7].map((v) => (
            <line key={v} x1={s * v} y1={s * 0.18} x2={s * (v - 0.14)} y2={s * 0.82} stroke="#94a3b8" strokeWidth={s * 0.05} />
          ))}
        </>
      )
    case 'pedestrian-crossing':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <path d={`M ${center} ${s * 0.1} L ${s * 0.9} ${s * 0.82} L ${s * 0.1} ${s * 0.82} Z`} fill="#fff" />
          <Pedestrian x={center} y={s * 0.62} scale={s / 44} color="#1f2937" />
          <g stroke="#1f2937" strokeWidth={s * 0.04}>
            <line x1={s * 0.3} y1={s * 0.79} x2={s * 0.72} y2={s * 0.79} />
            {[0.35, 0.45, 0.55, 0.65].map((v) => (
              <line key={v} x1={s * v} y1={s * 0.75} x2={s * v} y2={s * 0.85} />
            ))}
          </g>
        </>
      )
    case 'school':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <Pedestrian x={s * 0.4} y={s * 0.66} scale={s / 58} color="#1f2937" />
          <Pedestrian x={s * 0.58} y={s * 0.72} scale={s / 75} color="#1f2937" />
        </>
      )
    case 'autobahn':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <g fill="none" stroke="#fff" strokeWidth={s * 0.07} strokeLinecap="round">
            <path d={`M ${s * 0.2} ${s * 0.84} C ${s * 0.34} ${s * 0.55} ${s * 0.36} ${s * 0.4} ${s * 0.5} ${s * 0.16}`} />
            <path d={`M ${s * 0.8} ${s * 0.84} C ${s * 0.66} ${s * 0.55} ${s * 0.64} ${s * 0.4} ${s * 0.5} ${s * 0.16}`} />
            <path d={`M ${s * 0.5} ${s * 0.28} L ${s * 0.5} ${s * 0.66}`} />
          </g>
          <rect x={s * 0.3} y={s * 0.46} width={s * 0.4} height={s * 0.06} fill="#fff" />
        </>
      )
    case 'no-stopping':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#1d4ed8" stroke={C.hazard} strokeWidth={s * 0.08} />
          <path d={`M ${s * 0.26} ${s * 0.26} L ${s * 0.74} ${s * 0.74} M ${s * 0.74} ${s * 0.26} L ${s * 0.26} ${s * 0.74}`} stroke={C.hazard} strokeWidth={s * 0.08} />
        </>
      )
    case 'parking':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <text x={center} y={center + s * 0.16} textAnchor="middle" fontSize={s * 0.62} fontWeight="800" fill="#fff">
            P
          </text>
        </>
      )
    case 'traffic-light':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <rect x={s * 0.39} y={s * 0.3} width={s * 0.22} height={s * 0.46} rx={s * 0.05} fill="#1f2937" />
          <circle cx={center} cy={s * 0.39} r={s * 0.045} fill="#ef4444" />
          <circle cx={center} cy={s * 0.53} r={s * 0.045} fill={C.amber} />
          <circle cx={center} cy={s * 0.67} r={s * 0.045} fill="#22c55e" />
        </>
      )
    case 'city-limit':
      return (
        <>
          <rect x={s * 0.03} y={s * 0.13} width={s * 0.94} height={s * 0.74} rx={s * 0.02} fill="#f7c948" stroke="#1f2937" strokeWidth={s * 0.025} />
          <text x={center} y={s * 0.43} textAnchor="middle" fontSize={s * 0.13} fontWeight="800" fill="#1f2937">Musterstadt</text>
        </>
      )
    case 'end-city':
      return (
        <>
          <rect x={s * 0.03} y={s * 0.13} width={s * 0.94} height={s * 0.74} rx={s * 0.02} fill="#f7c948" stroke="#1f2937" strokeWidth={s * 0.025} />
          <text x={center} y={s * 0.4} textAnchor="middle" fontSize={s * 0.13} fontWeight="800" fill="#1f2937">Musterstadt</text>
          <line x1={s * 0.1} y1={s * 0.8} x2={s * 0.9} y2={s * 0.22} stroke={C.hazard} strokeWidth={s * 0.075} />
        </>
      )
    case 'minimum-speed':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#1d4ed8" />
          <text x={center} y={center + s * 0.12} textAnchor="middle" fontSize={s * 0.36} fontWeight="800" fill="#fff">30</text>
        </>
      )
    case 'no-parking':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#1d4ed8" stroke={C.hazard} strokeWidth={s * 0.08} />
          <line x1={s * 0.26} y1={s * 0.26} x2={s * 0.74} y2={s * 0.74} stroke={C.hazard} strokeWidth={s * 0.08} />
        </>
      )
    case 'no-u-turn':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.08} />
          <path d={`M ${s * 0.63} ${s * 0.7} L ${s * 0.63} ${s * 0.43} Q ${s * 0.63} ${s * 0.29} ${s * 0.5} ${s * 0.29} Q ${s * 0.37} ${s * 0.29} ${s * 0.37} ${s * 0.43} L ${s * 0.37} ${s * 0.58}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.065} strokeLinecap="round" />
          <path d={`M ${s * 0.31} ${s * 0.54} L ${s * 0.37} ${s * 0.64} L ${s * 0.43} ${s * 0.54}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.055} strokeLinecap="round" strokeLinejoin="round" />
          <line x1={s * 0.22} y1={s * 0.8} x2={s * 0.78} y2={s * 0.2} stroke={C.hazard} strokeWidth={s * 0.07} />
        </>
      )
    case 'end-no-overtaking':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke="#94a3b8" strokeWidth={s * 0.04} />
          <rect x={s * 0.22} y={s * 0.3} width={s * 0.17} height={s * 0.4} rx={s * 0.04} fill="#94a3b8" />
          <rect x={s * 0.6} y={s * 0.3} width={s * 0.17} height={s * 0.4} rx={s * 0.04} fill="#94a3b8" />
          {[0.26, 0.42, 0.58].map((v) => (
            <line key={v} x1={s * v} y1={s * 0.8} x2={s * (v + 0.16)} y2={s * 0.2} stroke="#94a3b8" strokeWidth={s * 0.045} />
          ))}
        </>
      )
    case 'mandatory-left':
    case 'mandatory-right':
    case 'mandatory-straight':
    case 'keep-right':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#1d4ed8" />
          {type === 'mandatory-left' && (
            <path d={`M ${s * 0.68} ${center} L ${s * 0.32} ${center} M ${s * 0.45} ${center - s * 0.1} L ${s * 0.29} ${center} L ${s * 0.45} ${center + s * 0.1}`} fill="none" stroke="#fff" strokeWidth={s * 0.08} strokeLinecap="round" strokeLinejoin="round" />
          )}
          {type === 'mandatory-right' && (
            <path d={`M ${s * 0.32} ${center} L ${s * 0.68} ${center} M ${s * 0.55} ${center - s * 0.1} L ${s * 0.71} ${center} L ${s * 0.55} ${center + s * 0.1}`} fill="none" stroke="#fff" strokeWidth={s * 0.08} strokeLinecap="round" strokeLinejoin="round" />
          )}
          {type === 'mandatory-straight' && (
            <path d={`M ${center} ${s * 0.7} L ${center} ${s * 0.3} M ${center - s * 0.1} ${s * 0.43} L ${center} ${s * 0.27} L ${center + s * 0.1} ${s * 0.43}`} fill="none" stroke="#fff" strokeWidth={s * 0.08} strokeLinecap="round" strokeLinejoin="round" />
          )}
          {type === 'keep-right' && (
            <path d={`M ${s * 0.37} ${s * 0.37} L ${s * 0.64} ${s * 0.64} M ${s * 0.47} ${s * 0.65} L ${s * 0.67} ${s * 0.67} L ${s * 0.65} ${s * 0.47}`} fill="none" stroke="#fff" strokeWidth={s * 0.08} strokeLinecap="round" strokeLinejoin="round" />
          )}
        </>
      )
    case 'priority-over-oncoming':
      return (
        <>
          <rect x={s * 0.06} y={s * 0.06} width={s * 0.88} height={s * 0.88} rx={s * 0.04} fill="#1d4ed8" />
          <path d={`M ${s * 0.4} ${s * 0.8} L ${s * 0.4} ${s * 0.25} M ${s * 0.31} ${s * 0.37} L ${s * 0.4} ${s * 0.21} L ${s * 0.49} ${s * 0.37}`} fill="none" stroke="#fff" strokeWidth={s * 0.075} strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M ${s * 0.62} ${s * 0.2} L ${s * 0.62} ${s * 0.75} M ${s * 0.53} ${s * 0.63} L ${s * 0.62} ${s * 0.79} L ${s * 0.71} ${s * 0.63}`} fill="none" stroke="#ef4444" strokeWidth={s * 0.075} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    case 'roadworks':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <circle cx={s * 0.45} cy={s * 0.43} r={s * 0.045} fill="#1f2937" />
          <path d={`M ${s * 0.45} ${s * 0.48} L ${s * 0.43} ${s * 0.62} M ${s * 0.45} ${s * 0.53} L ${s * 0.58} ${s * 0.57} M ${s * 0.43} ${s * 0.62} L ${s * 0.37} ${s * 0.78} M ${s * 0.43} ${s * 0.62} L ${s * 0.5} ${s * 0.78}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.04} strokeLinecap="round" />
          <path d={`M ${s * 0.55} ${s * 0.66} L ${s * 0.69} ${s * 0.78} M ${s * 0.6} ${s * 0.75} L ${s * 0.73} ${s * 0.75}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.045} strokeLinecap="round" />
        </>
      )
    case 'wild-animals':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <ellipse cx={s * 0.5} cy={s * 0.62} rx={s * 0.16} ry={s * 0.075} fill="#1f2937" />
          <circle cx={s * 0.67} cy={s * 0.48} r={s * 0.05} fill="#1f2937" />
          <path d={`M ${s * 0.66} ${s * 0.45} L ${s * 0.62} ${s * 0.34} M ${s * 0.66} ${s * 0.45} L ${s * 0.7} ${s * 0.34} M ${s * 0.69} ${s * 0.46} L ${s * 0.74} ${s * 0.38}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.035} strokeLinecap="round" />
          <path d={`M ${s * 0.4} ${s * 0.68} L ${s * 0.37} ${s * 0.82} M ${s * 0.46} ${s * 0.69} L ${s * 0.46} ${s * 0.82} M ${s * 0.55} ${s * 0.69} L ${s * 0.57} ${s * 0.82} M ${s * 0.61} ${s * 0.68} L ${s * 0.65} ${s * 0.82}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.04} strokeLinecap="round" />
        </>
      )
    case 'slippery-road':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <rect x={s * 0.42} y={s * 0.48} width={s * 0.18} height={s * 0.26} rx={s * 0.04} fill="#1f2937" />
          <path d={`M ${s * 0.28} ${s * 0.7} Q ${s * 0.34} ${s * 0.62} ${s * 0.4} ${s * 0.7} M ${s * 0.62} ${s * 0.52} Q ${s * 0.68} ${s * 0.44} ${s * 0.74} ${s * 0.52}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.04} strokeLinecap="round" />
          <path d={`M ${s * 0.33} ${s * 0.78} Q ${s * 0.4} ${s * 0.7} ${s * 0.47} ${s * 0.78}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.035} strokeLinecap="round" />
        </>
      )
    case 'traffic-jam':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          {[0.47, 0.61, 0.75].map((y) => (
            <g key={y}>
              <rect x={s * 0.42} y={s * y} width={s * 0.16} height={s * 0.1} rx={s * 0.02} fill="#1f2937" />
              <rect x={s * 0.45} y={s * (y + 0.015)} width={s * 0.1} height={s * 0.035} rx={s * 0.01} fill="#fff" opacity="0.85" />
            </g>
          ))}
        </>
      )
    case 'two-way-traffic':
      return (
        <>
          <path d={`M ${center} ${s * 0.05} L ${s * 0.96} ${s * 0.9} L ${s * 0.04} ${s * 0.9} Z`} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.09} strokeLinejoin="round" />
          <path d={`M ${s * 0.4} ${s * 0.76} L ${s * 0.4} ${s * 0.4} M ${s * 0.33} ${s * 0.5} L ${s * 0.4} ${s * 0.36} L ${s * 0.47} ${s * 0.5} M ${s * 0.6} ${s * 0.34} L ${s * 0.6} ${s * 0.7} M ${s * 0.53} ${s * 0.6} L ${s * 0.6} ${s * 0.74} L ${s * 0.67} ${s * 0.6}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.055} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    case 'bundesstrasse':
      return (
        <>
          <rect x={s * 0.12} y={s * 0.14} width={s * 0.76} height={s * 0.72} rx={s * 0.08} fill="#f7c948" stroke="#1f2937" strokeWidth={s * 0.04} />
          <text x={s * 0.4} y={s * 0.58} textAnchor="middle" fontSize={s * 0.3} fontWeight="800" fill="#1f2937">B</text>
          <text x={s * 0.62} y={s * 0.58} textAnchor="middle" fontSize={s * 0.26} fontWeight="700" fill="#1f2937">10</text>
        </>
      )
    case 'autobahn-end':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <g fill="none" stroke="#fff" strokeWidth={s * 0.07} strokeLinecap="round">
            <path d={`M ${s * 0.2} ${s * 0.84} C ${s * 0.34} ${s * 0.55} ${s * 0.36} ${s * 0.4} ${s * 0.5} ${s * 0.16}`} />
            <path d={`M ${s * 0.8} ${s * 0.84} C ${s * 0.66} ${s * 0.55} ${s * 0.64} ${s * 0.4} ${s * 0.5} ${s * 0.16}`} />
            <path d={`M ${s * 0.5} ${s * 0.28} L ${s * 0.5} ${s * 0.66}`} />
          </g>
          <rect x={s * 0.3} y={s * 0.46} width={s * 0.4} height={s * 0.06} fill="#fff" />
          <line x1={s * 0.18} y1={s * 0.82} x2={s * 0.82} y2={s * 0.18} stroke={C.hazard} strokeWidth={s * 0.075} />
        </>
      )
    case 'railway-cross':
      return (
        <g transform={`translate(${center} ${center}) rotate(45)`}>
          <rect x={-s * 0.08} y={-s * 0.46} width={s * 0.16} height={s * 0.92} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.05} />
          <rect x={-s * 0.46} y={-s * 0.08} width={s * 0.92} height={s * 0.16} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.05} />
        </g>
      )
    case 'traffic-calmed':
      return (
        <>
          <rect x={s * 0.03} y={s * 0.1} width={s * 0.94} height={s * 0.8} rx={s * 0.05} fill="#1d4ed8" />
          <rect x={s * 0.14} y={s * 0.46} width={s * 0.2} height={s * 0.22} fill="#fff" />
          <path d={`M ${s * 0.11} ${s * 0.48} L ${s * 0.24} ${s * 0.33} L ${s * 0.37} ${s * 0.48} Z`} fill="#fff" />
          <rect x={s * 0.45} y={s * 0.56} width={s * 0.22} height={s * 0.12} rx={s * 0.02} fill="#fff" />
          <circle cx={s * 0.5} cy={s * 0.7} r={s * 0.035} fill="#fff" />
          <circle cx={s * 0.62} cy={s * 0.7} r={s * 0.035} fill="#fff" />
          <circle cx={s * 0.78} cy={s * 0.52} r={s * 0.045} fill="#fff" />
          <path d={`M ${s * 0.78} ${s * 0.57} L ${s * 0.75} ${s * 0.72} M ${s * 0.78} ${s * 0.6} L ${s * 0.87} ${s * 0.66}`} stroke="#fff" strokeWidth={s * 0.035} strokeLinecap="round" />
          <circle cx={s * 0.86} cy={s * 0.78} r={s * 0.04} fill="#fff" stroke="#1d4ed8" strokeWidth={s * 0.015} />
        </>
      )
    case 'bus-stop':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.16} width={s * 0.92} height={s * 0.68} rx={s * 0.05} fill="#f7c948" stroke="#1f2937" strokeWidth={s * 0.03} />
          <text x={s * 0.3} y={s * 0.61} textAnchor="middle" fontSize={s * 0.42} fontWeight="800" fill="#15803d">H</text>
          <rect x={s * 0.52} y={s * 0.36} width={s * 0.34} height={s * 0.26} rx={s * 0.04} fill="#15803d" />
          <rect x={s * 0.57} y={s * 0.41} width={s * 0.09} height={s * 0.09} fill="#f7c948" />
          <rect x={s * 0.71} y={s * 0.41} width={s * 0.09} height={s * 0.09} fill="#f7c948" />
          <circle cx={s * 0.59} cy={s * 0.64} r={s * 0.03} fill="#f7c948" />
          <circle cx={s * 0.79} cy={s * 0.64} r={s * 0.03} fill="#f7c948" />
        </>
      )
    case 'environmental-zone':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.18} width={s * 0.92} height={s * 0.64} rx={s * 0.04} fill="#fff" stroke="#15803d" strokeWidth={s * 0.035} />
          <text x={center} y={s * 0.4} textAnchor="middle" fontSize={s * 0.11} fontWeight="800" fill="#15803d">Umwelt</text>
          <text x={center} y={s * 0.53} textAnchor="middle" fontSize={s * 0.11} fontWeight="800" fill="#15803d">zone</text>
          <circle cx={center} cy={s * 0.69} r={s * 0.06} fill="#15803d" />
        </>
      )
    case 'parking-disc':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <text x={s * 0.36} y={s * 0.58} textAnchor="middle" fontSize={s * 0.48} fontWeight="800" fill="#fff">P</text>
          <circle cx={s * 0.68} cy={s * 0.66} r={s * 0.15} fill="#fff" stroke="#1d4ed8" strokeWidth={s * 0.02} />
          <circle cx={s * 0.68} cy={s * 0.66} r={s * 0.03} fill="#1d4ed8" />
          <path d={`M ${s * 0.68} ${s * 0.66} L ${s * 0.68} ${s * 0.56} M ${s * 0.68} ${s * 0.66} L ${s * 0.76} ${s * 0.7}`} stroke="#1d4ed8" strokeWidth={s * 0.025} strokeLinecap="round" />
        </>
      )
    case 'motor-road':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <rect x={s * 0.32} y={s * 0.44} width={s * 0.36} height={s * 0.24} rx={s * 0.06} fill="#fff" />
          <path d={`M ${s * 0.38} ${s * 0.44} L ${s * 0.42} ${s * 0.34} L ${s * 0.58} ${s * 0.34} L ${s * 0.62} ${s * 0.44} Z`} fill="#fff" />
          <rect x={s * 0.41} y={s * 0.37} width={s * 0.18} height={s * 0.06} fill="#1d4ed8" opacity="0.6" />
          <circle cx={s * 0.39} cy={s * 0.69} r={s * 0.035} fill="#1d4ed8" />
          <circle cx={s * 0.61} cy={s * 0.69} r={s * 0.035} fill="#1d4ed8" />
        </>
      )
    case 'yield-to-oncoming':
      return (
        <>
          <rect x={s * 0.18} y={s * 0.1} width={s * 0.64} height={s * 0.8} rx={s * 0.04} fill="#fff" stroke="#b9382a" strokeWidth={s * 0.06} />
          <path d={`M ${s * 0.4} ${s * 0.72} L ${s * 0.4} ${s * 0.3} M ${s * 0.32} ${s * 0.42} L ${s * 0.4} ${s * 0.26} L ${s * 0.48} ${s * 0.42}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.055} strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M ${s * 0.62} ${s * 0.28} L ${s * 0.62} ${s * 0.7} M ${s * 0.54} ${s * 0.58} L ${s * 0.62} ${s * 0.74} L ${s * 0.7} ${s * 0.58}`} fill="none" stroke="#b9382a" strokeWidth={s * 0.055} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    case 'end-minimum-speed':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#1d4ed8" />
          <text x={center} y={center + s * 0.12} textAnchor="middle" fontSize={s * 0.34} fontWeight="800" fill="#fff">30</text>
          {[0.28, 0.42, 0.56].map((v) => (
            <line key={v} x1={s * v} y1={s * 0.8} x2={s * (v + 0.16)} y2={s * 0.2} stroke="#cbd5e1" strokeWidth={s * 0.045} />
          ))}
        </>
      )
    case 'tunnel':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <path d={`M ${s * 0.2} ${s * 0.85} L ${s * 0.2} ${s * 0.5} Q ${s * 0.2} ${s * 0.25} ${s * 0.5} ${s * 0.25} Q ${s * 0.8} ${s * 0.25} ${s * 0.8} ${s * 0.5} L ${s * 0.8} ${s * 0.85} Z`} fill="#fff" />
          <path d={`M ${s * 0.3} ${s * 0.85} L ${s * 0.3} ${s * 0.55} Q ${s * 0.3} ${s * 0.38} ${s * 0.5} ${s * 0.38} Q ${s * 0.7} ${s * 0.38} ${s * 0.7} ${s * 0.55} L ${s * 0.7} ${s * 0.85} Z`} fill="#1d4ed8" />
          <line x1={s * 0.5} y1={s * 0.56} x2={s * 0.5} y2={s * 0.85} stroke="#fff" strokeWidth={s * 0.03} strokeDasharray={`${s * 0.04} ${s * 0.04}`} />
        </>
      )
    case 'emergency-exit':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#15803d" />
          <rect x={s * 0.58} y={s * 0.26} width={s * 0.2} height={s * 0.46} fill="#fff" />
          <circle cx={s * 0.38} cy={s * 0.34} r={s * 0.045} fill="#fff" />
          <path d={`M ${s * 0.38} ${s * 0.4} L ${s * 0.34} ${s * 0.6} M ${s * 0.36} ${s * 0.47} L ${s * 0.48} ${s * 0.52} M ${s * 0.34} ${s * 0.6} L ${s * 0.28} ${s * 0.76} M ${s * 0.34} ${s * 0.6} L ${s * 0.4} ${s * 0.76}`} fill="none" stroke="#fff" strokeWidth={s * 0.04} strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M ${s * 0.42} ${s * 0.7} L ${s * 0.58} ${s * 0.7} M ${s * 0.52} ${s * 0.64} L ${s * 0.6} ${s * 0.7} L ${s * 0.52} ${s * 0.76}`} fill="none" stroke="#fff" strokeWidth={s * 0.035} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    case 'weight-limit':
    case 'length-limit':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.07} />
          <rect x={s * 0.22} y={s * 0.38} width={s * 0.3} height={s * 0.2} rx={s * 0.02} fill="#1f2937" />
          <rect x={s * 0.55} y={s * 0.41} width={s * 0.13} height={s * 0.17} rx={s * 0.02} fill="#1f2937" />
          <circle cx={s * 0.3} cy={s * 0.6} r={s * 0.04} fill="#1f2937" />
          <circle cx={s * 0.45} cy={s * 0.6} r={s * 0.04} fill="#1f2937" />
          <circle cx={s * 0.62} cy={s * 0.6} r={s * 0.035} fill="#1f2937" />
          <text x={center} y={s * 0.8} textAnchor="middle" fontSize={s * 0.13} fontWeight="800" fill="#1f2937">
            {type === 'weight-limit' ? '7,5 t' : '10 m'}
          </text>
        </>
      )
    case 'height-limit':
      return (
        <>
          <circle cx={center} cy={center} r={s * 0.46} fill="#fff" stroke={C.hazard} strokeWidth={s * 0.07} />
          <path d={`M ${s * 0.22} ${s * 0.35} L ${s * 0.78} ${s * 0.35} M ${s * 0.3} ${s * 0.29} L ${s * 0.2} ${s * 0.35} L ${s * 0.3} ${s * 0.41} M ${s * 0.7} ${s * 0.29} L ${s * 0.8} ${s * 0.35} L ${s * 0.7} ${s * 0.41}`} fill="none" stroke="#1f2937" strokeWidth={s * 0.05} strokeLinecap="round" strokeLinejoin="round" />
          <text x={center} y={s * 0.64} textAnchor="middle" fontSize={s * 0.22} fontWeight="800" fill="#1f2937">3,5 m</text>
        </>
      )
    case 'first-aid':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <rect x={s * 0.42} y={s * 0.24} width={s * 0.16} height={s * 0.52} fill="#fff" />
          <rect x={s * 0.24} y={s * 0.42} width={s * 0.52} height={s * 0.16} fill="#fff" />
        </>
      )
    case 'hospital':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <text x={center} y={center + s * 0.18} textAnchor="middle" fontSize={s * 0.62} fontWeight="800" fill="#fff">H</text>
        </>
      )
    case 'fuel':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <rect x={s * 0.28} y={s * 0.28} width={s * 0.24} height={s * 0.46} rx={s * 0.04} fill="#fff" />
          <rect x={s * 0.32} y={s * 0.33} width={s * 0.16} height={s * 0.13} fill="#1d4ed8" />
          <path d={`M ${s * 0.52} ${s * 0.4} C ${s * 0.64} ${s * 0.4} ${s * 0.64} ${s * 0.62} ${s * 0.6} ${s * 0.72} M ${s * 0.54} ${s * 0.74} L ${s * 0.66} ${s * 0.74}`} fill="none" stroke="#fff" strokeWidth={s * 0.045} strokeLinecap="round" />
        </>
      )
    case 'emergency-phone':
      return (
        <>
          <rect x={s * 0.04} y={s * 0.04} width={s * 0.92} height={s * 0.92} rx={s * 0.08} fill="#1d4ed8" />
          <rect x={s * 0.3} y={s * 0.38} width={s * 0.4} height={s * 0.14} rx={s * 0.07} fill="#fff" transform={`rotate(-35 ${center} ${center})`} />
          <circle cx={s * 0.32} cy={s * 0.6} r={s * 0.06} fill="#fff" />
          <circle cx={s * 0.27} cy={s * 0.36} r={s * 0.06} fill="#fff" />
        </>
      )
    default:
      return <circle cx={center} cy={center} r={s * 0.4} fill={C.other} />
  }
}

export function ArrowBadge({
  x,
  y,
  direction,
  tone = 'green',
}: {
  x: number
  y: number
  direction: 'left' | 'right' | 'up' | 'down'
  tone?: 'green' | 'red' | 'navy'
}) {
  const rotate = { up: 0, right: 90, down: 180, left: 270 }[direction]
  const fill = { green: C.path, red: C.hazard, navy: C.navy }[tone]
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <circle r="16" fill="#ffffff" opacity="0.9" />
      <path d="M 0 10 L 0 -10 M -6 -4 L 0 -10 L 6 -4" stroke={fill} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  )
}
