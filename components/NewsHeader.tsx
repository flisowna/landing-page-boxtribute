import Link from "next/link";

type Props = {
  title: string;
  headline: string;
  text: string;
};

const NewsHeader = ({
  title,
  headline,
  text,
}: Props) => {
  return (
    <>
      <div className="flex bg-gray ">
        <div className="flex flex-col mx-32 my-16">
          <h1 className="text-6xl font-bold uppercase">{title}</h1>
          <h3 className="text-2xl mb-6">{headline}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default NewsHeader;


