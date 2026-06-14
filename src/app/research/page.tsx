import { getAllContent } from '@/lib/content'

export const metadata = {
  title: 'Research — Om Deshmukh',
}

const statusColors: Record<string, string> = {
  running: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  completed: 'text-green-500 bg-green-500/10 border-green-500/20',
  abandoned: 'text-muted bg-surface border-border',
}

export default async function ResearchPage() {
  const all = await getAllContent('research')
  const papers = all.filter((r) => r.frontmatter.type === 'paper')
  const experiments = all.filter((r) => r.frontmatter.type === 'experiment')

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-2xl font-medium text-text mb-3">Research</h1>
        <p className="text-muted">
          Published work and things I tried that didn&apos;t necessarily work out.
        </p>
      </div>

      {/* Published */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs text-muted uppercase tracking-widest">
          Published
        </h2>
        <div className="space-y-0 border-t border-border">
          {papers.map((paper) => (
            <div
              key={paper.slug}
              className="py-6 border-b border-border space-y-2"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-medium text-text">
                  {paper.frontmatter.title}
                </h3>
                <span className="font-mono text-xs text-subtle shrink-0">
                  {paper.frontmatter.date?.slice(0, 7)}
                </span>
              </div>
              <p className="text-sm text-muted">{paper.frontmatter.summary}</p>
              {paper.frontmatter.link && (
                <a
                  href={paper.frontmatter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:text-accent/70 transition-colors"
                >
                  Read paper ↗
                </a>
              )}
            </div>
          ))}
          {papers.length === 0 && (
            <p className="text-sm text-muted py-6">Nothing published yet.</p>
          )}
        </div>
      </section>

      {/* Experiments */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs text-muted uppercase tracking-widest">
          Experiments
        </h2>
        <p className="text-sm text-muted -mt-2">
          Things I tried. Including failures.
        </p>
        <div className="space-y-0 border-t border-border">
          {experiments.map((exp) => (
            <div
              key={exp.slug}
              className="py-6 border-b border-border space-y-2"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-medium text-text">
                  {exp.frontmatter.title}
                </h3>
                <span
                  className={`font-mono text-xs px-2 py-0.5 border rounded-sm shrink-0 ${
                    statusColors[exp.frontmatter.status] || statusColors.abandoned
                  }`}
                >
                  {exp.frontmatter.status}
                </span>
              </div>
              <p className="text-sm text-muted">{exp.frontmatter.summary}</p>
            </div>
          ))}
          {experiments.length === 0 && (
            <p className="text-sm text-muted py-6">No experiments logged yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
