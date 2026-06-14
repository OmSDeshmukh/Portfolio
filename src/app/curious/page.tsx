import { getAllContent } from '@/lib/content'

export const metadata = {
  title: 'Curious — Om Deshmukh',
}

export default async function CuriousPage() {
  const topics = await getAllContent('curious')

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-medium text-text mb-3">Curious about</h1>
        <p className="text-muted">
          A public second brain. Things I keep returning to, not because they&apos;re
          useful, but because I can&apos;t stop thinking about them.
        </p>
      </div>

      <div className="space-y-10">
        {topics.map((topic) => (
          <div
            key={topic.slug}
            className="space-y-4 pb-10 border-b border-border last:border-0"
          >
            <h2 className="text-lg font-medium text-text">
              {topic.frontmatter.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {topic.frontmatter.summary}
            </p>
            {topic.frontmatter.links?.length > 0 && (
              <div className="space-y-1.5">
                <p className="font-mono text-xs text-subtle uppercase tracking-widest">
                  Reading list
                </p>
                <ul className="space-y-1">
                  {topic.frontmatter.links.map(
                    (link: { label: string; url: string }) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-dim hover:text-accent transition-colors underline underline-offset-2"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
