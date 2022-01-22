import React from "react"
import Link from 'next/link'
import Image from 'next/image'

export interface TeamMember {
    name: string
    role: string
    picture: string
    link: string
}

export interface TeamSectionData {
    team_members: Array<TeamMember>
}

export const TeamSection = ({ team_members }: TeamSectionData) => {
    return <div className="flex flex-row flex-wrap justify-center">{team_members.map(teamMember => (
        <div className="m-4 flex flex-col w-28 h-46 p-2 items-center">
            <img src={teamMember.picture} className="w-20 h-20 rounded-full"/>
            <h3 className="text-sm mt-2 text-center">{teamMember.name}</h3>
            <h4 className="text-xs">{teamMember.role}</h4>
            
        </div>
    ))}
    </div>
}