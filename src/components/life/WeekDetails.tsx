import type { LifeWeek } from '@/types/life'

type WeekDetailsProps = {
  week: LifeWeek
}

export default function WeekDetails({ week }: WeekDetailsProps) {
  return (
    <aside className="space-y-5 border border-border bg-surface/30 p-4">
      <div className="space-y-1">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Week {week.weekNumber}
        </p>
        <h2 className="text-base font-medium text-text">
          {week.title || 'Untitled week'}
        </h2>
        <p className="font-mono text-[0.68rem] text-muted">
          {week.startDate} / {week.endDate}
        </p>
      </div>

      <div className="space-y-1">
        <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
          Chapter
        </p>
        <p className="text-sm text-dim">{week.chapter || 'Unwritten'}</p>
      </div>

      <div className="space-y-1">
        <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
          Notes
        </p>
        <p className="text-sm leading-relaxed text-muted">
          {week.notes || 'No note for this week yet.'}
        </p>
      </div>

      {typeof week.mood === 'number' && (
        <div className="space-y-1">
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
            Mood
          </p>
          <div className="h-1.5 overflow-hidden rounded-sm bg-bg">
            <div
              className="h-full bg-dim"
              style={{ width: `${Math.min(10, Math.max(0, week.mood)) * 10}%` }}
            />
          </div>
        </div>
      )}

      {week.tags && week.tags.length > 0 && (
        <div className="space-y-2">
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
            Themes
          </p>
          <div className="flex flex-wrap gap-1.5">
            {week.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border bg-bg/50 px-2 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
