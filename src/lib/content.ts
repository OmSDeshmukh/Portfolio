import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content')

export function getContentFiles(folder: string) {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getContentBySlug(folder: string, slug: string) {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return { frontmatter: data, content, readingTime: stats.text, slug }
}

export function getAllContent(folder: string) {
  const slugs = getContentFiles(folder)
  return slugs
    .map((slug) => getContentBySlug(folder, slug))
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0).getTime()
      const dateB = new Date(b.frontmatter.date || 0).getTime()
      return dateB - dateA
    })
}
