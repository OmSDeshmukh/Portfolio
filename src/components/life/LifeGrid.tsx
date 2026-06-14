'use client'

import { useMemo, useState } from 'react'
import type { LifeTheme, LifeView, LifeWeek } from '@/types/life'
import { getWeekState, lifeChapters, lifeThemes } from '@/lib/life'
import WeekCell from './WeekCell'
import WeekDetails from './WeekDetails'

type LifeGridProps = {
  weeks: LifeWeek[]
}

const views: Array<{ id: LifeView; label: string }> = [
  { id: 'life', label: 'Life' },
  { id: 'chapters', label: 'Chapters' },
  { id: 'themes', label: 'Themes' },
]

export default function LifeGrid({ weeks }: LifeGridProps) {
  const currentWeek = useMemo(
    () => weeks.find((week) => getWeekState(week.weekNumber) === 'current'),
    [weeks]
  )
  const [view, setView] = useState<LifeView>('life')
  const [selectedWeek, setSelectedWeek] = useState<LifeWeek>(
    currentWeek || weeks[0]
  )
  const [theme, setTheme] = useState<LifeTheme>('learning')

  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="min-w-0 space-y-5">
        <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="inline-flex w-fit border border-border bg-surface/40 p-1">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  view === item.id
                    ? 'bg-bg text-text'
                    : 'text-muted hover:text-dim'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {view === 'themes' && (
            <label className="flex items-center gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
                Theme
              </span>
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value as LifeTheme)}
                className="border border-border bg-bg px-3 py-1.5 text-sm text-dim outline-none focus:border-accent"
              >
                {lifeThemes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        {view === 'chapters' && (
          <div className="flex flex-wrap gap-3">
            {lifeChapters.map((chapter) => (
              <span
                key={chapter}
                className="font-mono text-[0.68rem] text-subtle"
              >
                {chapter}
              </span>
            ))}
          </div>
        )}

        <div className="overflow-x-auto border border-border bg-surface/20 p-3">
          <div
            className="grid min-w-[46rem] gap-[3px]"
            style={{ gridTemplateColumns: 'repeat(52, minmax(0, 1fr))' }}
          >
            {weeks.map((week) => (
              <WeekCell
                key={week.id}
                week={week}
                state={getWeekState(week.weekNumber)}
                view={view}
                selected={selectedWeek.id === week.id}
                highlightedTheme={view === 'themes' ? theme : undefined}
                onSelect={setSelectedWeek}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          <span>Each row is one year.</span>
          <span>Each square is one week.</span>
          <span>Outlined squares have notes.</span>
        </div>
      </div>

      <WeekDetails week={selectedWeek} />
    </section>
  )
}
