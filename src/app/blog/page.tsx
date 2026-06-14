import Link from 'next/link'
import { getAllContent } from '@/lib/content'

export const metadata = {
  title: 'Blog — Om Deshmukh',
}

export default async function BlogPage() {
  const posts = await getAllContent('blog')

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-medium text-text mb-3">Blog</h1>
        <p className="text-muted">Writing things down helps me think.</p>
      </div>

      <div className="space-y-0 border-t border-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-start justify-between gap-8 py-5 border-b border-border hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
          >
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                {post.frontmatter.title}
              </h2>
              {post.frontmatter.summary && (
                <p className="text-sm text-muted">{post.frontmatter.summary}</p>
              )}
            </div>
            <div className="text-right shrink-0 space-y-1">
              <p className="font-mono text-xs text-subtle">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
              <p className="font-mono text-xs text-subtle">{post.readingTime}</p>
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-muted py-6">Nothing written yet.</p>
        )}
      </div>
    </div>
  )
}
