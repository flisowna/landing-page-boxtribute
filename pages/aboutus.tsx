import {
  TeamSection,
  ITeamSectionData,
} from "../components/sections/TeamSection";
import { getDataBySlug } from "../lib/api";

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
  const teamSectionData = getDataBySlug("team");

  return {
    props: { teamSectionData },
  };
};
