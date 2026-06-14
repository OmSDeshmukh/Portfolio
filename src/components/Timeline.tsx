import TimelineNode from './TimelineNode'

export type BranchStatus = 'merged' | 'active' | 'abandoned' | 'exploring'

export type BranchItem = {
  title: string
  description?: string
  href?: string
  meta?: string
}

export type TimelineBranch = {
  title: string
  description: string
  status: BranchStatus
  duration?: string
  defaultOpen?: boolean
  projects: BranchItem[]
  notes: BranchItem[]
  experiments: BranchItem[]
}

export type TimelineVersion = {
  id: string
  version: string
  title: string
  description: string
  tags: string[]
  inProgress?: boolean
  branches: TimelineBranch[]
}

type TimelineProps = {
  versions: TimelineVersion[]
}

export default function Timeline({ versions }: TimelineProps) {
  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Git history
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Major versions run down the main branch. Detours, projects, papers,
            and open questions live where they actually happened.
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          {['merged', 'active', 'abandoned', 'exploring'].map((status) => (
            <span
              key={status}
              className="font-mono text-[0.68rem] text-subtle"
            >
              {status}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-2 bottom-2 hidden w-px bg-border md:left-[5.75rem] md:block"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-2 bottom-2 w-px bg-border md:hidden"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {versions.map((version) => (
            <TimelineNode key={version.version} version={version} />
          ))}
        </div>
      </div>
    </section>
  )
}
