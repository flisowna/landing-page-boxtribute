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
import AnimatedNumber from "react-animated-number";

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

interface INews {
  image: string;
  title: string;
  headline: string;
  text: string;
  link: string;
  image_description: string;
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
  news_list: INews[];
  more_info: IInfo[];
}

type Props = {
  homeData: IHomeData;
};

const Index = ({ homeData }: Props) => {
  const typewriter_texts = homeData.subtitles_hero.map(
    (e) => e.text_for_typing
  );
  console.log(typewriter_texts);
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>Boxtribute</title>
        <script src="js/leaflet-providers.js"></script>
      </Head>

      {/* hero section */}
      <section className="w-full h-auto  relative">
        <div className="">
          <Image
            src={homeData.hero_image}
            alt={homeData.hero_image_description}
            width={1600}
            height={1000}
            z-0
            className="blur"
          />
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 ">
          <h1 className="z-10 text-black text-center text-8xl leading-0">
            {homeData.page_title}
          </h1>
          <h3 className="z-10 text-black text-4xl mb:text-center ">
            <Typewriter
              options={{
                strings: `${typewriter_texts}`,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
        <Link href={homeData.cta_link}>
          <button className="bg-red absolute bottom-1/4 left-1/2 transform -translate-x-1/2 px-8 py-2 text-white text-2xl rounded-lg">
            {homeData.cta_button}
          </button>
        </Link>
      </section>

      {/* facts in numbers section */}
      <section className="p-16 mx-16">
        <h4 className="text-center text-5xl mb-16">
          {homeData.short_description}
        </h4>
        <div className="flex">
          {homeData.facts_in_numbers.map((e, i) => (
            <div
              key={i}
              className={`flex grow flex-col bg-blue flex-1 p-8 m-8 items-center ${
                i % 2 == 0 ? "bg-blue" : "bg-navy text-white"
              }`}
            >
              <img src={e.icon} className="h-24 w-24 mb-4" />
              <h1 className="text-7xl">
                <AnimatedNumber
                  value={e.number}
                  duration={1500}
                  formatValue={(n) => n.toFixed(0)}
                  configs={(index) => {
                    return {
                      mass: 1,
                      tension: 230 * (index + 1),
                      friction: 140,
                    };
                  }}
                />
              </h1>
              <p className="text-center">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* news section */}
      <section>
        {homeData.news_list.map((e) => (
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

  const footerData = getDataBySlug("footer/footer_data");
  const homeData = getDataBySlug("home/home_data");

  return {
    props: { footerData, homeData },
  };
};
