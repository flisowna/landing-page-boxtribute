import Link from "next/link";

type Props = {
  title: string;
  headline: string;
  text: string;
  button_text: string;
  button_image: string;
  slug: string;
  link: string;
};

const NewsSnippet = ({
  title,
  headline,
  text,
  button_image,
  button_text,
  slug,
}: Props) => {
  return (
    <>
      <div className="flex bg-gray ">
        <div className="flex flex-col mx-32 my-16">
          <h1 className="text-6xl font-bold uppercase">{title}</h1>
          <h3 className="text-2xl mb-6">{headline}</h3>
          <p>{text}</p>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="flex text-red text-5xl mt-8 ">
              <h3 className="mr-16">{button_text}</h3>
              <img src={button_image} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsSnippet;
