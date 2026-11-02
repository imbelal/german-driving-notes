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
