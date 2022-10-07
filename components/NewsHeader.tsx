export interface INewsHeaderData {
  title: string;
  headline: string;
  shortText: string;
}

type Props = {
  newsHeaderData: INewsHeaderData;
};

const NewsHeader = ({ newsHeaderData }: Props) => {
  return (
    <div className="flex bg-gray ">
      <div className="flex flex-col mx-32 my-16">
        <h1 className="text-6xl font-bold uppercase">{newsHeaderData.title}</h1>
        <h3 className="text-2xl mb-6">{newsHeaderData.headline}</h3>
        <h2>{newsHeaderData.shortText}</h2>
      </div>
    </div>
  );
};

export default NewsHeader;
