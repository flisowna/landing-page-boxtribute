import React from "react"
import Image from "next/image"


export interface HeroSectionData {
    title: string
    intro: string
    coverImage: string
}

interface Props {
    data: HeroSectionData
}

export const HeroSection = ({ data: heroSectionData }: Props) => {
    return <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div className="z-0 h-36 w-36">
            <Image
            src={heroSectionData.coverImage} 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            
            />
        </div>
        <h1 className="z-10 text-white text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            {heroSectionData.title}
        </h1>
        <h4 className="z-10 text-white text-center md:text-left text-lg mt-5 md:pl-8">
            {heroSectionData.intro}
        </h4>
    </section>
}
