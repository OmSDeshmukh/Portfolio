import { getContentBySlug, getContentFiles } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getContentFiles('blog')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter } = getContentBySlug('blog', params.slug)
    return { title: `${frontmatter.title} — Om Deshmukh` }
  } catch {
    return { title: 'Post — Om Deshmukh' }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let data
  try {
    data = getContentBySlug('blog', params.slug)
  } catch {
    notFound()
  }

  const { frontmatter, content, readingTime } = data

  return (
    <div className="space-y-10">
      <div>
        <Link href="/blog" className="font-mono text-xs text-muted hover:text-dim transition-colors">
          ← blog
        </Link>
      </div>

      <div className="space-y-3 pb-8 border-b border-border">
        <h1 className="text-2xl font-medium text-text">{frontmatter.title}</h1>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-subtle">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="text-border">·</span>
          <span className="font-mono text-xs text-subtle">{readingTime}</span>
        </div>
      </div>

      <article className="prose-custom">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
