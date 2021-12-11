import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getPostBySlug, Items } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { HeroSectionData, HeroSection } from '../components/sections/HeroSection'
import React from 'react'


type Props = {
  heroSectionData: HeroSectionData
  // membersSectionData: MembersSectionData
}

const Index = ({ heroSectionData }: Props) => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  console.log("heroSectionData", heroSectionData)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <HeroSection data={heroSectionData} />

        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  // ])

  const heroSectionData = getPostBySlug("hero-section")

  console.log("heroSectionData", heroSectionData);

  return {
    props: { heroSectionData },
  }
}
