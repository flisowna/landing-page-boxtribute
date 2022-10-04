import Container from "../components/container";

import { getDataBySlug } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import CTAButton from "../components/CTAButton";
import TextBlock from "../components/TextBlock";
import FactInNumber from "../components/FactInNumbers";
import FactInNumbers from "../components/FactInNumbers";
import NewsSnippetImageLeft from "../components/NewsSnippet";
import ImageLeftText5050 from "../components/ImageLeftText5050";
import FactInNumbersContainer from "../components/FactInNumbersContainer";
  import SocialMediaSnippet from "../components/SocialMediaSnippet";
import SectionTitle from "../components/SectionTitle";

interface ITypewriterText {
  text_for_typing: string;
}

interface IFactCell {
  icon: string;
  description: string;
  number: number;
  color: string;
  image_description: string;
}

interface IBlogPostData {
  image: string;
  image_description: string;
  title: string;
  headline: string;
  text: string;
  content: string;
}

interface IInfo {
  image: string;
  title: string;
  image_description: string;
  text: string;
  link: string;
}

interface IHomeData {
  page_title: string;
  subtitles_hero: ITypewriterText[];
  hero_image: string;
  hero_image_description: string;
  cta_button: string;
  cta_link: string;
  short_description: string;
  facts_in_numbers: IFactCell[];
  more_info: IInfo[];
}

type Props = {
  homeData: IHomeData;
};

const Index = ({ homeData }: Props) => {
  const array = [];
  const typewriter_texts = homeData.subtitles_hero.map(
    (e) => e.text_for_typing
  );
  console.log(typewriter_texts);
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>Boxtribute</title>
      </Head>

      {/* hero section */}
      <section className="w-full h-auto relative">
        <div>
          <Image
            src={homeData.hero_image}
            alt={homeData.hero_image_description}
            width={1600}
            height={1000}
            z-0
            className="blur"
          />
        </div>
        <div className="absolute top-1/4 leading-none mb-4 left-1/2 transform -translate-x-1/2 ">
          <h1 className="z-10 text-black text-center leading-0">
            {homeData.page_title}
          </h1>
          <h2 className="z-10 text-black mx-0 md:text-6xl ">
            <Typewriter
              options={{
                strings: [`${typewriter_texts}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <div className="cta-button-hero-section-home">
          <CTAButton
            cta_button={homeData.cta_button}
            cta_link={homeData.cta_link}
          />
        </div>
      </section>

      {/* facts in numbers section */}
      <section className="md:p-16 md:mx-16">
        <TextBlock>{homeData.short_description}</TextBlock>
        <FactInNumbersContainer factInNumbers={homeData.facts_in_numbers} />
      </section>

      {/* news section */}
      <section>
        <SectionTitle title="News" />
        {homeData.news_list.map((e) => (
          <>
            {/* <NewsSnippetImageLeft title={e.title} image={e.image} image_description={e.image_description} headline={e.headline} link={e.link} button_image={}/> */}
            <div className="flex bg-gray ">
              <div className="flex flex-col mx-32 my-16">
                <h1 className="text-6xl font-bold uppercase">{e.title}</h1>
                <h3 className="text-2xl mb-6">{e.headline}</h3>
                <p>{e.text}</p>
                <Link href={e.link}>
                  <a className="flex text-red text-5xl mt-8 ">
                    <h3 className="mr-16">Next</h3>
                    <img src="/uploads/arrow.svg" />
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center overflow-hidden">
                <img
                  className="shrink-0 min-h-full min-w-full"
                  src={e.image}
                  alt={e.image_description}
                />
              </div>
            </div>
          </>
        ))}
      </section>
      {/* more info section */}
      <section>
        <div className="flex bg-blue py-16 px-16">
          {homeData.more_info.map((e) => (
            <Link href={e.link}>
              <a className="flex flex-1 flex-col mx-8 pb-6 grow bg-white">
                <div className="flex justify-center items-center overflow-hidden h-60">
                  <img
                    className="shrink-0 min-h-full min-w-full"
                    src={e.image}
                    alt={e.image_description}
                  />
                </div>
                <div className="flex items-center flex-col p-6">
                  <h2 className="text-5xl mb-4">{e.title}</h2>
                  <p>{e.text}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
      <SocialMediaSnippet socialMediaData={homeData.more_info} />
      <ImageLeftText5050
        bg_color="gray"
        image={homeData.hero_image}
        image_description={homeData.hero_image_description}
      >
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          nemo quidem vitae qui labore veritatis, vero obcaecati rem possimus!
          Deleniti eligendi voluptate sint commodi accusamus quia reprehenderit
          obcaecati dolores praesentium.
        </p>
      </ImageLeftText5050>

      {/* </Layout> */}
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

  const homeData = getDataBySlug("home/home_data");

  return {
    props: { homeData },
  };
};
