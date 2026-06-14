export const metadata = {
  title: 'Contact — Om Deshmukh',
}

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-medium text-text mb-3">Contact</h1>
        <p className="text-muted">
          No form. No newsletter. Just coordinates.
        </p>
      </div>

      <div className="space-y-4 border-t border-border pt-8">
        <a
          href="mailto:om@example.com"
          className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
        >
          <span className="font-mono text-xs text-subtle uppercase tracking-widest">
            Email
          </span>
          <span className="text-sm text-dim group-hover:text-text transition-colors">
            om@example.com ↗
          </span>
        </a>

        <a
          href="https://github.com/omdeshmukh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
        >
          <span className="font-mono text-xs text-subtle uppercase tracking-widest">
            GitHub
          </span>
          <span className="text-sm text-dim group-hover:text-text transition-colors">
            github.com/omdeshmukh ↗
          </span>
        </a>

        <a
          href="https://linkedin.com/in/omdeshmukh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
        >
          <span className="font-mono text-xs text-subtle uppercase tracking-widest">
            LinkedIn
          </span>
          <span className="text-sm text-dim group-hover:text-text transition-colors">
            linkedin.com/in/omdeshmukh ↗
          </span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between py-4 border-b border-border group hover:bg-surface/30 -mx-3 px-3 rounded transition-colors"
        >
          <span className="font-mono text-xs text-subtle uppercase tracking-widest">
            Resume
          </span>
          <span className="text-sm text-dim group-hover:text-text transition-colors">
            resume.pdf ↗
          </span>
        </a>
      </div>
    </div>
  )
}
