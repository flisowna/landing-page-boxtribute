import React from "react"
import Link from 'next/link'

export interface TeamMember {
    name: string
    role: string
    picture: string
}

export interface TeamSectionData {
    team_members: Array<TeamMember>
}

export const TeamSection = ({ team_members }: TeamSectionData) => {
    return <div>{team_members.map(teamMember => (
        <div style={{ backgroundColor: "blue" }}>
            <h2>{teamMember.name}</h2>
            <h2>{teamMember.role}</h2>
        </div>
    ))}
    </div>
}