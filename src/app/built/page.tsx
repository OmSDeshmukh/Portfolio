import Link from 'next/link'
import { getAllContent } from '@/lib/content'

export const metadata = {
  title: 'Built — Om Deshmukh',
}

export default async function BuiltPage() {
  const projects = await getAllContent('built')

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-medium text-text mb-3">Built</h1>
        <p className="text-muted">Things I&apos;ve shipped. Some worked. Some didn&apos;t.</p>
      </div>

      <div className="space-y-0 border-t border-border">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/built/${project.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6 border-b border-border hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                  {project.frontmatter.title}
                </h2>
                <span className="font-mono text-xs text-subtle shrink-0">
                  {project.frontmatter.date?.slice(0, 7)}
                </span>
              </div>
              <p className="text-sm text-muted">{project.frontmatter.outcome}</p>
              {project.frontmatter.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-subtle bg-surface border border-border px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
