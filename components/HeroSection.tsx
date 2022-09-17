import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export interface HeroSectionData {
  title: string;
  intro: string;
  coverImage: string;
}

interface Props {
  heroSectionData: HeroSectionData;
}

export const HeroSection = ({ heroSectionData }: Props) => {
  return (
    <section className="relative">
      <div className="z-0 relative w-full h-auto">
        <Image
          src={heroSectionData.coverImage}
          width={1400}
          height={900}
        //   quality={75}
        //   priority
          alt="Picture of kids in a refugee camping"
          layout="responsive"
          placeholder="blur"
          blurDataURL={heroSectionData.coverImage}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="z-10 text-black text-8xl md:text-8xl font-bold  md:pr-8">
        {heroSectionData.title}
      </h1>
      <h4 className="z-10 text-black text-4xl text-center bg-blue py-4">
        <Typewriter
              options={{
                strings: ['By aid workers, for aid workers!'],
                autoStart: true,
                loop: true}}
            />
      </h4>
      </div>
    </section>
  );
};

{/* <Container>
          <div className="flex justify-end flex-col">
            <h1 className="text-6xl uppercase">boxtribute</h1>
            <Typewriter
              options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true}}
            />
          </div>
        </Container> */}
