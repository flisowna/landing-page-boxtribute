import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getPostBySlug, Items } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import {
  HeroSectionData,
  HeroSection,
} from "../components/sections/HeroSection";
import React from "react";
import {
  ITeamMember,
  TeamSection,
  ITeamSectionData,
} from "../components/sections/TeamSection";
// import RenderMap from "../components/rendering-map"
import { MapSectionData } from "../components/sections/MapSection";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

type Props = {
  heroSectionData: HeroSectionData;
  teamSectionData: ITeamSectionData;
  mapSectionData: MapSectionData;
  // membersSectionData: MembersSectionData
};

const Index = ({ heroSectionData, teamSectionData, mapSectionData }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Boxtribute</title>
          <script src="js/leaflet-providers.js"></script>
        </Head>
        <Container>
          <div className="flex justify-end flex-col">
            <h1 className="text-6xl uppercase">boxtribute</h1>
            <Typewriter
              options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true}}
            />
          </div>
        </Container>
        <HeroSection heroSectionData={heroSectionData}/>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  // ])

  const heroSectionData = getPostBySlug("hero-section");
  const teamSectionData = getPostBySlug("team");
  const mapSectionData = getPostBySlug("our_impact/map-pointers");

  console.log("mapSectionData", mapSectionData);

  console.log("heroSectionData", heroSectionData);
  console.log("teamSectionData", teamSectionData);

  return {
    props: { heroSectionData, teamSectionData, mapSectionData },
  };
};
