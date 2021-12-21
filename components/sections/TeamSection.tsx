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
    return <div>{team_members.map(teamMember => (
        <div style={{ backgroundColor: "blue" }}>
            <img src={teamMember.picture} className="w-12 h-12 rounded-full mr-4"/>
            <h2>{teamMember.name}</h2>
            <h2>{teamMember.role}</h2>
            
        </div>
    ))}
    </div>
}