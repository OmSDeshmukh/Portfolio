import Link from 'next/link'
import type { ReactNode } from 'react'
import MergeIndicator from './MergeIndicator'
import type { TimelineBranch } from './Timeline'

const branchStyles = {
  merged: {
    card: 'border-border bg-surface/40 hover:border-accent/40',
    rail: 'border-accent/50 border-dotted',
    terminal: 'after:border-accent/50 after:border-dotted',
  },
  active: {
    card: 'border-accent/50 bg-accent/10 hover:border-accent',
    rail: 'border-accent',
    terminal: 'after:border-accent',
  },
  abandoned: {
    card: 'border-border/70 bg-surface/20 opacity-70 hover:opacity-100',
    rail: 'border-muted/50',
    terminal: '',
  },
  exploring: {
    card: 'border-dim/60 bg-surface/30 hover:border-dim',
    rail: 'border-dim/70 border-dashed',
    terminal: 'after:border-dim/70 after:border-dashed',
  },
}

type BranchProps = {
  branch: TimelineBranch
}

export default function Branch({ branch }: BranchProps) {
  const styles = branchStyles[branch.status]
  const hasDetails =
    branch.projects.length > 0 ||
    branch.notes.length > 0 ||
    branch.experiments.length > 0

  return (
    <div className="relative pl-6">
      <div
        className={`absolute left-0 top-4 h-px w-5 border-t ${styles.rail}`}
        aria-hidden="true"
      />
      {(branch.status === 'merged' || branch.status === 'active') && (
        <div
          className={`absolute left-0 top-4 h-[calc(100%+1.35rem)] border-l ${styles.terminal} after:absolute after:bottom-0 after:left-0 after:h-px after:w-5 after:border-t`}
          aria-hidden="true"
        />
      )}
      {branch.status === 'abandoned' && (
        <div
          className="absolute left-5 top-[0.82rem] h-2 w-2 border-t border-muted/60 rotate-45"
          aria-hidden="true"
        />
      )}
      {branch.status === 'exploring' && (
        <div
          className="absolute left-5 top-[0.82rem] h-px w-4 border-t border-dashed border-dim/70"
          aria-hidden="true"
        />
      )}

      <details
        className={`group rounded border px-4 py-3 transition-colors ${styles.card}`}
        open={branch.defaultOpen}
      >
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden">
          <div className="min-w-0 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-medium text-text">
                {branch.title}
              </h3>
              <MergeIndicator status={branch.status} />
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {branch.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 pt-0.5">
            {branch.duration && (
              <span className="font-mono text-[0.68rem] text-subtle">
                {branch.duration}
              </span>
            )}
            {hasDetails && (
              <span className="font-mono text-xs text-muted transition-transform group-open:rotate-45">
                +
              </span>
            )}
          </div>
        </summary>

        {hasDetails && (
          <div className="mt-4 space-y-4 border-t border-border pt-4">
            {branch.projects.length > 0 && (
              <BranchSection title="Projects">
                {branch.projects.map((project) => (
                  <BranchLink
                    key={`${project.href}-${project.title}`}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    meta={project.meta}
                  />
                ))}
              </BranchSection>
            )}

            {branch.experiments.length > 0 && (
              <BranchSection title="Experiments">
                {branch.experiments.map((experiment) => (
                  <BranchLink
                    key={`${experiment.href || experiment.title}-${experiment.title}`}
                    title={experiment.title}
                    description={experiment.description}
                    href={experiment.href}
                    meta={experiment.meta}
                  />
                ))}
              </BranchSection>
            )}

            {branch.notes.length > 0 && (
              <BranchSection title="Notes">
                {branch.notes.map((note) => (
                  <BranchLink
                    key={`${note.href || note.title}-${note.title}`}
                    title={note.title}
                    description={note.description}
                    href={note.href}
                    meta={note.meta}
                  />
                ))}
              </BranchSection>
            )}
          </div>
        )}
      </details>
    </div>
  )
}

function BranchSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-[0.68rem] uppercase tracking-widest text-subtle">
        {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function BranchLink({
  title,
  description,
  href,
  meta,
}: {
  title: string
  description?: string
  href?: string
  meta?: string
}) {
  const content = (
    <div className="group/link block rounded-sm border border-border/70 bg-bg/40 px-3 py-2 transition-colors hover:border-accent/40 hover:bg-bg/70">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-dim transition-colors group-hover/link:text-text">
          {title}
        </p>
        {meta && (
          <span className="font-mono text-[0.68rem] text-subtle shrink-0 pt-0.5">
            {meta}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  )

  if (!href) return content

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}
