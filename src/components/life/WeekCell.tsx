import type { LifeTheme, LifeWeek, LifeWeekState, LifeView } from '@/types/life'

const chapterStyles: Record<string, string> = {
  School: 'bg-dim/30 border-dim/20',
  College: 'bg-accent/25 border-accent/20',
  'Research Era': 'bg-teal-500/25 border-teal-500/20',
  'Builder Era': 'bg-amber-500/25 border-amber-500/20',
  Unwritten: 'bg-surface border-border/60',
}

type WeekCellProps = {
  week: LifeWeek
  state: LifeWeekState
  view: LifeView
  selected: boolean
  highlightedTheme?: LifeTheme
  onSelect: (week: LifeWeek) => void
}

export default function WeekCell({
  week,
  state,
  view,
  selected,
  highlightedTheme,
  onSelect,
}: WeekCellProps) {
  const hasReflection = Boolean(week.notes || week.title)
  const matchesTheme =
    highlightedTheme && week.tags?.includes(highlightedTheme)

  const stateClass =
    state === 'current'
      ? 'bg-accent border-accent shadow-[0_0_0_2px_rgba(139,124,248,0.16)]'
      : state === 'future'
        ? 'bg-transparent border-border/40'
        : 'bg-muted/50 border-muted/30'

  const viewClass =
    view === 'chapters'
      ? chapterStyles[week.chapter || 'Unwritten']
      : view === 'themes'
        ? matchesTheme
          ? 'bg-accent/70 border-accent'
          : 'bg-surface/30 border-border/40 opacity-30'
        : stateClass

  return (
    <button
      type="button"
      aria-label={`Week ${week.weekNumber}${
        week.title ? `: ${week.title}` : ''
      }`}
      aria-pressed={selected}
      title={`Week ${week.weekNumber} · ${week.startDate}`}
      onClick={() => onSelect(week)}
      className={`aspect-square min-h-0 w-full rounded-[1px] border transition ${
        selected ? 'ring-1 ring-accent ring-offset-1 ring-offset-bg' : ''
      } ${viewClass} ${
        hasReflection ? 'outline outline-1 outline-offset-0 outline-text/30' : ''
      } hover:scale-[1.8] hover:border-text/70 hover:opacity-100 hover:z-10 focus:z-10 focus:outline-none focus:ring-1 focus:ring-accent`}
    />
  )
}
