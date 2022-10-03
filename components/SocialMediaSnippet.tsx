import Link from "next/link";
import Image from "next/image";

type ISocialMediaData = {
  title: string;
  image: string;
  image_description: string;
  text: string;
  link: string;
};

interface Props {
  socialMediaData: ISocialMediaData[];
}

const SocialMediaSnippet = ({ socialMediaData }: Props) => {
  return (
    <>
      <ul className="flex flex-col lg:flex-row lg:bg-blue lg:py-16 px-4 lg:px-16 last:bg-blue ">
        {socialMediaData.map((e, i) => (
          <Link key={i} href={e.link}>
            <a className="flex flex-1 justify-between mb-8 lg:mb-0 lg-py-0 lg:flex-col mx-8 pb-6 grow bg-white border-b-2 lg:border-0 social-snippet">
              <div className="flex order-2 lg:order-1 justify-center items-center lg:w-full lg:overflow-hidden lg:h-60">
                <Image
                  //   className="shrink-0 min-h-full min-w-full"
                  src={e.image}
                  alt={e.image_description}
                  width={800}
                  height={500}
                />
                {/* <div className="w-full md:w-1/2 h-1/2">
        
      </div> */}
              </div>
              <div className="flex items-start flex-col p-6 order-1 lg:order-2">
                <h2 className="text-5xl mb-4">{e.title}</h2>
                <p className="hidden lg:block">{e.text}</p>

                <div className="flex lg:hidden text-red text-5xl mt-8 ">
                  <h3 className="mr-16">Next</h3>
                  <img src="/uploads/arrow.svg" />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaSnippet;
