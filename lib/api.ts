import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const dataDirectory = join(process.cwd(), '_sections')

export function getPostSlugs() {
  return fs.readdirSync(dataDirectory)
}

export type Items = {
  [key: string]: string
}


export function getDataBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dataDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return data;

  // const items: Items = {}

  // // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  // return items
}

// export function getAllPosts() {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }

// export function getSection<T>() {
//   return {} as T;
// }

// type HeroSection = {
//   title: string
// }

// getSection<HeroSection>()