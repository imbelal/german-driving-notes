export function ProgressBar({
  value,
  total,
  tone = 'navy',
}: {
  value: number
  total: number
  tone?: 'navy' | 'green'
}) {
  const percent = total === 0 ? 0 : Math.round((value / total) * 100)
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
        <div
          className={`h-full rounded-full transition-all duration-500 ${tone === 'green' ? 'bg-forest' : 'bg-navy'}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-8 text-right text-[11px] font-semibold tabular-nums text-ink-soft">
        {percent}%
      </span>
    </div>
  )
}
