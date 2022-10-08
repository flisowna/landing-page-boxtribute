import { getDataBySlug } from "../lib/api";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import ImageText5050 from "../components/ImageText5050";
import TextBlock from "../components/TextBlock";
import { TeamMember } from "../components/TeamMember";

type ITextAndImage = {
  image: string;
  paragraph_s_group: IParagraph[];
  description_for_the_image: string;
};

export type IHeroImage = {
  image: string;
  description: string;
};

type IParagraph = {
  paragraph: string;
};

export interface ITeamMember {
  name: string;
  surname: string;
  role: string;
  image: string;
  link: string;
  description: string;
}
export interface IAboutUsData {
  title_of_the_page: string;
  hero_images_with_description: IHeroImage[];
  title_of_the_story: string;
  text_with_picture_for_the_story: ITextAndImage[];
  full_width_picture: string;
  full_width_image_description: string;
  text_block_1: string;
  text_block_2: string;
  text_block_3: string;
  text_legal: string;
  title_for_the_team_section: string;
  text_for_team_section: string;
  team_member: ITeamMember[];
}

type Props = {
  aboutUsData: IAboutUsData;
};

export const AboutUs = ({ aboutUsData }: Props) => {
  const handleDragStart = (e: any) => e.preventDefault();

  const carouselItems = aboutUsData.hero_images_with_description.map((e) => (
    <img
      src={e.image}
      alt={e.description}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));

  return (
    <>
      {/* hero section */}
      <section>
        <h1 className="text-center">{aboutUsData.title_of_the_page}</h1>
        {/* <div className="flex justify-center items-center ml-10">
          <AliceCarousel mouseTracking items={carouselItems} />
        </div> */}
      </section>
      {/* our story section */}
      <section>
        <div className="md:px-32 bg-blue">
          <SectionTitle title={aboutUsData.title_of_the_story} />
          <div className="md:py-16">
            <ImageText5050
              bg_color="blue"
              image={aboutUsData.text_with_picture_for_the_story[0].image}
              image_description={
                aboutUsData.text_with_picture_for_the_story[0]
                  .description_for_the_image
              }
            >
              {aboutUsData.text_with_picture_for_the_story[0].paragraph_s_group.map(
                (e, i) => (
                  <p className="lg:pb-6 pb-4" key={i}>
                    {e.paragraph}
                  </p>
                )
              )}
            </ImageText5050>
          </div>
        </div>
        <TextBlock text_justify="left">{aboutUsData.text_block_1}</TextBlock>
        <Image
          src={aboutUsData.full_width_picture}
          alt={aboutUsData.full_width_image_description}
          width={1440}
          height={996}
        />
        <div className="py-12 px-12 md:py-16 md:px-32">
          <ImageText5050
            bg_color="white"
            image={aboutUsData.text_with_picture_for_the_story[1].image}
            image_description={
              aboutUsData.text_with_picture_for_the_story[1]
                .description_for_the_image
            }
          >
            {aboutUsData.text_with_picture_for_the_story[1].paragraph_s_group.map(
              (e, i) => (
                <p className="lg:pb-6 pb-4" key={i}>
                  {e.paragraph}
                </p>
              )
            )}
          </ImageText5050>
        </div>
        <TextBlock text_justify="left" bg_color="navy" text_color="white">
          {aboutUsData.text_block_2}
        </TextBlock>
        <div className="py-12 px-12 md:py-16 md:px-32">
          <ImageText5050
            bg_color="white"
            image={aboutUsData.text_with_picture_for_the_story[2].image}
            image_description={
              aboutUsData.text_with_picture_for_the_story[2]
                .description_for_the_image
            }
          >
            {aboutUsData.text_with_picture_for_the_story[2].paragraph_s_group.map(
              (e, i) => (
                <p className="lg:pb-6 pb-4" key={i}>
                  {e.paragraph}
                </p>
              )
            )}
          </ImageText5050>
        </div>
      </section>
      <TextBlock text_justify="center" bg_color="blue">
        {aboutUsData.text_legal}
      </TextBlock>
      {/* team section */}
      <section>
        <h2 className="mx-32 text-4xl p-8 text-center">
          {aboutUsData.title_for_the_team_section}
        </h2>
        <div className="prose lg:prose-xl">
          <p className="p-4">{aboutUsData.text_for_team_section}</p>
        </div>
        <div className="flex flex-wrap justify-center mx-8">
          {aboutUsData.team_member.map((e, i) => (
            <TeamMember teamMemberData={e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;

export const getStaticProps = async () => {
  const aboutUsData = getDataBySlug("aboutus/about_us_data");

  return {
    props: { aboutUsData },
  };
};
