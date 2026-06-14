import { notFound } from 'next/navigation'
import LifeGrid from '@/components/life/LifeGrid'
import LifeStats from '@/components/life/LifeStats'
import { getLifeSummary, getLifeWeeks, LIFE_EXPECTANCY_YEARS } from '@/lib/life'

export const metadata = {
  title: 'Life in Weeks',
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = 'force-dynamic'

export default function LifeInWeeksPage() {
  if (process.env.LIFE_WEEKS_ENABLED !== 'true') {
    notFound()
  }

  const weeks = getLifeWeeks()
  const summary = getLifeSummary(weeks)

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Internal / Life in Weeks
        </p>
        <div className="space-y-3">
          <h1 className="text-2xl font-medium tracking-tight text-text">
            Life in Weeks
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            A quiet map of a {LIFE_EXPECTANCY_YEARS}-year life. Not a scorecard,
            not a streak, not an optimization surface. Just enough structure to
            remember that time is concrete.
          </p>
        </div>
      </section>

      <LifeStats summary={summary} />
      <LifeGrid weeks={weeks} />
    </div>
  )
}
