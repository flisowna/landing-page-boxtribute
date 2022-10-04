import { getDataBySlug } from "../lib/api";
import Image from "next/image";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import SectionTitle from "../components/SectionTitle";


type ITextAndImage = {
  image: string;
  paragraph_s_group: IParagraph[];
  description: string;
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
  title_section_1: string;
  paragraphs_group_intro: IParagraph[];
  text_with_image_for_the_story: ITextAndImage[];
  text_legal: string;
  title_section_2: string;
  team_member: ITeamMember[];
}

type Props = {
  aboutUsData: IAboutUsData;
};

export const AboutUs = ({ aboutUsData }: Props) => {

  const handleDragStart = (e: any) => e.preventDefault();

  const carouselItems = aboutUsData.hero_images_with_description.map(e => 
    <img src={e.image} alt={e.description} onDragStart={handleDragStart} role="presentation" />,
    )

  return (
    <>
      {/* hero section */}
      <section>
        <h1 className="text-8xl text-center">
          {aboutUsData.title_of_the_page}
        </h1>
        <div className="flex justify-center items-center ml-10">
        <AliceCarousel mouseTracking items={carouselItems} />
        </div>
      </section>
      {/* our story section */}
      <section>
        {/* <div className="mx-32 my-16"> */}
          <SectionTitle title={aboutUsData.title_section_1}/>

          {aboutUsData.paragraphs_group_intro.map((p, i) => (
            <p key={i} className="text-2xl my-4">
              {p.paragraph}
            </p>
          ))}
        {/* </div> */}
        {aboutUsData.text_with_image_for_the_story.map((e, i) =>
          i % 2 == 0 ? (
            <div key={i} className="flex py-16 px-32 justify-between">
              <div className="flex flex-1 flex-col">
                {e.paragraph_s_group.map((p) => (
                  <p className="text-2xl my-4">{p.paragraph}</p>
                ))}
              </div>
              <div className="flex-2 ml-16">
                <Image
                  src={e.image}
                  alt={e.description}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ) : (
            <div key={i} className="flex py-16 px-32 justify-between bg-gray">
              <div className="flex-2 mr-16">
                <Image
                  src={e.image}
                  alt={e.description}
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col ">
                {e.paragraph_s_group.map((p) => (
                  <p className="text-2xl my-4">{p.paragraph}</p>
                ))}
              </div>
            </div>
          )
        )}
      </section>
      <section className="bg-blue py-16 text-2xl">
        <h3 className="text-center mx-48">{aboutUsData.text_legal}</h3>
      </section>
      {/* team section */}
      <section>
        <h2 className="mx-32 text-4xl p-8">{aboutUsData.title_section_2}</h2>
        <div className="flex flex-wrap justify-center mx-8">
          {aboutUsData.team_member.map((e, i) => (
            <div key={i} className="m-4">
              <Image
                src={e.image}
                alt={e.description}
                width={350}
                height={350}
              />
            </div>
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
