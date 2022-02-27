import {
  TeamSection,
  ITeamSectionData,
} from "../components/sections/TeamSection";
import { getPostBySlug } from "../lib/api";

type Props = {
  teamSectionData: ITeamSectionData;
};

export const AboutUs = ({ teamSectionData }: Props) => {
  return (
    <div>
      <TeamSection team_members={teamSectionData.team_members} />
    </div>
  );
};

export default AboutUs;

export const getStaticProps = async () => {
  const teamSectionData = getPostBySlug("team");

  return {
    props: { teamSectionData },
  };
};
