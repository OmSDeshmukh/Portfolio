import type { BranchStatus } from './Timeline'

const statusStyles: Record<BranchStatus, string> = {
  merged: 'border-accent/60 text-accent bg-accent/10',
  active: 'border-accent text-accent bg-accent/15',
  abandoned: 'border-border text-muted bg-surface/50',
  exploring: 'border-dim text-dim bg-surface',
}

const statusLabels: Record<BranchStatus, string> = {
  merged: 'merged',
  active: 'active',
  abandoned: 'abandoned',
  exploring: 'exploring',
}

type MergeIndicatorProps = {
  status: BranchStatus
}

export default function MergeIndicator({ status }: MergeIndicatorProps) {
  return (
    <span
      className={`font-mono text-[0.68rem] leading-none px-2 py-1 border rounded-sm ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  )
}
