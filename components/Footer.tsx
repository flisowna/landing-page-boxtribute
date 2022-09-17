import Link from "next/link";
import Facebook from "public/uploads/facebook.svg";
import { getDataBySlug } from "../../lib/api";

type ISocialMedia = {
  image: string;
  description: string;
  link: string;
};

interface IFooterData {
  boxtribute_logo: string;
  social_media_icons: ISocialMedia[];
  boxtribute_trademark: string;
}

export interface Props {
  footerData: IFooterData;
}

export const Footer = ({ footerData }: Props) => {
  return (
    <section className="bg-navy py-16">
      <div className="flex flex-col items-center">
        <img className="h-42" src={footerData.boxtribute_logo} />
        <div className="flex flex-col">
          {footerData.social_media_icons.map((e) => (
            <Link href={e.link}>
              <a>
                <img className="h-42" alt={e.description} src={e.image} />
              </a>
            </Link>
          ))}
        </div>
        <h3>{footerData.boxtribute_trademark}</h3>
      </div>
    </section>
  );
};

export default Footer;

export const getStaticProps = async () => {
  const footerData = getDataBySlug("footer/footer_data");

  return {
    props: { footerData },
  };
};
