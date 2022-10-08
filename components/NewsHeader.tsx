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
    <div className="flex bg-gray lg:py-10">
      <div className="flex flex-col">
        <h2 className="font-bold uppercase">{newsHeaderData.title}</h2>
        <h3>{newsHeaderData.headline}</h3>
        <h4>{newsHeaderData.shortText}</h4>
      </div>
    </div>
  );
};

export default NewsHeader;
