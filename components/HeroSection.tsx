import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CTAButton from "./CTAButton";

interface ITypewriterText {
  text_for_typing: string;
}

export interface HeroSectionData {
  hero_image: string;
  hero_image_description: string;
  page_title: string;
  subtitles_hero: ITypewriterText[];
  cta_button: string;
  cta_link: string;
}

interface Props {
  heroSectionData: HeroSectionData;
}

export const HeroSection = ({ heroSectionData }: Props) => {
  return (
    <section className="w-full h-auto relative">
    <div>
      <Image
        src={heroSectionData.hero_image}
        alt={heroSectionData.hero_image_description}
        width={1600}
        height={1000}
        z-0
        className="blur"
      />
    </div>
    <div className="absolute top-1/4 leading-none mb-4 left-1/2 transform -translate-x-1/2 ">
      <h1 className="z-10 text-black text-center leading-0">
        {heroSectionData.page_title}
      </h1>
      <h2 className="z-10 text-black mx-0 md:text-6xl ">
        <Typewriter
          options={{
            strings: [`${heroSectionData.subtitles_hero.map(
              (e) => e.text_for_typing
            )}`],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
    <div className="cta-button-hero-section-home">
      <CTAButton
        cta_button={heroSectionData.cta_button}
        cta_link={heroSectionData.cta_link}
      />
    </div>
  </section>
  );
};

