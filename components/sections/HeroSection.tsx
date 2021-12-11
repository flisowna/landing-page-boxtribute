import React from "react"


export interface HeroSectionData {
    title: string
    coverImage: string
}

interface Props {
    data: HeroSectionData
}

export const HeroSection = ({ data: heroSectionData }: Props) => {
    return <div style={{backgroundColor: "red"}}>
        <h1>{heroSectionData.title}</h1>
    </div>
 }
