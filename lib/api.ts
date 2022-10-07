import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const dataDirectory = join(process.cwd(), 'data')

export function getDataBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dataDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return data;
}


const newsDirectory = join(process.cwd(), 'data/home/news')

export function getNewsSlugs() {
  return fs.readdirSync(newsDirectory)
}

export function getNewsBySlug(slug: string, fields: string[] = []) {
  const newsSlug = slug.replace(/\.md$/, '')
  const fullPath = join(newsDirectory, `${newsSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = newsSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllNews(fields: string[] = []) {
  const slugs = getNewsSlugs()
  const posts = slugs
    .map((slug) => getNewsBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}