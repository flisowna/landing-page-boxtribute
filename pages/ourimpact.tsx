import dynamic from "next/dynamic";
import { MapSectionData } from "../components/sections/MapSection";
import { getPostBySlug } from "../lib/api";

const MapSection = dynamic(() => import("../components/map"), {
  ssr: false,
});

type Props = {
  mapSectionData: MapSectionData;
};

export const OurImpact = ({ mapSectionData }: Props) => {
  return (
    <div>
      <h1>Our Impact</h1>
      {/* <MapSection map_pointers={mapSectionData.map_pointers} /> */}
    </div>
  );
};

export default OurImpact;

export const getStaticProps = async () => {
  const mapSectionData = getPostBySlug("our_impact/map-pointers");

  return {
    props: { mapSectionData },
  };
};
