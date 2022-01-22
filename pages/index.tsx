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
import { TeamMember, TeamSection, TeamSectionData } from '../components/sections/TeamSection'
import RenderMap from "../components/rendering-map"




type Props = {
  heroSectionData: HeroSectionData
  teamSectionData: TeamSectionData
  // membersSectionData: MembersSectionData
}


const Index = ({ heroSectionData, teamSectionData }: Props) => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  console.log("heroSectionData", heroSectionData)
  console.log(teamSectionData)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
          <script src="js/leaflet-providers.js"></script>
        </Head>
        <Container>
        <RenderMap />

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
          <TeamSection team_members={teamSectionData.team_members} />


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
  const teamSectionData = getPostBySlug("team")

  console.log("heroSectionData", heroSectionData);
  console.log("teamSectionData", teamSectionData);

  return {
    props: { heroSectionData, teamSectionData }
  }
}
