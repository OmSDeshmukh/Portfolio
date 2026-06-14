import Branch from './Branch'
import type { TimelineVersion } from './Timeline'

type TimelineNodeProps = {
  version: TimelineVersion
}

export default function TimelineNode({ version }: TimelineNodeProps) {
  return (
    <article
      id={version.id}
      className="group/node relative grid gap-4 md:grid-cols-[4rem_1fr]"
    >
      <a
        href={`#${version.id}`}
        className="font-mono text-xs text-muted transition-colors hover:text-accent md:pt-1"
      >
        {version.version}
      </a>

      <div className="relative pl-8">
        <div
          className={`absolute left-0 top-1.5 z-10 h-3 w-3 rounded-full border ${
            version.inProgress
              ? 'border-dashed border-accent bg-bg'
              : 'border-subtle bg-border'
          }`}
          aria-hidden="true"
        />

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-base font-medium text-text">
                {version.title}
              </h2>
              {version.inProgress && (
                <span className="font-mono text-[0.68rem] text-accent">
                  in progress
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {version.description}
            </p>
            {version.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {version.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border bg-surface px-2 py-0.5 font-mono text-xs text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {version.branches.length > 0 && (
            <div className="space-y-3 opacity-95 transition-opacity group-hover/node:opacity-100">
              {version.branches.map((branch) => (
                <Branch key={branch.title} branch={branch} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
