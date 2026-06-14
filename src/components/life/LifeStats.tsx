import type { LifeSummary } from '@/types/life'

type LifeStatsProps = {
  summary: LifeSummary
}

export default function LifeStats({ summary }: LifeStatsProps) {
  const stats = [
    { label: 'Age in weeks', value: summary.ageInWeeks.toLocaleString() },
    { label: 'Completed', value: summary.completedWeeks.toLocaleString() },
    { label: 'Remaining', value: summary.remainingWeeks.toLocaleString() },
    { label: 'Chapter', value: summary.currentChapter },
  ]

  return (
    <section className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-bg px-4 py-3">
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
            {stat.label}
          </p>
          <p className="mt-2 text-sm text-dim">{stat.value}</p>
        </div>
      ))}
    </section>
  )
}
