import { getContentBySlug, getContentFiles } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getContentFiles('built')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter } = getContentBySlug('built', params.slug)
    return { title: `${frontmatter.title} — Om Deshmukh` }
  } catch {
    return { title: 'Project — Om Deshmukh' }
  }
}

export default function BuiltDetailPage({ params }: { params: { slug: string } }) {
  let data
  try {
    data = getContentBySlug('built', params.slug)
  } catch {
    notFound()
  }

  const { frontmatter, content } = data

  return (
    <div className="space-y-10">
      <div>
        <Link href="/built" className="font-mono text-xs text-muted hover:text-dim transition-colors">
          ← built
        </Link>
      </div>

      <div className="space-y-4 pb-8 border-b border-border">
        <h1 className="text-2xl font-medium text-text">{frontmatter.title}</h1>
        <p className="text-muted">{frontmatter.outcome}</p>

        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags?.map((tag: string) => (
            <span
              key={tag}
              className="font-mono text-xs text-subtle bg-surface border border-border px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-accent/70 transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {frontmatter.live && (
            <a
              href={frontmatter.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-accent/70 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <article className="prose-custom">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
